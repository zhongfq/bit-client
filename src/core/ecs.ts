import { Constructor } from "./dispatcher";

export namespace ecs {
    export interface Callback {
        (...any: any[]): void;
    }

    type Timer = {
        interval: number;
        time: number;
        callback: Callback;
        thisArg: unknown;
    };

    export class World {
        private _eid: number = 0;
        private _systems: System[];
        private _namedSystems: Map<Constructor<any>, System>;
        private _caches: Map<System, Entity[]>;
        private _entities: Map<number, Entity>;
        private _components: Map<Constructor<any>, Map<number, Component>>;
        private _singletons: Map<Constructor<any>, SingletonComponent>;
        private _creatingCompontes: Component[] = [];
        private _timers: Timer[] = [];
        private _time: number = 0;

        constructor() {
            this._systems = [];
            this._namedSystems = new Map();
            this._caches = new Map();
            this._entities = new Map();
            this._components = new Map();
            this._singletons = new Map();
        }

        destroy() {
            for (const eid of Array.from(this._entities.keys())) {
                this.removeEntity(eid);
            }
            this._systems.forEach((sys) => sys.onDestroy());
            this._systems.length = 0;
            this._namedSystems.clear();
            this._caches.clear();
            this._entities.clear();
            this._components.clear();
        }

        addSystem(sys: System) {
            this._namedSystems.set(sys.constructor as Constructor<any>, sys);
            this._systems.push(sys);
            sys.__setECS(this);
            sys.onCreate();
        }

        getSystem<T extends System>(cls: Constructor<T>) {
            return this._namedSystems.get(cls) as T | undefined;
        }

        update(dt: number) {
            this._time += dt;
            this._timers.forEach((timer) => {
                timer.time += dt;
                if (timer.time >= timer.interval) {
                    timer.time -= timer.interval;
                    if (timer.thisArg) {
                        timer.callback.apply(timer.thisArg);
                    } else {
                        timer.callback();
                    }
                }
            });
            if (this._creatingCompontes.length) {
                this._creatingCompontes.forEach((component) => {
                    this._systems.forEach((sys) => sys.onAddComponent?.(component));
                });
                this._creatingCompontes.length = 0;
            }
            for (const sys of this._systems) {
                sys.update(dt);
            }
        }

        schedule(interval: number, callback: Callback, thisArg?: unknown, delay?: number) {
            this._timers.push({
                interval: interval,
                time: -(delay ?? 0),
                callback: callback,
                thisArg: thisArg,
            });
        }

        select(sys: System) {
            let entities = this._caches.get(sys);
            if (!entities) {
                entities = [];
                this._caches.set(sys, entities);
                for (const entity of this._entities.values()) {
                    if (sys.filter(entity)) {
                        entities.push(entity);
                    }
                }
            }
            return entities;
        }

        createEntity(eid: number | null = null) {
            eid = eid ?? --this._eid;
            let entity = this._entities.get(eid);
            if (!entity) {
                entity = new Entity(eid, this);
                this._entities.set(eid, entity);
                this._caches.clear();
                this._systems.forEach((sys) => sys.onAddEntity?.(entity!));
            }
            return entity;
        }

        get time() {
            return this._time;
        }

        getEntity(eid: number) {
            return this._entities.get(eid);
        }

        removeEntity(eid: number) {
            const entity = this.getEntity(eid);
            if (entity) {
                const components = entity.getComponents();
                components.forEach((value) => {
                    this._systems.forEach((sys) => sys.onRemoveComponent?.(value));
                });
                components.forEach((value) => {
                    this.__removeComponent(entity.eid, value.constructor as Constructor<any>);
                });
                this._systems.forEach((sys) => sys.onRemoveEntity?.(entity));
                this._entities.delete(eid);
                this._caches.clear();
            }
        }

        addSingletonComponent<T extends SingletonComponent>(cls: Constructor<T>) {
            let component = this._singletons.get(cls);
            if (!component) {
                component = new cls(this);
                this._singletons.set(cls, component);
            }
            return component as T;
        }

