import { Constructor } from "./dispatcher";

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
    private _entities: Map<number, Entity>;
    private _components: Map<Constructor<any>, Map<number, Component>>;
    private _singletons: Map<Constructor<any>, SingletonComponent>;
    private _creatingCompontes: Component[] = [];
    private _timers: Timer[] = [];
    private _delays: Map<string | number, Timer> = new Map();
    private _time: number = 0;
    private _context: unknown;

    public constructor(context: unknown) {
        this._context = context;
        this._systems = [];
        this._namedSystems = new Map();
        this._entities = new Map();
        this._components = new Map();
        this._singletons = new Map();
    }

    public destroy() {
        for (const eid of Array.from(this._entities.keys())) {
            this.removeEntity(eid);
        }
        this._systems.forEach((sys) => sys.onDestroy());
        this._systems.length = 0;
        this._namedSystems.clear();
        this._entities.clear();
        this._components.clear();
    }

    public addSystem<T extends System>(cls: Constructor<T>) {
        const sys = new cls(this, this._context);
        this._namedSystems.set(cls, sys);
        this._systems.push(sys);
        sys.onCreate();
    }

    public getSystem<T extends System>(cls: Constructor<T>) {
        return this._namedSystems.get(cls) as T | undefined;
    }

    private _execCallback(callback: Callback, thisArg: unknown) {
        if (thisArg) {
            callback.apply(thisArg);
        } else {
            callback();
        }
    }

    public update(dt: number) {
        this._time += dt;
        this._timers.forEach((timer) => {
            timer.time += dt;
            if (timer.time >= timer.interval) {
                timer.time -= timer.interval;
                this._execCallback(timer.callback, timer.thisArg);
            }
        });
        this._delays.forEach((timer, key) => {
            if (timer.time <= this._time) {
                this._delays.delete(key);
                this._execCallback(timer.callback, timer.thisArg);
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

    public schedule(interval: number, callback: Callback, thisArg?: unknown, delay?: number) {
        this._timers.push({
            interval: interval,
            time: -(delay ?? 0),
            callback: callback,
            thisArg: thisArg,
        });
    }

    public delay(time: number, key: string | number, callback: Callback, thisArg?: unknown) {
        if (this._delays.has(key)) {
            console.warn(`ecs.delay: overwrite the delay callback with key ${key}`);
        }
        if (time < 0) {
            this._execCallback(callback, thisArg);
            return;
        }
        this._delays.set(key, {
            interval: 0,
            time: this._time + time,
            callback: callback,
            thisArg: thisArg,
        });
    }

    public killDelay(key: string) {
        this._delays.delete(key);
    }

    public createEntity(eid: number | null = null) {
        eid = eid ?? --this._eid;
        let entity = this._entities.get(eid);
        if (!entity) {
            entity = new Entity(eid, this);
            this._entities.set(eid, entity);
            this._systems.forEach((sys) => sys.onAddEntity?.(entity!));
        }
        return entity;
    }

    public get time() {
        return this._time;
    }

    public getEntity(eid: number) {
        return this._entities.get(eid);
    }

    public removeEntity(eid: number) {
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
        }
    }

    public addSingletonComponent<T extends SingletonComponent>(cls: Constructor<T>) {
        let component = this._singletons.get(cls);
        if (!component) {
            component = new cls(this, this._context);
            this._singletons.set(cls, component);
        }
        return component as T;
    }

    public getSingletonComponent<T extends SingletonComponent>(cls: Constructor<T>) {
        return this._singletons.get(cls) as T | undefined;
    }

    public getComponents<T extends Component>(cls: Constructor<T>) {
        let components = this._components.get(cls);
        if (!components) {
            components = new Map<number, T>();
            this._components.set(cls, components);
        }
        return components as Map<number, T>;
    }

    public addComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        const entity = this.getEntity(eid);
        if (entity) {
            return this.__addComponent(entity, cls);
        }
    }

    public getComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        return this.__getComponent(eid, cls);
    }

    public removeComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        return this.__removeComponent(eid, cls);
    }

    // internal use
    public __addComponent<T extends Component>(entity: Entity, cls: Constructor<T>) {
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

    public __hasComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        const components = this._components.get(cls);
        return components?.has(eid) ?? false;
    }

    public __getComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        const components = this._components.get(cls);
        return components?.get(eid) as T | undefined;
    }

    public __removeComponent<T extends Component>(eid: number, cls: Constructor<T>) {
        const components = this._components.get(cls);
        const component = components?.get(eid);
        if (component) {
            this._systems.forEach((sys) => sys.onRemoveComponent?.(component));
        }
        return components?.delete(eid);
    }

    public __getComponents(entity: Entity) {
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

    public constructor(entity: Entity) {
        this._entity = entity;
    }

    public reset?(): void;

    public get alive() {
        return !!this.entity.ecs.getEntity(this.eid);
    }

    public get entity() {
        return this._entity;
    }

    public get eid() {
        return this.entity.eid;
    }

    public addComponent<T extends Component>(cls: Constructor<T>): T {
        return this.entity.addComponent(cls);
    }

    public hasComponent<T extends Component>(cls: Constructor<T>): boolean {
        return this.entity.hasComponent(cls);
    }

    public removeComponent<T extends Component>(cls: Constructor<T>) {
        return this.entity.removeComponent(cls);
    }

    public getComponent<T extends Component>(cls: Constructor<T>): T | undefined {
        return this.entity.getComponent(cls);
    }

    public getComponents(): Component[] {
        return this.entity.getComponents();
    }
}

export interface SingletonComponent {
    ecs: World;
}

export class Entity {
    protected _eid: number;

    public etype: number = 0;

    public constructor(eid: number, public readonly ecs: World) {
        this._eid = eid;
    }

    public get eid() {
        return this._eid;
    }

    public addComponent<T extends Component>(cls: Constructor<T>): T {
        return this.ecs.__addComponent(this, cls);
    }

    public hasComponent<T extends Component>(cls: Constructor<T>): boolean {
        return this.ecs.__hasComponent(this._eid, cls);
    }

    public removeComponent<T extends Component>(cls: Constructor<T>) {
        return this.ecs.__removeComponent(this._eid, cls);
    }

    public getComponent<T extends Component>(cls: Constructor<T>): T | undefined {
        return this.ecs.__getComponent(this._eid, cls);
    }

    public getComponents(): Component[] {
        return this.ecs.__getComponents(this);
    }
}

export abstract class System {
    public constructor(public readonly ecs: World, public readonly context: unknown) {}

    public onCreate() {}

    public onDestroy() {}

    public filter(entity: Entity) {
        return true;
    }

    public abstract update(dt: number): void;

    public onAddComponent?(component: Component): void;

    public onRemoveComponent?(component: Component): void;

    public onAddEntity?(entity: Entity): void;

    public onRemoveEntity?(entity: Entity): void;
}