        getSingletonComponent<T extends SingletonComponent>(cls: Constructor<T>) {
            return this._singletons.get(cls) as T | undefined;
        }

        getComponents<T extends Component>(cls: Constructor<T>) {
            let components = this._components.get(cls);
            if (!components) {
                components = new Map<number, T>();
                this._components.set(cls, components);
            }
            return components as Map<number, T>;
        }

        addComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            const entity = this.getEntity(eid);
            if (entity) {
                return this.__addComponent(entity, cls);
            }
        }

        getComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            return this.__getComponent(eid, cls);
        }

        removeComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            return this.__removeComponent(eid, cls);
        }

        // internal use
        __addComponent<T extends Component>(entity: Entity, cls: Constructor<T>) {
            let components = this._components.get(cls);
            if (!components) {
                components = new Map();
                this._components.set(cls, components);
            }
            let component = components.get(entity.eid);
            if (!component) {
                component = new cls(entity);
                components.set(entity.eid, component);
                this._creatingCompontes.push(component);
            }
            return component as T;
        }

        __hasComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            const components = this._components.get(cls);
            return components?.has(eid) ?? false;
        }

        __getComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            const components = this._components.get(cls);
            return components?.get(eid) as T | undefined;
        }

        __removeComponent<T extends Component>(eid: number, cls: Constructor<T>) {
            const components = this._components.get(cls);
            const component = components?.get(eid);
            if (component) {
                this._systems.forEach((sys) => sys.onRemoveComponent?.(component));
            }
            return components?.delete(eid);
        }

        __getComponents(entity: Entity) {
            const components: Component[] = [];
            for (const value of this._components.values()) {
                const component = value.get(entity.eid);
                if (component) {
                    components.push(component);
                }
            }
            return components;
        }
    }

    export abstract class Component {
        protected _entity: Entity;

        constructor(entity: Entity) {
            this._entity = entity;
        }

        reset?(): void;

        get entity() {
            return this._entity;
        }

        get eid() {
            return this.entity.eid;
        }

        addComponent<T extends Component>(cls: Constructor<T>): T {
            return this.entity.addComponent(cls);
        }

        hasComponent<T extends Component>(cls: Constructor<T>): boolean {
            return this.entity.hasComponent(cls);
        }

        removeComponent<T extends Component>(cls: Constructor<T>) {
            return this.entity.removeComponent(cls);
        }

        getComponent<T extends Component>(cls: Constructor<T>): T | undefined {
            return this.entity.getComponent(cls);
        }

        getComponents(): Component[] {
            return this.entity.getComponents();
        }
    }

    export abstract class SingletonComponent {
        constructor(readonly ecs?: World) {}
    }

    export class Entity {
        protected _eid: number;

        etype: number = 0;

        constructor(eid: number, readonly ecs: World) {
            this._eid = eid;
        }

        get eid() {
            return this._eid;
        }

        addComponent<T extends Component>(cls: Constructor<T>): T {
            return this.ecs.__addComponent(this, cls);
        }

        hasComponent<T extends Component>(cls: Constructor<T>): boolean {
            return this.ecs.__hasComponent(this._eid, cls);
        }

        removeComponent<T extends Component>(cls: Constructor<T>) {
            return this.ecs.__removeComponent(this._eid, cls);
        }

        getComponent<T extends Component>(cls: Constructor<T>): T | undefined {
            return this.ecs.__getComponent(this._eid, cls);
        }

        getComponents(): Component[] {
            return this.ecs.__getComponents(this);
        }
    }

    export abstract class System {
        private _ecs!: World;

        constructor() {}

        onCreate() {}

        onDestroy() {}

        __setECS(ecs: World) {
            this._ecs = ecs;
        }

        get ecs() {
            return this._ecs;
        }

        filter(entity: Entity) {
            return true;
        }

        abstract update(dt: number): void;

        onAddComponent?(component: Component): void;

        onRemoveComponent?(component: Component): void;

        onAddEntity?(entity: Entity): void;

        onRemoveEntity?(entity: Entity): void;
    }
}
