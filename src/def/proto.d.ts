// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

/** Namespace bag. */
export namespace bag {

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id?: (number|null);

        /** Item uid */
        uid?: (number|null);

        /** Item num */
        num?: (number|null);

        /** Item expireTs */
        expireTs?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.IItem);

        /** Item id. */
        public id: number;

        /** Item uid. */
        public uid: number;

        /** Item num. */
        public num: number;

        /** Item expireTs. */
        public expireTs: number;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: bag.IItem): bag.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link bag.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link bag.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): bag.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {

        /** c2s_load bagId */
        bagId?: (number|null);
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Ic2s_load);

        /** c2s_load bagId. */
        public bagId: number;

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: bag.Ic2s_load): bag.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link bag.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link bag.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): bag.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load items */
        items?: (bag.IItem[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load items. */
        public items: bag.IItem[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: bag.Is2c_load): bag.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link bag.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link bag.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): bag.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_use_item. */
    interface Ic2s_use_item {

        /** c2s_use_item itemId */
        itemId?: (number|null);

        /** c2s_use_item num */
        num?: (number|null);
    }

    /** Represents a c2s_use_item. */
    class c2s_use_item implements Ic2s_use_item {

        /**
         * Constructs a new c2s_use_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Ic2s_use_item);

        /** c2s_use_item itemId. */
        public itemId: number;

        /** c2s_use_item num. */
        public num: number;

        /**
         * Creates a new c2s_use_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_use_item instance
         */
        public static create(properties?: bag.Ic2s_use_item): bag.c2s_use_item;

        /**
         * Encodes the specified c2s_use_item message. Does not implicitly {@link bag.c2s_use_item.verify|verify} messages.
         * @param message c2s_use_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Ic2s_use_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_use_item message, length delimited. Does not implicitly {@link bag.c2s_use_item.verify|verify} messages.
         * @param message c2s_use_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Ic2s_use_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_use_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_use_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.c2s_use_item;

        /**
         * Decodes a c2s_use_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_use_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.c2s_use_item;

        /**
         * Verifies a c2s_use_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_use_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_use_item
         */
        public static fromObject(object: { [k: string]: any }): bag.c2s_use_item;

        /**
         * Creates a plain object from a c2s_use_item message. Also converts values to other types if specified.
         * @param message c2s_use_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.c2s_use_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_use_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_use_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_use_item. */
    interface Is2c_use_item {

        /** s2c_use_item err */
        err?: (number|null);
    }

    /** Represents a s2c_use_item. */
    class s2c_use_item implements Is2c_use_item {

        /**
         * Constructs a new s2c_use_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Is2c_use_item);

        /** s2c_use_item err. */
        public err: number;

        /**
         * Creates a new s2c_use_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_use_item instance
         */
        public static create(properties?: bag.Is2c_use_item): bag.s2c_use_item;

        /**
         * Encodes the specified s2c_use_item message. Does not implicitly {@link bag.s2c_use_item.verify|verify} messages.
         * @param message s2c_use_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Is2c_use_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_use_item message, length delimited. Does not implicitly {@link bag.s2c_use_item.verify|verify} messages.
         * @param message s2c_use_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Is2c_use_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_use_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_use_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.s2c_use_item;

        /**
         * Decodes a s2c_use_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_use_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.s2c_use_item;

        /**
         * Verifies a s2c_use_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_use_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_use_item
         */
        public static fromObject(object: { [k: string]: any }): bag.s2c_use_item;

        /**
         * Creates a plain object from a s2c_use_item message. Also converts values to other types if specified.
         * @param message s2c_use_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.s2c_use_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_use_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_use_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_composite_item. */
    interface Ic2s_composite_item {

        /** c2s_composite_item itemId */
        itemId?: (number|null);

        /** c2s_composite_item num */
        num?: (number|null);
    }

    /** Represents a c2s_composite_item. */
    class c2s_composite_item implements Ic2s_composite_item {

        /**
         * Constructs a new c2s_composite_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Ic2s_composite_item);

        /** c2s_composite_item itemId. */
        public itemId: number;

        /** c2s_composite_item num. */
        public num: number;

        /**
         * Creates a new c2s_composite_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_composite_item instance
         */
        public static create(properties?: bag.Ic2s_composite_item): bag.c2s_composite_item;

        /**
         * Encodes the specified c2s_composite_item message. Does not implicitly {@link bag.c2s_composite_item.verify|verify} messages.
         * @param message c2s_composite_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Ic2s_composite_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_composite_item message, length delimited. Does not implicitly {@link bag.c2s_composite_item.verify|verify} messages.
         * @param message c2s_composite_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Ic2s_composite_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_composite_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_composite_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.c2s_composite_item;

        /**
         * Decodes a c2s_composite_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_composite_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.c2s_composite_item;

        /**
         * Verifies a c2s_composite_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_composite_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_composite_item
         */
        public static fromObject(object: { [k: string]: any }): bag.c2s_composite_item;

        /**
         * Creates a plain object from a c2s_composite_item message. Also converts values to other types if specified.
         * @param message c2s_composite_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.c2s_composite_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_composite_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_composite_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_composite_item. */
    interface Is2c_composite_item {

        /** s2c_composite_item err */
        err?: (number|null);
    }

    /** Represents a s2c_composite_item. */
    class s2c_composite_item implements Is2c_composite_item {

        /**
         * Constructs a new s2c_composite_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Is2c_composite_item);

        /** s2c_composite_item err. */
        public err: number;

        /**
         * Creates a new s2c_composite_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_composite_item instance
         */
        public static create(properties?: bag.Is2c_composite_item): bag.s2c_composite_item;

        /**
         * Encodes the specified s2c_composite_item message. Does not implicitly {@link bag.s2c_composite_item.verify|verify} messages.
         * @param message s2c_composite_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Is2c_composite_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_composite_item message, length delimited. Does not implicitly {@link bag.s2c_composite_item.verify|verify} messages.
         * @param message s2c_composite_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Is2c_composite_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_composite_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_composite_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.s2c_composite_item;

        /**
         * Decodes a s2c_composite_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_composite_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.s2c_composite_item;

        /**
         * Verifies a s2c_composite_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_composite_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_composite_item
         */
        public static fromObject(object: { [k: string]: any }): bag.s2c_composite_item;

        /**
         * Creates a plain object from a s2c_composite_item message. Also converts values to other types if specified.
         * @param message s2c_composite_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.s2c_composite_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_composite_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_composite_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_discard_item. */
    interface Ic2s_discard_item {

        /** c2s_discard_item itemId */
        itemId?: (number|null);

        /** c2s_discard_item itemUid */
        itemUid?: (number|null);
    }

    /** Represents a c2s_discard_item. */
    class c2s_discard_item implements Ic2s_discard_item {

        /**
         * Constructs a new c2s_discard_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Ic2s_discard_item);

        /** c2s_discard_item itemId. */
        public itemId: number;

        /** c2s_discard_item itemUid. */
        public itemUid: number;

        /**
         * Creates a new c2s_discard_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_discard_item instance
         */
        public static create(properties?: bag.Ic2s_discard_item): bag.c2s_discard_item;

        /**
         * Encodes the specified c2s_discard_item message. Does not implicitly {@link bag.c2s_discard_item.verify|verify} messages.
         * @param message c2s_discard_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Ic2s_discard_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_discard_item message, length delimited. Does not implicitly {@link bag.c2s_discard_item.verify|verify} messages.
         * @param message c2s_discard_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Ic2s_discard_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_discard_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_discard_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.c2s_discard_item;

        /**
         * Decodes a c2s_discard_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_discard_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.c2s_discard_item;

        /**
         * Verifies a c2s_discard_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_discard_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_discard_item
         */
        public static fromObject(object: { [k: string]: any }): bag.c2s_discard_item;

        /**
         * Creates a plain object from a c2s_discard_item message. Also converts values to other types if specified.
         * @param message c2s_discard_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.c2s_discard_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_discard_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_discard_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_discard_item. */
    interface Is2c_discard_item {

        /** s2c_discard_item err */
        err?: (number|null);
    }

    /** Represents a s2c_discard_item. */
    class s2c_discard_item implements Is2c_discard_item {

        /**
         * Constructs a new s2c_discard_item.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Is2c_discard_item);

        /** s2c_discard_item err. */
        public err: number;

        /**
         * Creates a new s2c_discard_item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_discard_item instance
         */
        public static create(properties?: bag.Is2c_discard_item): bag.s2c_discard_item;

        /**
         * Encodes the specified s2c_discard_item message. Does not implicitly {@link bag.s2c_discard_item.verify|verify} messages.
         * @param message s2c_discard_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Is2c_discard_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_discard_item message, length delimited. Does not implicitly {@link bag.s2c_discard_item.verify|verify} messages.
         * @param message s2c_discard_item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Is2c_discard_item, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_discard_item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_discard_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.s2c_discard_item;

        /**
         * Decodes a s2c_discard_item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_discard_item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.s2c_discard_item;

        /**
         * Verifies a s2c_discard_item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_discard_item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_discard_item
         */
        public static fromObject(object: { [k: string]: any }): bag.s2c_discard_item;

        /**
         * Creates a plain object from a s2c_discard_item message. Also converts values to other types if specified.
         * @param message s2c_discard_item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.s2c_discard_item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_discard_item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_discard_item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_items. */
    interface Inotify_items {

        /** notify_items items */
        items?: (bag.IItem[]|null);
    }

    /** Represents a notify_items. */
    class notify_items implements Inotify_items {

        /**
         * Constructs a new notify_items.
         * @param [properties] Properties to set
         */
        constructor(properties?: bag.Inotify_items);

        /** notify_items items. */
        public items: bag.IItem[];

        /**
         * Creates a new notify_items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_items instance
         */
        public static create(properties?: bag.Inotify_items): bag.notify_items;

        /**
         * Encodes the specified notify_items message. Does not implicitly {@link bag.notify_items.verify|verify} messages.
         * @param message notify_items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bag.Inotify_items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_items message, length delimited. Does not implicitly {@link bag.notify_items.verify|verify} messages.
         * @param message notify_items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bag.Inotify_items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bag.notify_items;

        /**
         * Decodes a notify_items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bag.notify_items;

        /**
         * Verifies a notify_items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_items
         */
        public static fromObject(object: { [k: string]: any }): bag.notify_items;

        /**
         * Creates a plain object from a notify_items message. Also converts values to other types if specified.
         * @param message notify_items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bag.notify_items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace chest. */
export namespace chest {

    /** Properties of an EquipItem. */
    interface IEquipItem {

        /** EquipItem id */
        id?: (number|null);

        /** EquipItem attrs */
        attrs?: ({ [k: string]: number }|null);
    }

    /** Represents an EquipItem. */
    class EquipItem implements IEquipItem {

        /**
         * Constructs a new EquipItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.IEquipItem);

        /** EquipItem id. */
        public id: number;

        /** EquipItem attrs. */
        public attrs: { [k: string]: number };

        /**
         * Creates a new EquipItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipItem instance
         */
        public static create(properties?: chest.IEquipItem): chest.EquipItem;

        /**
         * Encodes the specified EquipItem message. Does not implicitly {@link chest.EquipItem.verify|verify} messages.
         * @param message EquipItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.IEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EquipItem message, length delimited. Does not implicitly {@link chest.EquipItem.verify|verify} messages.
         * @param message EquipItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.IEquipItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.EquipItem;

        /**
         * Decodes an EquipItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.EquipItem;

        /**
         * Verifies an EquipItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipItem
         */
        public static fromObject(object: { [k: string]: any }): chest.EquipItem;

        /**
         * Creates a plain object from an EquipItem message. Also converts values to other types if specified.
         * @param message EquipItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.EquipItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EquipItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChestInfo. */
    interface IChestInfo {

        /** ChestInfo new */
        "new"?: (chest.IEquipItem|null);

        /** ChestInfo equips */
        equips?: ({ [k: string]: chest.IEquipItem }|null);

        /** ChestInfo fullAttrs */
        fullAttrs?: ({ [k: string]: number }|null);

        /** ChestInfo amount */
        amount?: (number|null);

        /** ChestInfo lv */
        lv?: (number|null);

        /** ChestInfo exp */
        exp?: (number|null);

        /** ChestInfo dungeonId */
        dungeonId?: (number|null);
    }

    /** Represents a ChestInfo. */
    class ChestInfo implements IChestInfo {

        /**
         * Constructs a new ChestInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.IChestInfo);

        /** ChestInfo new. */
        public new?: (chest.IEquipItem|null);

        /** ChestInfo equips. */
        public equips: { [k: string]: chest.IEquipItem };

        /** ChestInfo fullAttrs. */
        public fullAttrs: { [k: string]: number };

        /** ChestInfo amount. */
        public amount: number;

        /** ChestInfo lv. */
        public lv: number;

        /** ChestInfo exp. */
        public exp: number;

        /** ChestInfo dungeonId. */
        public dungeonId: number;

        /**
         * Creates a new ChestInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChestInfo instance
         */
        public static create(properties?: chest.IChestInfo): chest.ChestInfo;

        /**
         * Encodes the specified ChestInfo message. Does not implicitly {@link chest.ChestInfo.verify|verify} messages.
         * @param message ChestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.IChestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChestInfo message, length delimited. Does not implicitly {@link chest.ChestInfo.verify|verify} messages.
         * @param message ChestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.IChestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChestInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.ChestInfo;

        /**
         * Decodes a ChestInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.ChestInfo;

        /**
         * Verifies a ChestInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChestInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChestInfo
         */
        public static fromObject(object: { [k: string]: any }): chest.ChestInfo;

        /**
         * Creates a plain object from a ChestInfo message. Also converts values to other types if specified.
         * @param message ChestInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.ChestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChestInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChestInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: chest.Ic2s_load): chest.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link chest.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link chest.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): chest.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load info */
        info?: (chest.IChestInfo|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load info. */
        public info?: (chest.IChestInfo|null);

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: chest.Is2c_load): chest.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link chest.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link chest.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): chest.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_open. */
    interface Ic2s_open {
    }

    /** Represents a c2s_open. */
    class c2s_open implements Ic2s_open {

        /**
         * Constructs a new c2s_open.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Ic2s_open);

        /**
         * Creates a new c2s_open instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_open instance
         */
        public static create(properties?: chest.Ic2s_open): chest.c2s_open;

        /**
         * Encodes the specified c2s_open message. Does not implicitly {@link chest.c2s_open.verify|verify} messages.
         * @param message c2s_open message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Ic2s_open, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_open message, length delimited. Does not implicitly {@link chest.c2s_open.verify|verify} messages.
         * @param message c2s_open message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Ic2s_open, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_open message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_open
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_open;

        /**
         * Decodes a c2s_open message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_open
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_open;

        /**
         * Verifies a c2s_open message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_open message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_open
         */
        public static fromObject(object: { [k: string]: any }): chest.c2s_open;

        /**
         * Creates a plain object from a c2s_open message. Also converts values to other types if specified.
         * @param message c2s_open
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.c2s_open, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_open to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_open
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_open. */
    interface Is2c_open {

        /** s2c_open err */
        err?: (number|null);

        /** s2c_open info */
        info?: (chest.IChestInfo|null);
    }

    /** Represents a s2c_open. */
    class s2c_open implements Is2c_open {

        /**
         * Constructs a new s2c_open.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Is2c_open);

        /** s2c_open err. */
        public err: number;

        /** s2c_open info. */
        public info?: (chest.IChestInfo|null);

        /**
         * Creates a new s2c_open instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_open instance
         */
        public static create(properties?: chest.Is2c_open): chest.s2c_open;

        /**
         * Encodes the specified s2c_open message. Does not implicitly {@link chest.s2c_open.verify|verify} messages.
         * @param message s2c_open message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Is2c_open, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_open message, length delimited. Does not implicitly {@link chest.s2c_open.verify|verify} messages.
         * @param message s2c_open message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Is2c_open, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_open message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_open
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_open;

        /**
         * Decodes a s2c_open message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_open
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_open;

        /**
         * Verifies a s2c_open message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_open message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_open
         */
        public static fromObject(object: { [k: string]: any }): chest.s2c_open;

        /**
         * Creates a plain object from a s2c_open message. Also converts values to other types if specified.
         * @param message s2c_open
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.s2c_open, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_open to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_open
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_replace. */
    interface Ic2s_replace {
    }

    /** Represents a c2s_replace. */
    class c2s_replace implements Ic2s_replace {

        /**
         * Constructs a new c2s_replace.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Ic2s_replace);

        /**
         * Creates a new c2s_replace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_replace instance
         */
        public static create(properties?: chest.Ic2s_replace): chest.c2s_replace;

        /**
         * Encodes the specified c2s_replace message. Does not implicitly {@link chest.c2s_replace.verify|verify} messages.
         * @param message c2s_replace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Ic2s_replace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_replace message, length delimited. Does not implicitly {@link chest.c2s_replace.verify|verify} messages.
         * @param message c2s_replace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Ic2s_replace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_replace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_replace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_replace;

        /**
         * Decodes a c2s_replace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_replace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_replace;

        /**
         * Verifies a c2s_replace message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_replace message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_replace
         */
        public static fromObject(object: { [k: string]: any }): chest.c2s_replace;

        /**
         * Creates a plain object from a c2s_replace message. Also converts values to other types if specified.
         * @param message c2s_replace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.c2s_replace, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_replace to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_replace
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_replace. */
    interface Is2c_replace {

        /** s2c_replace err */
        err?: (number|null);

        /** s2c_replace info */
        info?: (chest.IChestInfo|null);
    }

    /** Represents a s2c_replace. */
    class s2c_replace implements Is2c_replace {

        /**
         * Constructs a new s2c_replace.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Is2c_replace);

        /** s2c_replace err. */
        public err: number;

        /** s2c_replace info. */
        public info?: (chest.IChestInfo|null);

        /**
         * Creates a new s2c_replace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_replace instance
         */
        public static create(properties?: chest.Is2c_replace): chest.s2c_replace;

        /**
         * Encodes the specified s2c_replace message. Does not implicitly {@link chest.s2c_replace.verify|verify} messages.
         * @param message s2c_replace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Is2c_replace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_replace message, length delimited. Does not implicitly {@link chest.s2c_replace.verify|verify} messages.
         * @param message s2c_replace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Is2c_replace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_replace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_replace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_replace;

        /**
         * Decodes a s2c_replace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_replace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_replace;

        /**
         * Verifies a s2c_replace message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_replace message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_replace
         */
        public static fromObject(object: { [k: string]: any }): chest.s2c_replace;

        /**
         * Creates a plain object from a s2c_replace message. Also converts values to other types if specified.
         * @param message s2c_replace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.s2c_replace, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_replace to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_replace
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_abandon. */
    interface Ic2s_abandon {
    }

    /** Represents a c2s_abandon. */
    class c2s_abandon implements Ic2s_abandon {

        /**
         * Constructs a new c2s_abandon.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Ic2s_abandon);

        /**
         * Creates a new c2s_abandon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_abandon instance
         */
        public static create(properties?: chest.Ic2s_abandon): chest.c2s_abandon;

        /**
         * Encodes the specified c2s_abandon message. Does not implicitly {@link chest.c2s_abandon.verify|verify} messages.
         * @param message c2s_abandon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Ic2s_abandon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_abandon message, length delimited. Does not implicitly {@link chest.c2s_abandon.verify|verify} messages.
         * @param message c2s_abandon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Ic2s_abandon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_abandon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_abandon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_abandon;

        /**
         * Decodes a c2s_abandon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_abandon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_abandon;

        /**
         * Verifies a c2s_abandon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_abandon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_abandon
         */
        public static fromObject(object: { [k: string]: any }): chest.c2s_abandon;

        /**
         * Creates a plain object from a c2s_abandon message. Also converts values to other types if specified.
         * @param message c2s_abandon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.c2s_abandon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_abandon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_abandon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_abandon. */
    interface Is2c_abandon {

        /** s2c_abandon err */
        err?: (number|null);
    }

    /** Represents a s2c_abandon. */
    class s2c_abandon implements Is2c_abandon {

        /**
         * Constructs a new s2c_abandon.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Is2c_abandon);

        /** s2c_abandon err. */
        public err: number;

        /**
         * Creates a new s2c_abandon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_abandon instance
         */
        public static create(properties?: chest.Is2c_abandon): chest.s2c_abandon;

        /**
         * Encodes the specified s2c_abandon message. Does not implicitly {@link chest.s2c_abandon.verify|verify} messages.
         * @param message s2c_abandon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Is2c_abandon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_abandon message, length delimited. Does not implicitly {@link chest.s2c_abandon.verify|verify} messages.
         * @param message s2c_abandon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Is2c_abandon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_abandon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_abandon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_abandon;

        /**
         * Decodes a s2c_abandon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_abandon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_abandon;

        /**
         * Verifies a s2c_abandon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_abandon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_abandon
         */
        public static fromObject(object: { [k: string]: any }): chest.s2c_abandon;

        /**
         * Creates a plain object from a s2c_abandon message. Also converts values to other types if specified.
         * @param message s2c_abandon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.s2c_abandon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_abandon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_abandon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_challenge_dungeon. */
    interface Ic2s_challenge_dungeon {

        /** c2s_challenge_dungeon dungeonId */
        dungeonId?: (number|null);
    }

    /** Represents a c2s_challenge_dungeon. */
    class c2s_challenge_dungeon implements Ic2s_challenge_dungeon {

        /**
         * Constructs a new c2s_challenge_dungeon.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Ic2s_challenge_dungeon);

        /** c2s_challenge_dungeon dungeonId. */
        public dungeonId: number;

        /**
         * Creates a new c2s_challenge_dungeon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_challenge_dungeon instance
         */
        public static create(properties?: chest.Ic2s_challenge_dungeon): chest.c2s_challenge_dungeon;

        /**
         * Encodes the specified c2s_challenge_dungeon message. Does not implicitly {@link chest.c2s_challenge_dungeon.verify|verify} messages.
         * @param message c2s_challenge_dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Ic2s_challenge_dungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_challenge_dungeon message, length delimited. Does not implicitly {@link chest.c2s_challenge_dungeon.verify|verify} messages.
         * @param message c2s_challenge_dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Ic2s_challenge_dungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_challenge_dungeon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_challenge_dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_challenge_dungeon;

        /**
         * Decodes a c2s_challenge_dungeon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_challenge_dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_challenge_dungeon;

        /**
         * Verifies a c2s_challenge_dungeon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_challenge_dungeon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_challenge_dungeon
         */
        public static fromObject(object: { [k: string]: any }): chest.c2s_challenge_dungeon;

        /**
         * Creates a plain object from a c2s_challenge_dungeon message. Also converts values to other types if specified.
         * @param message c2s_challenge_dungeon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.c2s_challenge_dungeon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_challenge_dungeon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_challenge_dungeon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_challenge_dungeon. */
    interface Is2c_challenge_dungeon {

        /** s2c_challenge_dungeon err */
        err?: (number|null);

        /** s2c_challenge_dungeon warUid */
        warUid?: (number|null);
    }

    /** Represents a s2c_challenge_dungeon. */
    class s2c_challenge_dungeon implements Is2c_challenge_dungeon {

        /**
         * Constructs a new s2c_challenge_dungeon.
         * @param [properties] Properties to set
         */
        constructor(properties?: chest.Is2c_challenge_dungeon);

        /** s2c_challenge_dungeon err. */
        public err: number;

        /** s2c_challenge_dungeon warUid. */
        public warUid: number;

        /**
         * Creates a new s2c_challenge_dungeon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_challenge_dungeon instance
         */
        public static create(properties?: chest.Is2c_challenge_dungeon): chest.s2c_challenge_dungeon;

        /**
         * Encodes the specified s2c_challenge_dungeon message. Does not implicitly {@link chest.s2c_challenge_dungeon.verify|verify} messages.
         * @param message s2c_challenge_dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chest.Is2c_challenge_dungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_challenge_dungeon message, length delimited. Does not implicitly {@link chest.s2c_challenge_dungeon.verify|verify} messages.
         * @param message s2c_challenge_dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chest.Is2c_challenge_dungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_challenge_dungeon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_challenge_dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_challenge_dungeon;

        /**
         * Decodes a s2c_challenge_dungeon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_challenge_dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_challenge_dungeon;

        /**
         * Verifies a s2c_challenge_dungeon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_challenge_dungeon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_challenge_dungeon
         */
        public static fromObject(object: { [k: string]: any }): chest.s2c_challenge_dungeon;

        /**
         * Creates a plain object from a s2c_challenge_dungeon message. Also converts values to other types if specified.
         * @param message s2c_challenge_dungeon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chest.s2c_challenge_dungeon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_challenge_dungeon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_challenge_dungeon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace dungeon. */
export namespace dungeon {

    /** Properties of a Dungeon. */
    interface IDungeon {

        /** Dungeon star */
        star?: (number|null);
    }

    /** Represents a Dungeon. */
    class Dungeon implements IDungeon {

        /**
         * Constructs a new Dungeon.
         * @param [properties] Properties to set
         */
        constructor(properties?: dungeon.IDungeon);

        /** Dungeon star. */
        public star: number;

        /**
         * Creates a new Dungeon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Dungeon instance
         */
        public static create(properties?: dungeon.IDungeon): dungeon.Dungeon;

        /**
         * Encodes the specified Dungeon message. Does not implicitly {@link dungeon.Dungeon.verify|verify} messages.
         * @param message Dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dungeon.IDungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Dungeon message, length delimited. Does not implicitly {@link dungeon.Dungeon.verify|verify} messages.
         * @param message Dungeon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dungeon.IDungeon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Dungeon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dungeon.Dungeon;

        /**
         * Decodes a Dungeon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Dungeon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dungeon.Dungeon;

        /**
         * Verifies a Dungeon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Dungeon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Dungeon
         */
        public static fromObject(object: { [k: string]: any }): dungeon.Dungeon;

        /**
         * Creates a plain object from a Dungeon message. Also converts values to other types if specified.
         * @param message Dungeon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dungeon.Dungeon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Dungeon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Dungeon
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {

        /** c2s_load dungeonType */
        dungeonType?: (number|null);
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: dungeon.Ic2s_load);

        /** c2s_load dungeonType. */
        public dungeonType: number;

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: dungeon.Ic2s_load): dungeon.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link dungeon.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dungeon.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link dungeon.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dungeon.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dungeon.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dungeon.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): dungeon.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dungeon.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load dungeonList */
        dungeonList?: (dungeon.IDungeon[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: dungeon.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load dungeonList. */
        public dungeonList: dungeon.IDungeon[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: dungeon.Is2c_load): dungeon.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link dungeon.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dungeon.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link dungeon.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dungeon.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dungeon.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dungeon.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): dungeon.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dungeon.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace hero. */
export namespace hero {

    /** Properties of a Hero. */
    interface IHero {

        /** Hero uid */
        uid?: (number|null);

        /** Hero id */
        id?: (number|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.IHero);

        /** Hero uid. */
        public uid: number;

        /** Hero id. */
        public id: number;

        /**
         * Creates a new Hero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hero instance
         */
        public static create(properties?: hero.IHero): hero.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link hero.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.Hero;

        /**
         * Verifies a Hero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hero
         */
        public static fromObject(object: { [k: string]: any }): hero.Hero;

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @param message Hero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Hero
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: hero.Ic2s_load): hero.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link hero.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link hero.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): hero.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load heroList */
        heroList?: (hero.IHero[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: hero.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load heroList. */
        public heroList: hero.IHero[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: hero.Is2c_load): hero.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link hero.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hero.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link hero.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hero.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hero.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hero.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): hero.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hero.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace mail. */
export namespace mail {

    /** Properties of a MailInfo. */
    interface IMailInfo {

        /** MailInfo uid */
        uid?: (number|null);

        /** MailInfo id */
        id?: (number|null);

        /** MailInfo time */
        time?: (number|null);

        /** MailInfo state */
        state?: (number|null);

        /** MailInfo title */
        title?: (string|null);

        /** MailInfo content */
        content?: (string|null);

        /** MailInfo reward */
        reward?: (bag.IItem[]|null);
    }

    /** Represents a MailInfo. */
    class MailInfo implements IMailInfo {

        /**
         * Constructs a new MailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.IMailInfo);

        /** MailInfo uid. */
        public uid: number;

        /** MailInfo id. */
        public id: number;

        /** MailInfo time. */
        public time: number;

        /** MailInfo state. */
        public state: number;

        /** MailInfo title. */
        public title: string;

        /** MailInfo content. */
        public content: string;

        /** MailInfo reward. */
        public reward: bag.IItem[];

        /**
         * Creates a new MailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailInfo instance
         */
        public static create(properties?: mail.IMailInfo): mail.MailInfo;

        /**
         * Encodes the specified MailInfo message. Does not implicitly {@link mail.MailInfo.verify|verify} messages.
         * @param message MailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailInfo message, length delimited. Does not implicitly {@link mail.MailInfo.verify|verify} messages.
         * @param message MailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.IMailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.MailInfo;

        /**
         * Decodes a MailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.MailInfo;

        /**
         * Verifies a MailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailInfo
         */
        public static fromObject(object: { [k: string]: any }): mail.MailInfo;

        /**
         * Creates a plain object from a MailInfo message. Also converts values to other types if specified.
         * @param message MailInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.MailInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MailInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: mail.Ic2s_load): mail.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link mail.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link mail.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): mail.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load mails */
        mails?: (mail.IMailInfo[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load mails. */
        public mails: mail.IMailInfo[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: mail.Is2c_load): mail.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link mail.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link mail.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): mail.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_read. */
    interface Ic2s_read {

        /** c2s_read mailUids */
        mailUids?: (number[]|null);
    }

    /** Represents a c2s_read. */
    class c2s_read implements Ic2s_read {

        /**
         * Constructs a new c2s_read.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Ic2s_read);

        /** c2s_read mailUids. */
        public mailUids: number[];

        /**
         * Creates a new c2s_read instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_read instance
         */
        public static create(properties?: mail.Ic2s_read): mail.c2s_read;

        /**
         * Encodes the specified c2s_read message. Does not implicitly {@link mail.c2s_read.verify|verify} messages.
         * @param message c2s_read message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Ic2s_read, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_read message, length delimited. Does not implicitly {@link mail.c2s_read.verify|verify} messages.
         * @param message c2s_read message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Ic2s_read, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_read message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_read
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.c2s_read;

        /**
         * Decodes a c2s_read message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_read
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.c2s_read;

        /**
         * Verifies a c2s_read message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_read message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_read
         */
        public static fromObject(object: { [k: string]: any }): mail.c2s_read;

        /**
         * Creates a plain object from a c2s_read message. Also converts values to other types if specified.
         * @param message c2s_read
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.c2s_read, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_read to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_read
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_read. */
    interface Is2c_read {

        /** s2c_read err */
        err?: (number|null);
    }

    /** Represents a s2c_read. */
    class s2c_read implements Is2c_read {

        /**
         * Constructs a new s2c_read.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Is2c_read);

        /** s2c_read err. */
        public err: number;

        /**
         * Creates a new s2c_read instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_read instance
         */
        public static create(properties?: mail.Is2c_read): mail.s2c_read;

        /**
         * Encodes the specified s2c_read message. Does not implicitly {@link mail.s2c_read.verify|verify} messages.
         * @param message s2c_read message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Is2c_read, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_read message, length delimited. Does not implicitly {@link mail.s2c_read.verify|verify} messages.
         * @param message s2c_read message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Is2c_read, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_read message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_read
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.s2c_read;

        /**
         * Decodes a s2c_read message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_read
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.s2c_read;

        /**
         * Verifies a s2c_read message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_read message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_read
         */
        public static fromObject(object: { [k: string]: any }): mail.s2c_read;

        /**
         * Creates a plain object from a s2c_read message. Also converts values to other types if specified.
         * @param message s2c_read
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.s2c_read, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_read to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_read
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_receive_reward. */
    interface Ic2s_receive_reward {

        /** c2s_receive_reward mailUids */
        mailUids?: (number[]|null);
    }

    /** Represents a c2s_receive_reward. */
    class c2s_receive_reward implements Ic2s_receive_reward {

        /**
         * Constructs a new c2s_receive_reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Ic2s_receive_reward);

        /** c2s_receive_reward mailUids. */
        public mailUids: number[];

        /**
         * Creates a new c2s_receive_reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_receive_reward instance
         */
        public static create(properties?: mail.Ic2s_receive_reward): mail.c2s_receive_reward;

        /**
         * Encodes the specified c2s_receive_reward message. Does not implicitly {@link mail.c2s_receive_reward.verify|verify} messages.
         * @param message c2s_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Ic2s_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_receive_reward message, length delimited. Does not implicitly {@link mail.c2s_receive_reward.verify|verify} messages.
         * @param message c2s_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Ic2s_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_receive_reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.c2s_receive_reward;

        /**
         * Decodes a c2s_receive_reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.c2s_receive_reward;

        /**
         * Verifies a c2s_receive_reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_receive_reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_receive_reward
         */
        public static fromObject(object: { [k: string]: any }): mail.c2s_receive_reward;

        /**
         * Creates a plain object from a c2s_receive_reward message. Also converts values to other types if specified.
         * @param message c2s_receive_reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.c2s_receive_reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_receive_reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_receive_reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_receive_reward. */
    interface Is2c_receive_reward {

        /** s2c_receive_reward err */
        err?: (number|null);
    }

    /** Represents a s2c_receive_reward. */
    class s2c_receive_reward implements Is2c_receive_reward {

        /**
         * Constructs a new s2c_receive_reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Is2c_receive_reward);

        /** s2c_receive_reward err. */
        public err: number;

        /**
         * Creates a new s2c_receive_reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_receive_reward instance
         */
        public static create(properties?: mail.Is2c_receive_reward): mail.s2c_receive_reward;

        /**
         * Encodes the specified s2c_receive_reward message. Does not implicitly {@link mail.s2c_receive_reward.verify|verify} messages.
         * @param message s2c_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Is2c_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_receive_reward message, length delimited. Does not implicitly {@link mail.s2c_receive_reward.verify|verify} messages.
         * @param message s2c_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Is2c_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_receive_reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.s2c_receive_reward;

        /**
         * Decodes a s2c_receive_reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.s2c_receive_reward;

        /**
         * Verifies a s2c_receive_reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_receive_reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_receive_reward
         */
        public static fromObject(object: { [k: string]: any }): mail.s2c_receive_reward;

        /**
         * Creates a plain object from a s2c_receive_reward message. Also converts values to other types if specified.
         * @param message s2c_receive_reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.s2c_receive_reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_receive_reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_receive_reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_delete_mails. */
    interface Ic2s_delete_mails {

        /** c2s_delete_mails mailUids */
        mailUids?: (number[]|null);
    }

    /** Represents a c2s_delete_mails. */
    class c2s_delete_mails implements Ic2s_delete_mails {

        /**
         * Constructs a new c2s_delete_mails.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Ic2s_delete_mails);

        /** c2s_delete_mails mailUids. */
        public mailUids: number[];

        /**
         * Creates a new c2s_delete_mails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_delete_mails instance
         */
        public static create(properties?: mail.Ic2s_delete_mails): mail.c2s_delete_mails;

        /**
         * Encodes the specified c2s_delete_mails message. Does not implicitly {@link mail.c2s_delete_mails.verify|verify} messages.
         * @param message c2s_delete_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Ic2s_delete_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_delete_mails message, length delimited. Does not implicitly {@link mail.c2s_delete_mails.verify|verify} messages.
         * @param message c2s_delete_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Ic2s_delete_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_delete_mails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_delete_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.c2s_delete_mails;

        /**
         * Decodes a c2s_delete_mails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_delete_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.c2s_delete_mails;

        /**
         * Verifies a c2s_delete_mails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_delete_mails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_delete_mails
         */
        public static fromObject(object: { [k: string]: any }): mail.c2s_delete_mails;

        /**
         * Creates a plain object from a c2s_delete_mails message. Also converts values to other types if specified.
         * @param message c2s_delete_mails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.c2s_delete_mails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_delete_mails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_delete_mails
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_delete_mails. */
    interface Is2c_delete_mails {

        /** s2c_delete_mails err */
        err?: (number|null);
    }

    /** Represents a s2c_delete_mails. */
    class s2c_delete_mails implements Is2c_delete_mails {

        /**
         * Constructs a new s2c_delete_mails.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Is2c_delete_mails);

        /** s2c_delete_mails err. */
        public err: number;

        /**
         * Creates a new s2c_delete_mails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_delete_mails instance
         */
        public static create(properties?: mail.Is2c_delete_mails): mail.s2c_delete_mails;

        /**
         * Encodes the specified s2c_delete_mails message. Does not implicitly {@link mail.s2c_delete_mails.verify|verify} messages.
         * @param message s2c_delete_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Is2c_delete_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_delete_mails message, length delimited. Does not implicitly {@link mail.s2c_delete_mails.verify|verify} messages.
         * @param message s2c_delete_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Is2c_delete_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_delete_mails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_delete_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.s2c_delete_mails;

        /**
         * Decodes a s2c_delete_mails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_delete_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.s2c_delete_mails;

        /**
         * Verifies a s2c_delete_mails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_delete_mails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_delete_mails
         */
        public static fromObject(object: { [k: string]: any }): mail.s2c_delete_mails;

        /**
         * Creates a plain object from a s2c_delete_mails message. Also converts values to other types if specified.
         * @param message s2c_delete_mails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.s2c_delete_mails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_delete_mails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_delete_mails
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_new_mails. */
    interface Inotify_new_mails {

        /** notify_new_mails mails */
        mails?: (mail.IMailInfo[]|null);
    }

    /** Represents a notify_new_mails. */
    class notify_new_mails implements Inotify_new_mails {

        /**
         * Constructs a new notify_new_mails.
         * @param [properties] Properties to set
         */
        constructor(properties?: mail.Inotify_new_mails);

        /** notify_new_mails mails. */
        public mails: mail.IMailInfo[];

        /**
         * Creates a new notify_new_mails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_new_mails instance
         */
        public static create(properties?: mail.Inotify_new_mails): mail.notify_new_mails;

        /**
         * Encodes the specified notify_new_mails message. Does not implicitly {@link mail.notify_new_mails.verify|verify} messages.
         * @param message notify_new_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mail.Inotify_new_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_new_mails message, length delimited. Does not implicitly {@link mail.notify_new_mails.verify|verify} messages.
         * @param message notify_new_mails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mail.Inotify_new_mails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_new_mails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_new_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.notify_new_mails;

        /**
         * Decodes a notify_new_mails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_new_mails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.notify_new_mails;

        /**
         * Verifies a notify_new_mails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_new_mails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_new_mails
         */
        public static fromObject(object: { [k: string]: any }): mail.notify_new_mails;

        /**
         * Creates a plain object from a notify_new_mails message. Also converts values to other types if specified.
         * @param message notify_new_mails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mail.notify_new_mails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_new_mails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_new_mails
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace money. */
export namespace money {

    /** Properties of a MoneyItem. */
    interface IMoneyItem {

        /** MoneyItem id */
        id?: (number|null);

        /** MoneyItem num */
        num?: (number|null);

        /** MoneyItem recoverTs */
        recoverTs?: (number|null);
    }

    /** Represents a MoneyItem. */
    class MoneyItem implements IMoneyItem {

        /**
         * Constructs a new MoneyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: money.IMoneyItem);

        /** MoneyItem id. */
        public id: number;

        /** MoneyItem num. */
        public num: number;

        /** MoneyItem recoverTs. */
        public recoverTs: number;

        /**
         * Creates a new MoneyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyItem instance
         */
        public static create(properties?: money.IMoneyItem): money.MoneyItem;

        /**
         * Encodes the specified MoneyItem message. Does not implicitly {@link money.MoneyItem.verify|verify} messages.
         * @param message MoneyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: money.IMoneyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyItem message, length delimited. Does not implicitly {@link money.MoneyItem.verify|verify} messages.
         * @param message MoneyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: money.IMoneyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): money.MoneyItem;

        /**
         * Decodes a MoneyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): money.MoneyItem;

        /**
         * Verifies a MoneyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyItem
         */
        public static fromObject(object: { [k: string]: any }): money.MoneyItem;

        /**
         * Creates a plain object from a MoneyItem message. Also converts values to other types if specified.
         * @param message MoneyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: money.MoneyItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoneyItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: money.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: money.Ic2s_load): money.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link money.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: money.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link money.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: money.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): money.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): money.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): money.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: money.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load items */
        items?: (money.IMoneyItem[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: money.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load items. */
        public items: money.IMoneyItem[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: money.Is2c_load): money.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link money.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: money.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link money.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: money.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): money.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): money.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): money.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: money.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_items. */
    interface Inotify_items {

        /** notify_items items */
        items?: (money.IMoneyItem[]|null);
    }

    /** Represents a notify_items. */
    class notify_items implements Inotify_items {

        /**
         * Constructs a new notify_items.
         * @param [properties] Properties to set
         */
        constructor(properties?: money.Inotify_items);

        /** notify_items items. */
        public items: money.IMoneyItem[];

        /**
         * Creates a new notify_items instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_items instance
         */
        public static create(properties?: money.Inotify_items): money.notify_items;

        /**
         * Encodes the specified notify_items message. Does not implicitly {@link money.notify_items.verify|verify} messages.
         * @param message notify_items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: money.Inotify_items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_items message, length delimited. Does not implicitly {@link money.notify_items.verify|verify} messages.
         * @param message notify_items message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: money.Inotify_items, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_items message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): money.notify_items;

        /**
         * Decodes a notify_items message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_items
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): money.notify_items;

        /**
         * Verifies a notify_items message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_items message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_items
         */
        public static fromObject(object: { [k: string]: any }): money.notify_items;

        /**
         * Creates a plain object from a notify_items message. Also converts values to other types if specified.
         * @param message notify_items
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: money.notify_items, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_items to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_items
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace profile. */
export namespace profile {

    /** Properties of a ProfileInfo. */
    interface IProfileInfo {

        /** ProfileInfo name */
        name?: (string|null);

        /** ProfileInfo gender */
        gender?: (number|null);

        /** ProfileInfo exp */
        exp?: (number|null);

        /** ProfileInfo lv */
        lv?: (number|null);
    }

    /** Represents a ProfileInfo. */
    class ProfileInfo implements IProfileInfo {

        /**
         * Constructs a new ProfileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.IProfileInfo);

        /** ProfileInfo name. */
        public name: string;

        /** ProfileInfo gender. */
        public gender: number;

        /** ProfileInfo exp. */
        public exp: number;

        /** ProfileInfo lv. */
        public lv: number;

        /**
         * Creates a new ProfileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileInfo instance
         */
        public static create(properties?: profile.IProfileInfo): profile.ProfileInfo;

        /**
         * Encodes the specified ProfileInfo message. Does not implicitly {@link profile.ProfileInfo.verify|verify} messages.
         * @param message ProfileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.IProfileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProfileInfo message, length delimited. Does not implicitly {@link profile.ProfileInfo.verify|verify} messages.
         * @param message ProfileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.IProfileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.ProfileInfo;

        /**
         * Decodes a ProfileInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.ProfileInfo;

        /**
         * Verifies a ProfileInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProfileInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileInfo
         */
        public static fromObject(object: { [k: string]: any }): profile.ProfileInfo;

        /**
         * Creates a plain object from a ProfileInfo message. Also converts values to other types if specified.
         * @param message ProfileInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.ProfileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProfileInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProfileInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: profile.Ic2s_load): profile.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link profile.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link profile.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): profile.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load profile */
        profile?: (profile.IProfileInfo|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load profile. */
        public profile?: (profile.IProfileInfo|null);

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: profile.Is2c_load): profile.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link profile.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link profile.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): profile.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_profile. */
    interface Inotify_profile {

        /** notify_profile profile */
        profile?: (profile.IProfileInfo|null);
    }

    /** Represents a notify_profile. */
    class notify_profile implements Inotify_profile {

        /**
         * Constructs a new notify_profile.
         * @param [properties] Properties to set
         */
        constructor(properties?: profile.Inotify_profile);

        /** notify_profile profile. */
        public profile?: (profile.IProfileInfo|null);

        /**
         * Creates a new notify_profile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_profile instance
         */
        public static create(properties?: profile.Inotify_profile): profile.notify_profile;

        /**
         * Encodes the specified notify_profile message. Does not implicitly {@link profile.notify_profile.verify|verify} messages.
         * @param message notify_profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: profile.Inotify_profile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_profile message, length delimited. Does not implicitly {@link profile.notify_profile.verify|verify} messages.
         * @param message notify_profile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: profile.Inotify_profile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_profile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.notify_profile;

        /**
         * Decodes a notify_profile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.notify_profile;

        /**
         * Verifies a notify_profile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_profile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_profile
         */
        public static fromObject(object: { [k: string]: any }): profile.notify_profile;

        /**
         * Creates a plain object from a notify_profile message. Also converts values to other types if specified.
         * @param message notify_profile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: profile.notify_profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_profile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_profile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace task. */
export namespace task {

    /** Properties of a TaskInfo. */
    interface ITaskInfo {

        /** TaskInfo id */
        id?: (number|null);

        /** TaskInfo num */
        num?: (number|null);

        /** TaskInfo max */
        max?: (number|null);

        /** TaskInfo finish */
        finish?: (boolean|null);
    }

    /** Represents a TaskInfo. */
    class TaskInfo implements ITaskInfo {

        /**
         * Constructs a new TaskInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.ITaskInfo);

        /** TaskInfo id. */
        public id: number;

        /** TaskInfo num. */
        public num: number;

        /** TaskInfo max. */
        public max: number;

        /** TaskInfo finish. */
        public finish: boolean;

        /**
         * Creates a new TaskInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfo instance
         */
        public static create(properties?: task.ITaskInfo): task.TaskInfo;

        /**
         * Encodes the specified TaskInfo message. Does not implicitly {@link task.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskInfo message, length delimited. Does not implicitly {@link task.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.TaskInfo;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.TaskInfo;

        /**
         * Verifies a TaskInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskInfo
         */
        public static fromObject(object: { [k: string]: any }): task.TaskInfo;

        /**
         * Creates a plain object from a TaskInfo message. Also converts values to other types if specified.
         * @param message TaskInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.TaskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TaskInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {

        /** c2s_load taskType */
        taskType?: (number|null);
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Ic2s_load);

        /** c2s_load taskType. */
        public taskType: number;

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: task.Ic2s_load): task.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link task.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link task.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): task.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load tasks */
        tasks?: (task.ITaskInfo[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load tasks. */
        public tasks: task.ITaskInfo[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: task.Is2c_load): task.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link task.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link task.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): task.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_receive_reward. */
    interface Ic2s_receive_reward {

        /** c2s_receive_reward taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a c2s_receive_reward. */
    class c2s_receive_reward implements Ic2s_receive_reward {

        /**
         * Constructs a new c2s_receive_reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Ic2s_receive_reward);

        /** c2s_receive_reward taskIds. */
        public taskIds: number[];

        /**
         * Creates a new c2s_receive_reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_receive_reward instance
         */
        public static create(properties?: task.Ic2s_receive_reward): task.c2s_receive_reward;

        /**
         * Encodes the specified c2s_receive_reward message. Does not implicitly {@link task.c2s_receive_reward.verify|verify} messages.
         * @param message c2s_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Ic2s_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_receive_reward message, length delimited. Does not implicitly {@link task.c2s_receive_reward.verify|verify} messages.
         * @param message c2s_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Ic2s_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_receive_reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.c2s_receive_reward;

        /**
         * Decodes a c2s_receive_reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.c2s_receive_reward;

        /**
         * Verifies a c2s_receive_reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_receive_reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_receive_reward
         */
        public static fromObject(object: { [k: string]: any }): task.c2s_receive_reward;

        /**
         * Creates a plain object from a c2s_receive_reward message. Also converts values to other types if specified.
         * @param message c2s_receive_reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.c2s_receive_reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_receive_reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_receive_reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_receive_reward. */
    interface Is2c_receive_reward {

        /** s2c_receive_reward err */
        err?: (number|null);
    }

    /** Represents a s2c_receive_reward. */
    class s2c_receive_reward implements Is2c_receive_reward {

        /**
         * Constructs a new s2c_receive_reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Is2c_receive_reward);

        /** s2c_receive_reward err. */
        public err: number;

        /**
         * Creates a new s2c_receive_reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_receive_reward instance
         */
        public static create(properties?: task.Is2c_receive_reward): task.s2c_receive_reward;

        /**
         * Encodes the specified s2c_receive_reward message. Does not implicitly {@link task.s2c_receive_reward.verify|verify} messages.
         * @param message s2c_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Is2c_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_receive_reward message, length delimited. Does not implicitly {@link task.s2c_receive_reward.verify|verify} messages.
         * @param message s2c_receive_reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Is2c_receive_reward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_receive_reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.s2c_receive_reward;

        /**
         * Decodes a s2c_receive_reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_receive_reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.s2c_receive_reward;

        /**
         * Verifies a s2c_receive_reward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_receive_reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_receive_reward
         */
        public static fromObject(object: { [k: string]: any }): task.s2c_receive_reward;

        /**
         * Creates a plain object from a s2c_receive_reward message. Also converts values to other types if specified.
         * @param message s2c_receive_reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.s2c_receive_reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_receive_reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_receive_reward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_tasks. */
    interface Inotify_tasks {

        /** notify_tasks tasks */
        tasks?: (task.ITaskInfo[]|null);
    }

    /** Represents a notify_tasks. */
    class notify_tasks implements Inotify_tasks {

        /**
         * Constructs a new notify_tasks.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Inotify_tasks);

        /** notify_tasks tasks. */
        public tasks: task.ITaskInfo[];

        /**
         * Creates a new notify_tasks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_tasks instance
         */
        public static create(properties?: task.Inotify_tasks): task.notify_tasks;

        /**
         * Encodes the specified notify_tasks message. Does not implicitly {@link task.notify_tasks.verify|verify} messages.
         * @param message notify_tasks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Inotify_tasks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_tasks message, length delimited. Does not implicitly {@link task.notify_tasks.verify|verify} messages.
         * @param message notify_tasks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Inotify_tasks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_tasks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.notify_tasks;

        /**
         * Decodes a notify_tasks message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.notify_tasks;

        /**
         * Verifies a notify_tasks message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_tasks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_tasks
         */
        public static fromObject(object: { [k: string]: any }): task.notify_tasks;

        /**
         * Creates a plain object from a notify_tasks message. Also converts values to other types if specified.
         * @param message notify_tasks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.notify_tasks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_tasks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_tasks
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_remove_tasks. */
    interface Inotify_remove_tasks {

        /** notify_remove_tasks taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a notify_remove_tasks. */
    class notify_remove_tasks implements Inotify_remove_tasks {

        /**
         * Constructs a new notify_remove_tasks.
         * @param [properties] Properties to set
         */
        constructor(properties?: task.Inotify_remove_tasks);

        /** notify_remove_tasks taskIds. */
        public taskIds: number[];

        /**
         * Creates a new notify_remove_tasks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_remove_tasks instance
         */
        public static create(properties?: task.Inotify_remove_tasks): task.notify_remove_tasks;

        /**
         * Encodes the specified notify_remove_tasks message. Does not implicitly {@link task.notify_remove_tasks.verify|verify} messages.
         * @param message notify_remove_tasks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: task.Inotify_remove_tasks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_remove_tasks message, length delimited. Does not implicitly {@link task.notify_remove_tasks.verify|verify} messages.
         * @param message notify_remove_tasks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: task.Inotify_remove_tasks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_remove_tasks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_remove_tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): task.notify_remove_tasks;

        /**
         * Decodes a notify_remove_tasks message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_remove_tasks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): task.notify_remove_tasks;

        /**
         * Verifies a notify_remove_tasks message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_remove_tasks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_remove_tasks
         */
        public static fromObject(object: { [k: string]: any }): task.notify_remove_tasks;

        /**
         * Creates a plain object from a notify_remove_tasks message. Also converts values to other types if specified.
         * @param message notify_remove_tasks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: task.notify_remove_tasks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_remove_tasks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_remove_tasks
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace team. */
export namespace team {

    /** Properties of a TeamSlot. */
    interface ITeamSlot {

        /** TeamSlot heroUid */
        heroUid?: (number|null);

        /** TeamSlot army */
        army?: (number|null);
    }

    /** Represents a TeamSlot. */
    class TeamSlot implements ITeamSlot {

        /**
         * Constructs a new TeamSlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: team.ITeamSlot);

        /** TeamSlot heroUid. */
        public heroUid: number;

        /** TeamSlot army. */
        public army: number;

        /**
         * Creates a new TeamSlot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TeamSlot instance
         */
        public static create(properties?: team.ITeamSlot): team.TeamSlot;

        /**
         * Encodes the specified TeamSlot message. Does not implicitly {@link team.TeamSlot.verify|verify} messages.
         * @param message TeamSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: team.ITeamSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TeamSlot message, length delimited. Does not implicitly {@link team.TeamSlot.verify|verify} messages.
         * @param message TeamSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: team.ITeamSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamSlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TeamSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): team.TeamSlot;

        /**
         * Decodes a TeamSlot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TeamSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): team.TeamSlot;

        /**
         * Verifies a TeamSlot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TeamSlot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TeamSlot
         */
        public static fromObject(object: { [k: string]: any }): team.TeamSlot;

        /**
         * Creates a plain object from a TeamSlot message. Also converts values to other types if specified.
         * @param message TeamSlot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: team.TeamSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TeamSlot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TeamSlot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Team. */
    interface ITeam {

        /** Team idx */
        idx?: (number|null);

        /** Team eid */
        eid?: (number|null);

        /** Team slots */
        slots?: (team.ITeamSlot[]|null);

        /** Team soldierId */
        soldierId?: (number|null);
    }

    /** Represents a Team. */
    class Team implements ITeam {

        /**
         * Constructs a new Team.
         * @param [properties] Properties to set
         */
        constructor(properties?: team.ITeam);

        /** Team idx. */
        public idx: number;

        /** Team eid. */
        public eid: number;

        /** Team slots. */
        public slots: team.ITeamSlot[];

        /** Team soldierId. */
        public soldierId: number;

        /**
         * Creates a new Team instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Team instance
         */
        public static create(properties?: team.ITeam): team.Team;

        /**
         * Encodes the specified Team message. Does not implicitly {@link team.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: team.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link team.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: team.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): team.Team;

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): team.Team;

        /**
         * Verifies a Team message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Team
         */
        public static fromObject(object: { [k: string]: any }): team.Team;

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @param message Team
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: team.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Team to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Team
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: team.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: team.Ic2s_load): team.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link team.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: team.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link team.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: team.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): team.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): team.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): team.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: team.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load teamList */
        teamList?: (team.ITeam[]|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: team.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load teamList. */
        public teamList: team.ITeam[];

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: team.Is2c_load): team.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link team.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: team.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link team.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: team.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): team.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): team.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): team.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: team.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo uid */
        uid?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUserInfo);

        /** UserInfo uid. */
        public uid: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: user.IUserInfo): user.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link user.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): user.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoleInfo. */
    interface IRoleInfo {

        /** RoleInfo rid */
        rid?: (number|Long|null);
    }

    /** Represents a RoleInfo. */
    class RoleInfo implements IRoleInfo {

        /**
         * Constructs a new RoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IRoleInfo);

        /** RoleInfo rid. */
        public rid: (number|Long);

        /**
         * Creates a new RoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleInfo instance
         */
        public static create(properties?: user.IRoleInfo): user.RoleInfo;

        /**
         * Encodes the specified RoleInfo message. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @param message RoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoleInfo message, length delimited. Does not implicitly {@link user.RoleInfo.verify|verify} messages.
         * @param message RoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IRoleInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.RoleInfo;

        /**
         * Decodes a RoleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.RoleInfo;

        /**
         * Verifies a RoleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoleInfo
         */
        public static fromObject(object: { [k: string]: any }): user.RoleInfo;

        /**
         * Creates a plain object from a RoleInfo message. Also converts values to other types if specified.
         * @param message RoleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.RoleInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoleInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_login. */
    interface Ic2s_login {

        /** c2s_login uid */
        uid?: (string|null);
    }

    /** Represents a c2s_login. */
    class c2s_login implements Ic2s_login {

        /**
         * Constructs a new c2s_login.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_login);

        /** c2s_login uid. */
        public uid: string;

        /**
         * Creates a new c2s_login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_login instance
         */
        public static create(properties?: user.Ic2s_login): user.c2s_login;

        /**
         * Encodes the specified c2s_login message. Does not implicitly {@link user.c2s_login.verify|verify} messages.
         * @param message c2s_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_login message, length delimited. Does not implicitly {@link user.c2s_login.verify|verify} messages.
         * @param message c2s_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_login;

        /**
         * Decodes a c2s_login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_login;

        /**
         * Verifies a c2s_login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_login
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_login;

        /**
         * Creates a plain object from a c2s_login message. Also converts values to other types if specified.
         * @param message c2s_login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_login
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_login. */
    interface Is2c_login {

        /** s2c_login err */
        err?: (number|null);

        /** s2c_login info */
        info?: (user.IUserInfo|null);

        /** s2c_login role */
        role?: (user.IRoleInfo|null);
    }

    /** Represents a s2c_login. */
    class s2c_login implements Is2c_login {

        /**
         * Constructs a new s2c_login.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_login);

        /** s2c_login err. */
        public err: number;

        /** s2c_login info. */
        public info?: (user.IUserInfo|null);

        /** s2c_login role. */
        public role?: (user.IRoleInfo|null);

        /**
         * Creates a new s2c_login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_login instance
         */
        public static create(properties?: user.Is2c_login): user.s2c_login;

        /**
         * Encodes the specified s2c_login message. Does not implicitly {@link user.s2c_login.verify|verify} messages.
         * @param message s2c_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_login message, length delimited. Does not implicitly {@link user.s2c_login.verify|verify} messages.
         * @param message s2c_login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_login;

        /**
         * Decodes a s2c_login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_login;

        /**
         * Verifies a s2c_login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_login
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_login;

        /**
         * Creates a plain object from a s2c_login message. Also converts values to other types if specified.
         * @param message s2c_login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_login
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_random_name. */
    interface Ic2s_random_name {
    }

    /** Represents a c2s_random_name. */
    class c2s_random_name implements Ic2s_random_name {

        /**
         * Constructs a new c2s_random_name.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_random_name);

        /**
         * Creates a new c2s_random_name instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_random_name instance
         */
        public static create(properties?: user.Ic2s_random_name): user.c2s_random_name;

        /**
         * Encodes the specified c2s_random_name message. Does not implicitly {@link user.c2s_random_name.verify|verify} messages.
         * @param message c2s_random_name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_random_name, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_random_name message, length delimited. Does not implicitly {@link user.c2s_random_name.verify|verify} messages.
         * @param message c2s_random_name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_random_name, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_random_name message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_random_name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_random_name;

        /**
         * Decodes a c2s_random_name message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_random_name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_random_name;

        /**
         * Verifies a c2s_random_name message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_random_name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_random_name
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_random_name;

        /**
         * Creates a plain object from a c2s_random_name message. Also converts values to other types if specified.
         * @param message c2s_random_name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_random_name, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_random_name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_random_name
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_random_name. */
    interface Is2c_random_name {

        /** s2c_random_name err */
        err?: (number|null);

        /** s2c_random_name name */
        name?: (string|null);
    }

    /** Represents a s2c_random_name. */
    class s2c_random_name implements Is2c_random_name {

        /**
         * Constructs a new s2c_random_name.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_random_name);

        /** s2c_random_name err. */
        public err: number;

        /** s2c_random_name name. */
        public name: string;

        /**
         * Creates a new s2c_random_name instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_random_name instance
         */
        public static create(properties?: user.Is2c_random_name): user.s2c_random_name;

        /**
         * Encodes the specified s2c_random_name message. Does not implicitly {@link user.s2c_random_name.verify|verify} messages.
         * @param message s2c_random_name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_random_name, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_random_name message, length delimited. Does not implicitly {@link user.s2c_random_name.verify|verify} messages.
         * @param message s2c_random_name message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_random_name, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_random_name message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_random_name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_random_name;

        /**
         * Decodes a s2c_random_name message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_random_name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_random_name;

        /**
         * Verifies a s2c_random_name message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_random_name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_random_name
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_random_name;

        /**
         * Creates a plain object from a s2c_random_name message. Also converts values to other types if specified.
         * @param message s2c_random_name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_random_name, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_random_name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_random_name
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_create_role. */
    interface Ic2s_create_role {

        /** c2s_create_role name */
        name?: (string|null);
    }

    /** Represents a c2s_create_role. */
    class c2s_create_role implements Ic2s_create_role {

        /**
         * Constructs a new c2s_create_role.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_create_role);

        /** c2s_create_role name. */
        public name: string;

        /**
         * Creates a new c2s_create_role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_create_role instance
         */
        public static create(properties?: user.Ic2s_create_role): user.c2s_create_role;

        /**
         * Encodes the specified c2s_create_role message. Does not implicitly {@link user.c2s_create_role.verify|verify} messages.
         * @param message c2s_create_role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_create_role message, length delimited. Does not implicitly {@link user.c2s_create_role.verify|verify} messages.
         * @param message c2s_create_role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_create_role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_create_role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_create_role;

        /**
         * Decodes a c2s_create_role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_create_role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_create_role;

        /**
         * Verifies a c2s_create_role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_create_role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_create_role
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_create_role;

        /**
         * Creates a plain object from a c2s_create_role message. Also converts values to other types if specified.
         * @param message c2s_create_role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_create_role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_create_role
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_create_role. */
    interface Is2c_create_role {

        /** s2c_create_role err */
        err?: (number|null);

        /** s2c_create_role role */
        role?: (user.IRoleInfo|null);
    }

    /** Represents a s2c_create_role. */
    class s2c_create_role implements Is2c_create_role {

        /**
         * Constructs a new s2c_create_role.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_create_role);

        /** s2c_create_role err. */
        public err: number;

        /** s2c_create_role role. */
        public role?: (user.IRoleInfo|null);

        /**
         * Creates a new s2c_create_role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_create_role instance
         */
        public static create(properties?: user.Is2c_create_role): user.s2c_create_role;

        /**
         * Encodes the specified s2c_create_role message. Does not implicitly {@link user.s2c_create_role.verify|verify} messages.
         * @param message s2c_create_role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_create_role message, length delimited. Does not implicitly {@link user.s2c_create_role.verify|verify} messages.
         * @param message s2c_create_role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_create_role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_create_role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_create_role;

        /**
         * Decodes a s2c_create_role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_create_role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_create_role;

        /**
         * Verifies a s2c_create_role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_create_role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_create_role
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_create_role;

        /**
         * Creates a plain object from a s2c_create_role message. Also converts values to other types if specified.
         * @param message s2c_create_role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_create_role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_create_role
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_ping. */
    interface Ic2s_ping {
    }

    /** Represents a c2s_ping. */
    class c2s_ping implements Ic2s_ping {

        /**
         * Constructs a new c2s_ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_ping);

        /**
         * Creates a new c2s_ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_ping instance
         */
        public static create(properties?: user.Ic2s_ping): user.c2s_ping;

        /**
         * Encodes the specified c2s_ping message. Does not implicitly {@link user.c2s_ping.verify|verify} messages.
         * @param message c2s_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_ping message, length delimited. Does not implicitly {@link user.c2s_ping.verify|verify} messages.
         * @param message c2s_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_ping;

        /**
         * Decodes a c2s_ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_ping;

        /**
         * Verifies a c2s_ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_ping
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_ping;

        /**
         * Creates a plain object from a c2s_ping message. Also converts values to other types if specified.
         * @param message c2s_ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_ping. */
    interface Is2c_ping {

        /** s2c_ping err */
        err?: (number|null);
    }

    /** Represents a s2c_ping. */
    class s2c_ping implements Is2c_ping {

        /**
         * Constructs a new s2c_ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_ping);

        /** s2c_ping err. */
        public err: number;

        /**
         * Creates a new s2c_ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_ping instance
         */
        public static create(properties?: user.Is2c_ping): user.s2c_ping;

        /**
         * Encodes the specified s2c_ping message. Does not implicitly {@link user.s2c_ping.verify|verify} messages.
         * @param message s2c_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_ping message, length delimited. Does not implicitly {@link user.s2c_ping.verify|verify} messages.
         * @param message s2c_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_ping;

        /**
         * Decodes a s2c_ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_ping;

        /**
         * Verifies a s2c_ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_ping
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_ping;

        /**
         * Creates a plain object from a s2c_ping message. Also converts values to other types if specified.
         * @param message s2c_ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_gm. */
    interface Ic2s_gm {

        /** c2s_gm cmd */
        cmd?: (string|null);
    }

    /** Represents a c2s_gm. */
    class c2s_gm implements Ic2s_gm {

        /**
         * Constructs a new c2s_gm.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_gm);

        /** c2s_gm cmd. */
        public cmd: string;

        /**
         * Creates a new c2s_gm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_gm instance
         */
        public static create(properties?: user.Ic2s_gm): user.c2s_gm;

        /**
         * Encodes the specified c2s_gm message. Does not implicitly {@link user.c2s_gm.verify|verify} messages.
         * @param message c2s_gm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_gm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_gm message, length delimited. Does not implicitly {@link user.c2s_gm.verify|verify} messages.
         * @param message c2s_gm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_gm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_gm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_gm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_gm;

        /**
         * Decodes a c2s_gm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_gm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_gm;

        /**
         * Verifies a c2s_gm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_gm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_gm
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_gm;

        /**
         * Creates a plain object from a c2s_gm message. Also converts values to other types if specified.
         * @param message c2s_gm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_gm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_gm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_gm
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_gm. */
    interface Is2c_gm {

        /** s2c_gm err */
        err?: (number|null);

        /** s2c_gm msg */
        msg?: (string|null);
    }

    /** Represents a s2c_gm. */
    class s2c_gm implements Is2c_gm {

        /**
         * Constructs a new s2c_gm.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_gm);

        /** s2c_gm err. */
        public err: number;

        /** s2c_gm msg. */
        public msg: string;

        /**
         * Creates a new s2c_gm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_gm instance
         */
        public static create(properties?: user.Is2c_gm): user.s2c_gm;

        /**
         * Encodes the specified s2c_gm message. Does not implicitly {@link user.s2c_gm.verify|verify} messages.
         * @param message s2c_gm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_gm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_gm message, length delimited. Does not implicitly {@link user.s2c_gm.verify|verify} messages.
         * @param message s2c_gm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_gm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_gm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_gm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_gm;

        /**
         * Decodes a s2c_gm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_gm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_gm;

        /**
         * Verifies a s2c_gm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_gm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_gm
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_gm;

        /**
         * Creates a plain object from a s2c_gm message. Also converts values to other types if specified.
         * @param message s2c_gm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_gm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_gm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_gm
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_rename. */
    interface Ic2s_rename {

        /** c2s_rename name */
        name?: (string|null);
    }

    /** Represents a c2s_rename. */
    class c2s_rename implements Ic2s_rename {

        /**
         * Constructs a new c2s_rename.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Ic2s_rename);

        /** c2s_rename name. */
        public name: string;

        /**
         * Creates a new c2s_rename instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_rename instance
         */
        public static create(properties?: user.Ic2s_rename): user.c2s_rename;

        /**
         * Encodes the specified c2s_rename message. Does not implicitly {@link user.c2s_rename.verify|verify} messages.
         * @param message c2s_rename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Ic2s_rename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_rename message, length delimited. Does not implicitly {@link user.c2s_rename.verify|verify} messages.
         * @param message c2s_rename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Ic2s_rename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_rename message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_rename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.c2s_rename;

        /**
         * Decodes a c2s_rename message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_rename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.c2s_rename;

        /**
         * Verifies a c2s_rename message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_rename message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_rename
         */
        public static fromObject(object: { [k: string]: any }): user.c2s_rename;

        /**
         * Creates a plain object from a c2s_rename message. Also converts values to other types if specified.
         * @param message c2s_rename
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.c2s_rename, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_rename to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_rename
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_rename. */
    interface Is2c_rename {

        /** s2c_rename err */
        err?: (number|null);
    }

    /** Represents a s2c_rename. */
    class s2c_rename implements Is2c_rename {

        /**
         * Constructs a new s2c_rename.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.Is2c_rename);

        /** s2c_rename err. */
        public err: number;

        /**
         * Creates a new s2c_rename instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_rename instance
         */
        public static create(properties?: user.Is2c_rename): user.s2c_rename;

        /**
         * Encodes the specified s2c_rename message. Does not implicitly {@link user.s2c_rename.verify|verify} messages.
         * @param message s2c_rename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.Is2c_rename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_rename message, length delimited. Does not implicitly {@link user.s2c_rename.verify|verify} messages.
         * @param message s2c_rename message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.Is2c_rename, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_rename message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_rename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.s2c_rename;

        /**
         * Decodes a s2c_rename message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_rename
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.s2c_rename;

        /**
         * Verifies a s2c_rename message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_rename message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_rename
         */
        public static fromObject(object: { [k: string]: any }): user.s2c_rename;

        /**
         * Creates a plain object from a s2c_rename message. Also converts values to other types if specified.
         * @param message s2c_rename
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.s2c_rename, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_rename to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_rename
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace war. */
export namespace war {

    /** Properties of a WarHero. */
    interface IWarHero {

        /** WarHero heroId */
        heroId?: (number|null);

        /** WarHero eid */
        eid?: (number|null);
    }

    /** Represents a WarHero. */
    class WarHero implements IWarHero {

        /**
         * Constructs a new WarHero.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IWarHero);

        /** WarHero heroId. */
        public heroId: number;

        /** WarHero eid. */
        public eid: number;

        /**
         * Creates a new WarHero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarHero instance
         */
        public static create(properties?: war.IWarHero): war.WarHero;

        /**
         * Encodes the specified WarHero message. Does not implicitly {@link war.WarHero.verify|verify} messages.
         * @param message WarHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IWarHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarHero message, length delimited. Does not implicitly {@link war.WarHero.verify|verify} messages.
         * @param message WarHero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IWarHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarHero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.WarHero;

        /**
         * Decodes a WarHero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.WarHero;

        /**
         * Verifies a WarHero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarHero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarHero
         */
        public static fromObject(object: { [k: string]: any }): war.WarHero;

        /**
         * Creates a plain object from a WarHero message. Also converts values to other types if specified.
         * @param message WarHero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.WarHero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarHero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarHero
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WarRole. */
    interface IWarRole {

        /** WarRole rid */
        rid?: (number|Long|null);

        /** WarRole name */
        name?: (string|null);

        /** WarRole heros */
        heros?: (war.IWarHero[]|null);
    }

    /** Represents a WarRole. */
    class WarRole implements IWarRole {

        /**
         * Constructs a new WarRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IWarRole);

        /** WarRole rid. */
        public rid: (number|Long);

        /** WarRole name. */
        public name: string;

        /** WarRole heros. */
        public heros: war.IWarHero[];

        /**
         * Creates a new WarRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarRole instance
         */
        public static create(properties?: war.IWarRole): war.WarRole;

        /**
         * Encodes the specified WarRole message. Does not implicitly {@link war.WarRole.verify|verify} messages.
         * @param message WarRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IWarRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarRole message, length delimited. Does not implicitly {@link war.WarRole.verify|verify} messages.
         * @param message WarRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IWarRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.WarRole;

        /**
         * Decodes a WarRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.WarRole;

        /**
         * Verifies a WarRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarRole
         */
        public static fromObject(object: { [k: string]: any }): war.WarRole;

        /**
         * Creates a plain object from a WarRole message. Also converts values to other types if specified.
         * @param message WarRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.WarRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarRole
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_add_entity. */
    interface Icmd_add_entity {

        /** cmd_add_entity eid */
        eid?: (number|null);

        /** cmd_add_entity rid */
        rid?: (number|Long|null);

        /** cmd_add_entity entityId */
        entityId?: (number|null);

        /** cmd_add_entity maxHp */
        maxHp?: (number|null);

        /** cmd_add_entity hp */
        hp?: (number|null);

        /** cmd_add_entity face */
        face?: (number|null);

        /** cmd_add_entity x */
        x?: (number|null);

        /** cmd_add_entity y */
        y?: (number|null);

        /** cmd_add_entity z */
        z?: (number|null);

        /** cmd_add_entity maxMp */
        maxMp?: (number|null);

        /** cmd_add_entity mp */
        mp?: (number|null);
    }

    /** Represents a cmd_add_entity. */
    class cmd_add_entity implements Icmd_add_entity {

        /**
         * Constructs a new cmd_add_entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_add_entity);

        /** cmd_add_entity eid. */
        public eid: number;

        /** cmd_add_entity rid. */
        public rid: (number|Long);

        /** cmd_add_entity entityId. */
        public entityId: number;

        /** cmd_add_entity maxHp. */
        public maxHp: number;

        /** cmd_add_entity hp. */
        public hp: number;

        /** cmd_add_entity face. */
        public face: number;

        /** cmd_add_entity x. */
        public x: number;

        /** cmd_add_entity y. */
        public y: number;

        /** cmd_add_entity z. */
        public z: number;

        /** cmd_add_entity maxMp. */
        public maxMp: number;

        /** cmd_add_entity mp. */
        public mp: number;

        /**
         * Creates a new cmd_add_entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_add_entity instance
         */
        public static create(properties?: war.Icmd_add_entity): war.cmd_add_entity;

        /**
         * Encodes the specified cmd_add_entity message. Does not implicitly {@link war.cmd_add_entity.verify|verify} messages.
         * @param message cmd_add_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_add_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_add_entity message, length delimited. Does not implicitly {@link war.cmd_add_entity.verify|verify} messages.
         * @param message cmd_add_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_add_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_add_entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_add_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_add_entity;

        /**
         * Decodes a cmd_add_entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_add_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_add_entity;

        /**
         * Verifies a cmd_add_entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_add_entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_add_entity
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_add_entity;

        /**
         * Creates a plain object from a cmd_add_entity message. Also converts values to other types if specified.
         * @param message cmd_add_entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_add_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_add_entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_add_entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_update_entity. */
    interface Icmd_update_entity {

        /** cmd_update_entity eid */
        eid?: (number|null);

        /** cmd_update_entity maxHp */
        maxHp?: (number|null);

        /** cmd_update_entity hp */
        hp?: (number|null);

        /** cmd_update_entity x */
        x?: (number|null);

        /** cmd_update_entity y */
        y?: (number|null);

        /** cmd_update_entity z */
        z?: (number|null);
    }

    /** Represents a cmd_update_entity. */
    class cmd_update_entity implements Icmd_update_entity {

        /**
         * Constructs a new cmd_update_entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_update_entity);

        /** cmd_update_entity eid. */
        public eid: number;

        /** cmd_update_entity maxHp. */
        public maxHp: number;

        /** cmd_update_entity hp. */
        public hp: number;

        /** cmd_update_entity x. */
        public x: number;

        /** cmd_update_entity y. */
        public y: number;

        /** cmd_update_entity z. */
        public z: number;

        /**
         * Creates a new cmd_update_entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_update_entity instance
         */
        public static create(properties?: war.Icmd_update_entity): war.cmd_update_entity;

        /**
         * Encodes the specified cmd_update_entity message. Does not implicitly {@link war.cmd_update_entity.verify|verify} messages.
         * @param message cmd_update_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_update_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_update_entity message, length delimited. Does not implicitly {@link war.cmd_update_entity.verify|verify} messages.
         * @param message cmd_update_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_update_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_update_entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_update_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_update_entity;

        /**
         * Decodes a cmd_update_entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_update_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_update_entity;

        /**
         * Verifies a cmd_update_entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_update_entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_update_entity
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_update_entity;

        /**
         * Creates a plain object from a cmd_update_entity message. Also converts values to other types if specified.
         * @param message cmd_update_entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_update_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_update_entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_update_entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_del_entity. */
    interface Icmd_del_entity {

        /** cmd_del_entity eid */
        eid?: (number|null);
    }

    /** Represents a cmd_del_entity. */
    class cmd_del_entity implements Icmd_del_entity {

        /**
         * Constructs a new cmd_del_entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_del_entity);

        /** cmd_del_entity eid. */
        public eid: number;

        /**
         * Creates a new cmd_del_entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_del_entity instance
         */
        public static create(properties?: war.Icmd_del_entity): war.cmd_del_entity;

        /**
         * Encodes the specified cmd_del_entity message. Does not implicitly {@link war.cmd_del_entity.verify|verify} messages.
         * @param message cmd_del_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_del_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_del_entity message, length delimited. Does not implicitly {@link war.cmd_del_entity.verify|verify} messages.
         * @param message cmd_del_entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_del_entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_del_entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_del_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_del_entity;

        /**
         * Decodes a cmd_del_entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_del_entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_del_entity;

        /**
         * Verifies a cmd_del_entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_del_entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_del_entity
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_del_entity;

        /**
         * Creates a plain object from a cmd_del_entity message. Also converts values to other types if specified.
         * @param message cmd_del_entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_del_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_del_entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_del_entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_move_to. */
    interface Icmd_move_to {

        /** cmd_move_to eid */
        eid?: (number|null);

        /** cmd_move_to speed */
        speed?: (number|null);

        /** cmd_move_to targetX */
        targetX?: (number|null);

        /** cmd_move_to targetY */
        targetY?: (number|null);

        /** cmd_move_to targetZ */
        targetZ?: (number|null);
    }

    /** Represents a cmd_move_to. */
    class cmd_move_to implements Icmd_move_to {

        /**
         * Constructs a new cmd_move_to.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_move_to);

        /** cmd_move_to eid. */
        public eid: number;

        /** cmd_move_to speed. */
        public speed: number;

        /** cmd_move_to targetX. */
        public targetX: number;

        /** cmd_move_to targetY. */
        public targetY: number;

        /** cmd_move_to targetZ. */
        public targetZ: number;

        /**
         * Creates a new cmd_move_to instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_move_to instance
         */
        public static create(properties?: war.Icmd_move_to): war.cmd_move_to;

        /**
         * Encodes the specified cmd_move_to message. Does not implicitly {@link war.cmd_move_to.verify|verify} messages.
         * @param message cmd_move_to message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_move_to message, length delimited. Does not implicitly {@link war.cmd_move_to.verify|verify} messages.
         * @param message cmd_move_to message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_move_to message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_move_to
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_move_to;

        /**
         * Decodes a cmd_move_to message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_move_to
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_move_to;

        /**
         * Verifies a cmd_move_to message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_move_to message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_move_to
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_move_to;

        /**
         * Creates a plain object from a cmd_move_to message. Also converts values to other types if specified.
         * @param message cmd_move_to
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_move_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_move_to to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_move_to
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_force_to. */
    interface Icmd_force_to {

        /** cmd_force_to eid */
        eid?: (number|null);

        /** cmd_force_to speed */
        speed?: (number|null);

        /** cmd_force_to targetX */
        targetX?: (number|null);

        /** cmd_force_to targetY */
        targetY?: (number|null);

        /** cmd_force_to targetZ */
        targetZ?: (number|null);
    }

    /** Represents a cmd_force_to. */
    class cmd_force_to implements Icmd_force_to {

        /**
         * Constructs a new cmd_force_to.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_force_to);

        /** cmd_force_to eid. */
        public eid: number;

        /** cmd_force_to speed. */
        public speed: number;

        /** cmd_force_to targetX. */
        public targetX: number;

        /** cmd_force_to targetY. */
        public targetY: number;

        /** cmd_force_to targetZ. */
        public targetZ: number;

        /**
         * Creates a new cmd_force_to instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_force_to instance
         */
        public static create(properties?: war.Icmd_force_to): war.cmd_force_to;

        /**
         * Encodes the specified cmd_force_to message. Does not implicitly {@link war.cmd_force_to.verify|verify} messages.
         * @param message cmd_force_to message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_force_to, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_force_to message, length delimited. Does not implicitly {@link war.cmd_force_to.verify|verify} messages.
         * @param message cmd_force_to message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_force_to, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_force_to message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_force_to
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_force_to;

        /**
         * Decodes a cmd_force_to message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_force_to
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_force_to;

        /**
         * Verifies a cmd_force_to message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_force_to message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_force_to
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_force_to;

        /**
         * Creates a plain object from a cmd_force_to message. Also converts values to other types if specified.
         * @param message cmd_force_to
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_force_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_force_to to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_force_to
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_move_start. */
    interface Icmd_move_start {

        /** cmd_move_start eid */
        eid?: (number|null);

        /** cmd_move_start speed */
        speed?: (number|null);

        /** cmd_move_start dir */
        dir?: (number|null);
    }

    /** Represents a cmd_move_start. */
    class cmd_move_start implements Icmd_move_start {

        /**
         * Constructs a new cmd_move_start.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_move_start);

        /** cmd_move_start eid. */
        public eid: number;

        /** cmd_move_start speed. */
        public speed: number;

        /** cmd_move_start dir. */
        public dir: number;

        /**
         * Creates a new cmd_move_start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_move_start instance
         */
        public static create(properties?: war.Icmd_move_start): war.cmd_move_start;

        /**
         * Encodes the specified cmd_move_start message. Does not implicitly {@link war.cmd_move_start.verify|verify} messages.
         * @param message cmd_move_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_move_start message, length delimited. Does not implicitly {@link war.cmd_move_start.verify|verify} messages.
         * @param message cmd_move_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_move_start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_move_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_move_start;

        /**
         * Decodes a cmd_move_start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_move_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_move_start;

        /**
         * Verifies a cmd_move_start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_move_start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_move_start
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_move_start;

        /**
         * Creates a plain object from a cmd_move_start message. Also converts values to other types if specified.
         * @param message cmd_move_start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_move_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_move_start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_move_start
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_move_stop. */
    interface Icmd_move_stop {

        /** cmd_move_stop eid */
        eid?: (number|null);

        /** cmd_move_stop face */
        face?: (number|null);

        /** cmd_move_stop x */
        x?: (number|null);

        /** cmd_move_stop y */
        y?: (number|null);

        /** cmd_move_stop z */
        z?: (number|null);
    }

    /** Represents a cmd_move_stop. */
    class cmd_move_stop implements Icmd_move_stop {

        /**
         * Constructs a new cmd_move_stop.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_move_stop);

        /** cmd_move_stop eid. */
        public eid: number;

        /** cmd_move_stop face. */
        public face: number;

        /** cmd_move_stop x. */
        public x: number;

        /** cmd_move_stop y. */
        public y: number;

        /** cmd_move_stop z. */
        public z: number;

        /**
         * Creates a new cmd_move_stop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_move_stop instance
         */
        public static create(properties?: war.Icmd_move_stop): war.cmd_move_stop;

        /**
         * Encodes the specified cmd_move_stop message. Does not implicitly {@link war.cmd_move_stop.verify|verify} messages.
         * @param message cmd_move_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_move_stop message, length delimited. Does not implicitly {@link war.cmd_move_stop.verify|verify} messages.
         * @param message cmd_move_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_move_stop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_move_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_move_stop;

        /**
         * Decodes a cmd_move_stop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_move_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_move_stop;

        /**
         * Verifies a cmd_move_stop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_move_stop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_move_stop
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_move_stop;

        /**
         * Creates a plain object from a cmd_move_stop message. Also converts values to other types if specified.
         * @param message cmd_move_stop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_move_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_move_stop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_move_stop
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_add_buff. */
    interface Icmd_add_buff {

        /** cmd_add_buff eid */
        eid?: (number|null);

        /** cmd_add_buff id */
        id?: (number|null);

        /** cmd_add_buff stack */
        stack?: (number|null);

        /** cmd_add_buff expired */
        expired?: (number|null);
    }

    /** Represents a cmd_add_buff. */
    class cmd_add_buff implements Icmd_add_buff {

        /**
         * Constructs a new cmd_add_buff.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_add_buff);

        /** cmd_add_buff eid. */
        public eid: number;

        /** cmd_add_buff id. */
        public id: number;

        /** cmd_add_buff stack. */
        public stack: number;

        /** cmd_add_buff expired. */
        public expired: number;

        /**
         * Creates a new cmd_add_buff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_add_buff instance
         */
        public static create(properties?: war.Icmd_add_buff): war.cmd_add_buff;

        /**
         * Encodes the specified cmd_add_buff message. Does not implicitly {@link war.cmd_add_buff.verify|verify} messages.
         * @param message cmd_add_buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_add_buff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_add_buff message, length delimited. Does not implicitly {@link war.cmd_add_buff.verify|verify} messages.
         * @param message cmd_add_buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_add_buff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_add_buff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_add_buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_add_buff;

        /**
         * Decodes a cmd_add_buff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_add_buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_add_buff;

        /**
         * Verifies a cmd_add_buff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_add_buff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_add_buff
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_add_buff;

        /**
         * Creates a plain object from a cmd_add_buff message. Also converts values to other types if specified.
         * @param message cmd_add_buff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_add_buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_add_buff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_add_buff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_del_buff. */
    interface Icmd_del_buff {

        /** cmd_del_buff eid */
        eid?: (number|null);

        /** cmd_del_buff id */
        id?: (number|null);
    }

    /** Represents a cmd_del_buff. */
    class cmd_del_buff implements Icmd_del_buff {

        /**
         * Constructs a new cmd_del_buff.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_del_buff);

        /** cmd_del_buff eid. */
        public eid: number;

        /** cmd_del_buff id. */
        public id: number;

        /**
         * Creates a new cmd_del_buff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_del_buff instance
         */
        public static create(properties?: war.Icmd_del_buff): war.cmd_del_buff;

        /**
         * Encodes the specified cmd_del_buff message. Does not implicitly {@link war.cmd_del_buff.verify|verify} messages.
         * @param message cmd_del_buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_del_buff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_del_buff message, length delimited. Does not implicitly {@link war.cmd_del_buff.verify|verify} messages.
         * @param message cmd_del_buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_del_buff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_del_buff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_del_buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_del_buff;

        /**
         * Decodes a cmd_del_buff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_del_buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_del_buff;

        /**
         * Verifies a cmd_del_buff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_del_buff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_del_buff
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_del_buff;

        /**
         * Creates a plain object from a cmd_del_buff message. Also converts values to other types if specified.
         * @param message cmd_del_buff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_del_buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_del_buff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_del_buff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_attack. */
    interface Icmd_attack {

        /** cmd_attack eid */
        eid?: (number|null);

        /** cmd_attack skillId */
        skillId?: (number|null);

        /** cmd_attack curMp */
        curMp?: (number|null);
    }

    /** Represents a cmd_attack. */
    class cmd_attack implements Icmd_attack {

        /**
         * Constructs a new cmd_attack.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_attack);

        /** cmd_attack eid. */
        public eid: number;

        /** cmd_attack skillId. */
        public skillId: number;

        /** cmd_attack curMp. */
        public curMp: number;

        /**
         * Creates a new cmd_attack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_attack instance
         */
        public static create(properties?: war.Icmd_attack): war.cmd_attack;

        /**
         * Encodes the specified cmd_attack message. Does not implicitly {@link war.cmd_attack.verify|verify} messages.
         * @param message cmd_attack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_attack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_attack message, length delimited. Does not implicitly {@link war.cmd_attack.verify|verify} messages.
         * @param message cmd_attack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_attack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_attack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_attack;

        /**
         * Decodes a cmd_attack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_attack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_attack;

        /**
         * Verifies a cmd_attack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_attack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_attack
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_attack;

        /**
         * Creates a plain object from a cmd_attack message. Also converts values to other types if specified.
         * @param message cmd_attack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_attack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_attack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_attack
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_under_atk. */
    interface Icmd_under_atk {

        /** cmd_under_atk eid */
        eid?: (number|null);

        /** cmd_under_atk skillId */
        skillId?: (number|null);

        /** cmd_under_atk subHp */
        subHp?: (number|null);

        /** cmd_under_atk curMp */
        curMp?: (number|null);

        /** cmd_under_atk critical */
        critical?: (boolean|null);

        /** cmd_under_atk dodge */
        dodge?: (boolean|null);
    }

    /** Represents a cmd_under_atk. */
    class cmd_under_atk implements Icmd_under_atk {

        /**
         * Constructs a new cmd_under_atk.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_under_atk);

        /** cmd_under_atk eid. */
        public eid: number;

        /** cmd_under_atk skillId. */
        public skillId: number;

        /** cmd_under_atk subHp. */
        public subHp: number;

        /** cmd_under_atk curMp. */
        public curMp: number;

        /** cmd_under_atk critical. */
        public critical: boolean;

        /** cmd_under_atk dodge. */
        public dodge: boolean;

        /**
         * Creates a new cmd_under_atk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_under_atk instance
         */
        public static create(properties?: war.Icmd_under_atk): war.cmd_under_atk;

        /**
         * Encodes the specified cmd_under_atk message. Does not implicitly {@link war.cmd_under_atk.verify|verify} messages.
         * @param message cmd_under_atk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_under_atk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_under_atk message, length delimited. Does not implicitly {@link war.cmd_under_atk.verify|verify} messages.
         * @param message cmd_under_atk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_under_atk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_under_atk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_under_atk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_under_atk;

        /**
         * Decodes a cmd_under_atk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_under_atk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_under_atk;

        /**
         * Verifies a cmd_under_atk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_under_atk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_under_atk
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_under_atk;

        /**
         * Creates a plain object from a cmd_under_atk message. Also converts values to other types if specified.
         * @param message cmd_under_atk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_under_atk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_under_atk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_under_atk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_recover_hp. */
    interface Icmd_recover_hp {

        /** cmd_recover_hp eid */
        eid?: (number|null);

        /** cmd_recover_hp addHp */
        addHp?: (number|null);
    }

    /** Represents a cmd_recover_hp. */
    class cmd_recover_hp implements Icmd_recover_hp {

        /**
         * Constructs a new cmd_recover_hp.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_recover_hp);

        /** cmd_recover_hp eid. */
        public eid: number;

        /** cmd_recover_hp addHp. */
        public addHp: number;

        /**
         * Creates a new cmd_recover_hp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_recover_hp instance
         */
        public static create(properties?: war.Icmd_recover_hp): war.cmd_recover_hp;

        /**
         * Encodes the specified cmd_recover_hp message. Does not implicitly {@link war.cmd_recover_hp.verify|verify} messages.
         * @param message cmd_recover_hp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_recover_hp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_recover_hp message, length delimited. Does not implicitly {@link war.cmd_recover_hp.verify|verify} messages.
         * @param message cmd_recover_hp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_recover_hp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_recover_hp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_recover_hp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_recover_hp;

        /**
         * Decodes a cmd_recover_hp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_recover_hp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_recover_hp;

        /**
         * Verifies a cmd_recover_hp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_recover_hp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_recover_hp
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_recover_hp;

        /**
         * Creates a plain object from a cmd_recover_hp message. Also converts values to other types if specified.
         * @param message cmd_recover_hp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_recover_hp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_recover_hp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_recover_hp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_retreat. */
    interface Icmd_retreat {

        /** cmd_retreat eid */
        eid?: (number|null);
    }

    /** Represents a cmd_retreat. */
    class cmd_retreat implements Icmd_retreat {

        /**
         * Constructs a new cmd_retreat.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_retreat);

        /** cmd_retreat eid. */
        public eid: number;

        /**
         * Creates a new cmd_retreat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_retreat instance
         */
        public static create(properties?: war.Icmd_retreat): war.cmd_retreat;

        /**
         * Encodes the specified cmd_retreat message. Does not implicitly {@link war.cmd_retreat.verify|verify} messages.
         * @param message cmd_retreat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_retreat message, length delimited. Does not implicitly {@link war.cmd_retreat.verify|verify} messages.
         * @param message cmd_retreat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_retreat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_retreat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_retreat;

        /**
         * Decodes a cmd_retreat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_retreat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_retreat;

        /**
         * Verifies a cmd_retreat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_retreat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_retreat
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_retreat;

        /**
         * Creates a plain object from a cmd_retreat message. Also converts values to other types if specified.
         * @param message cmd_retreat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_retreat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_retreat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_retreat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a cmd_forward. */
    interface Icmd_forward {

        /** cmd_forward eid */
        eid?: (number|null);
    }

    /** Represents a cmd_forward. */
    class cmd_forward implements Icmd_forward {

        /**
         * Constructs a new cmd_forward.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Icmd_forward);

        /** cmd_forward eid. */
        public eid: number;

        /**
         * Creates a new cmd_forward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns cmd_forward instance
         */
        public static create(properties?: war.Icmd_forward): war.cmd_forward;

        /**
         * Encodes the specified cmd_forward message. Does not implicitly {@link war.cmd_forward.verify|verify} messages.
         * @param message cmd_forward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Icmd_forward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified cmd_forward message, length delimited. Does not implicitly {@link war.cmd_forward.verify|verify} messages.
         * @param message cmd_forward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Icmd_forward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a cmd_forward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns cmd_forward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.cmd_forward;

        /**
         * Decodes a cmd_forward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns cmd_forward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.cmd_forward;

        /**
         * Verifies a cmd_forward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a cmd_forward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns cmd_forward
         */
        public static fromObject(object: { [k: string]: any }): war.cmd_forward;

        /**
         * Creates a plain object from a cmd_forward message. Also converts values to other types if specified.
         * @param message cmd_forward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.cmd_forward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this cmd_forward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for cmd_forward
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WarCmd. */
    interface IWarCmd {

        /** WarCmd cmdType */
        cmdType?: (number|null);

        /** WarCmd addEntity */
        addEntity?: (war.Icmd_add_entity|null);

        /** WarCmd updateEntity */
        updateEntity?: (war.Icmd_update_entity|null);

        /** WarCmd delEntity */
        delEntity?: (war.Icmd_del_entity|null);

        /** WarCmd moveStart */
        moveStart?: (war.Icmd_move_start|null);

        /** WarCmd moveStop */
        moveStop?: (war.Icmd_move_stop|null);

        /** WarCmd addBuff */
        addBuff?: (war.Icmd_add_buff|null);

        /** WarCmd delBuff */
        delBuff?: (war.Icmd_del_buff|null);

        /** WarCmd attack */
        attack?: (war.Icmd_attack|null);

        /** WarCmd underAtk */
        underAtk?: (war.Icmd_under_atk|null);

        /** WarCmd forceTo */
        forceTo?: (war.Icmd_force_to|null);

        /** WarCmd moveTo */
        moveTo?: (war.Icmd_move_to|null);

        /** WarCmd retreat */
        retreat?: (war.Icmd_retreat|null);

        /** WarCmd forward */
        forward?: (war.Icmd_forward|null);

        /** WarCmd recoverHp */
        recoverHp?: (war.Icmd_recover_hp|null);
    }

    /** Represents a WarCmd. */
    class WarCmd implements IWarCmd {

        /**
         * Constructs a new WarCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IWarCmd);

        /** WarCmd cmdType. */
        public cmdType: number;

        /** WarCmd addEntity. */
        public addEntity?: (war.Icmd_add_entity|null);

        /** WarCmd updateEntity. */
        public updateEntity?: (war.Icmd_update_entity|null);

        /** WarCmd delEntity. */
        public delEntity?: (war.Icmd_del_entity|null);

        /** WarCmd moveStart. */
        public moveStart?: (war.Icmd_move_start|null);

        /** WarCmd moveStop. */
        public moveStop?: (war.Icmd_move_stop|null);

        /** WarCmd addBuff. */
        public addBuff?: (war.Icmd_add_buff|null);

        /** WarCmd delBuff. */
        public delBuff?: (war.Icmd_del_buff|null);

        /** WarCmd attack. */
        public attack?: (war.Icmd_attack|null);

        /** WarCmd underAtk. */
        public underAtk?: (war.Icmd_under_atk|null);

        /** WarCmd forceTo. */
        public forceTo?: (war.Icmd_force_to|null);

        /** WarCmd moveTo. */
        public moveTo?: (war.Icmd_move_to|null);

        /** WarCmd retreat. */
        public retreat?: (war.Icmd_retreat|null);

        /** WarCmd forward. */
        public forward?: (war.Icmd_forward|null);

        /** WarCmd recoverHp. */
        public recoverHp?: (war.Icmd_recover_hp|null);

        /**
         * Creates a new WarCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarCmd instance
         */
        public static create(properties?: war.IWarCmd): war.WarCmd;

        /**
         * Encodes the specified WarCmd message. Does not implicitly {@link war.WarCmd.verify|verify} messages.
         * @param message WarCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IWarCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarCmd message, length delimited. Does not implicitly {@link war.WarCmd.verify|verify} messages.
         * @param message WarCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IWarCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.WarCmd;

        /**
         * Decodes a WarCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.WarCmd;

        /**
         * Verifies a WarCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarCmd
         */
        public static fromObject(object: { [k: string]: any }): war.WarCmd;

        /**
         * Creates a plain object from a WarCmd message. Also converts values to other types if specified.
         * @param message WarCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.WarCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarCmd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WarFrame. */
    interface IWarFrame {

        /** WarFrame frame */
        frame?: (number|null);

        /** WarFrame cmds */
        cmds?: (war.IWarCmd[]|null);
    }

    /** Represents a WarFrame. */
    class WarFrame implements IWarFrame {

        /**
         * Constructs a new WarFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IWarFrame);

        /** WarFrame frame. */
        public frame: number;

        /** WarFrame cmds. */
        public cmds: war.IWarCmd[];

        /**
         * Creates a new WarFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarFrame instance
         */
        public static create(properties?: war.IWarFrame): war.WarFrame;

        /**
         * Encodes the specified WarFrame message. Does not implicitly {@link war.WarFrame.verify|verify} messages.
         * @param message WarFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IWarFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarFrame message, length delimited. Does not implicitly {@link war.WarFrame.verify|verify} messages.
         * @param message WarFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IWarFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.WarFrame;

        /**
         * Decodes a WarFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.WarFrame;

        /**
         * Verifies a WarFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarFrame
         */
        public static fromObject(object: { [k: string]: any }): war.WarFrame;

        /**
         * Creates a plain object from a WarFrame message. Also converts values to other types if specified.
         * @param message WarFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.WarFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WarFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a War. */
    interface IWar {

        /** War warId */
        warId?: (number|null);

        /** War warUid */
        warUid?: (number|null);

        /** War roles */
        roles?: (war.IWarRole[]|null);

        /** War frames */
        frames?: (war.IWarFrame[]|null);
    }

    /** Represents a War. */
    class War implements IWar {

        /**
         * Constructs a new War.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IWar);

        /** War warId. */
        public warId: number;

        /** War warUid. */
        public warUid: number;

        /** War roles. */
        public roles: war.IWarRole[];

        /** War frames. */
        public frames: war.IWarFrame[];

        /**
         * Creates a new War instance using the specified properties.
         * @param [properties] Properties to set
         * @returns War instance
         */
        public static create(properties?: war.IWar): war.War;

        /**
         * Encodes the specified War message. Does not implicitly {@link war.War.verify|verify} messages.
         * @param message War message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IWar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified War message, length delimited. Does not implicitly {@link war.War.verify|verify} messages.
         * @param message War message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IWar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a War message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.War;

        /**
         * Decodes a War message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns War
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.War;

        /**
         * Verifies a War message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a War message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns War
         */
        public static fromObject(object: { [k: string]: any }): war.War;

        /**
         * Creates a plain object from a War message. Also converts values to other types if specified.
         * @param message War
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.War, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this War to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for War
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {

        /** c2s_load warUid */
        warUid?: (number|null);
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Ic2s_load);

        /** c2s_load warUid. */
        public warUid: number;

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: war.Ic2s_load): war.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link war.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link war.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): war.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load war */
        war?: (war.IWar|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load war. */
        public war?: (war.IWar|null);

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: war.Is2c_load): war.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link war.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link war.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): war.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_ready. */
    interface Ic2s_ready {

        /** c2s_ready warUid */
        warUid?: (number|null);
    }

    /** Represents a c2s_ready. */
    class c2s_ready implements Ic2s_ready {

        /**
         * Constructs a new c2s_ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Ic2s_ready);

        /** c2s_ready warUid. */
        public warUid: number;

        /**
         * Creates a new c2s_ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_ready instance
         */
        public static create(properties?: war.Ic2s_ready): war.c2s_ready;

        /**
         * Encodes the specified c2s_ready message. Does not implicitly {@link war.c2s_ready.verify|verify} messages.
         * @param message c2s_ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Ic2s_ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_ready message, length delimited. Does not implicitly {@link war.c2s_ready.verify|verify} messages.
         * @param message c2s_ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Ic2s_ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.c2s_ready;

        /**
         * Decodes a c2s_ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.c2s_ready;

        /**
         * Verifies a c2s_ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_ready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_ready
         */
        public static fromObject(object: { [k: string]: any }): war.c2s_ready;

        /**
         * Creates a plain object from a c2s_ready message. Also converts values to other types if specified.
         * @param message c2s_ready
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.c2s_ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_ready to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_ready
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_ready. */
    interface Is2c_ready {

        /** s2c_ready err */
        err?: (number|null);
    }

    /** Represents a s2c_ready. */
    class s2c_ready implements Is2c_ready {

        /**
         * Constructs a new s2c_ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Is2c_ready);

        /** s2c_ready err. */
        public err: number;

        /**
         * Creates a new s2c_ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_ready instance
         */
        public static create(properties?: war.Is2c_ready): war.s2c_ready;

        /**
         * Encodes the specified s2c_ready message. Does not implicitly {@link war.s2c_ready.verify|verify} messages.
         * @param message s2c_ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Is2c_ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_ready message, length delimited. Does not implicitly {@link war.s2c_ready.verify|verify} messages.
         * @param message s2c_ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Is2c_ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.s2c_ready;

        /**
         * Decodes a s2c_ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.s2c_ready;

        /**
         * Verifies a s2c_ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_ready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_ready
         */
        public static fromObject(object: { [k: string]: any }): war.s2c_ready;

        /**
         * Creates a plain object from a s2c_ready message. Also converts values to other types if specified.
         * @param message s2c_ready
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.s2c_ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_ready to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_ready
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_cmd. */
    interface Inotify_cmd {

        /** notify_cmd warUid */
        warUid?: (number|null);

        /** notify_cmd frame */
        frame?: (war.IWarFrame|null);
    }

    /** Represents a notify_cmd. */
    class notify_cmd implements Inotify_cmd {

        /**
         * Constructs a new notify_cmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Inotify_cmd);

        /** notify_cmd warUid. */
        public warUid: number;

        /** notify_cmd frame. */
        public frame?: (war.IWarFrame|null);

        /**
         * Creates a new notify_cmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_cmd instance
         */
        public static create(properties?: war.Inotify_cmd): war.notify_cmd;

        /**
         * Encodes the specified notify_cmd message. Does not implicitly {@link war.notify_cmd.verify|verify} messages.
         * @param message notify_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Inotify_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_cmd message, length delimited. Does not implicitly {@link war.notify_cmd.verify|verify} messages.
         * @param message notify_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Inotify_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_cmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.notify_cmd;

        /**
         * Decodes a notify_cmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.notify_cmd;

        /**
         * Verifies a notify_cmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_cmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_cmd
         */
        public static fromObject(object: { [k: string]: any }): war.notify_cmd;

        /**
         * Creates a plain object from a notify_cmd message. Also converts values to other types if specified.
         * @param message notify_cmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.notify_cmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_cmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_cmd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_launch_skill. */
    interface Ic2s_launch_skill {

        /** c2s_launch_skill warUid */
        warUid?: (number|null);

        /** c2s_launch_skill eid */
        eid?: (number|null);

        /** c2s_launch_skill skillId */
        skillId?: (number|null);
    }

    /** Represents a c2s_launch_skill. */
    class c2s_launch_skill implements Ic2s_launch_skill {

        /**
         * Constructs a new c2s_launch_skill.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Ic2s_launch_skill);

        /** c2s_launch_skill warUid. */
        public warUid: number;

        /** c2s_launch_skill eid. */
        public eid: number;

        /** c2s_launch_skill skillId. */
        public skillId: number;

        /**
         * Creates a new c2s_launch_skill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_launch_skill instance
         */
        public static create(properties?: war.Ic2s_launch_skill): war.c2s_launch_skill;

        /**
         * Encodes the specified c2s_launch_skill message. Does not implicitly {@link war.c2s_launch_skill.verify|verify} messages.
         * @param message c2s_launch_skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Ic2s_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_launch_skill message, length delimited. Does not implicitly {@link war.c2s_launch_skill.verify|verify} messages.
         * @param message c2s_launch_skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Ic2s_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_launch_skill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_launch_skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.c2s_launch_skill;

        /**
         * Decodes a c2s_launch_skill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_launch_skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.c2s_launch_skill;

        /**
         * Verifies a c2s_launch_skill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_launch_skill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_launch_skill
         */
        public static fromObject(object: { [k: string]: any }): war.c2s_launch_skill;

        /**
         * Creates a plain object from a c2s_launch_skill message. Also converts values to other types if specified.
         * @param message c2s_launch_skill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.c2s_launch_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_launch_skill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_launch_skill
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_launch_skill. */
    interface Is2c_launch_skill {

        /** s2c_launch_skill err */
        err?: (number|null);
    }

    /** Represents a s2c_launch_skill. */
    class s2c_launch_skill implements Is2c_launch_skill {

        /**
         * Constructs a new s2c_launch_skill.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Is2c_launch_skill);

        /** s2c_launch_skill err. */
        public err: number;

        /**
         * Creates a new s2c_launch_skill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_launch_skill instance
         */
        public static create(properties?: war.Is2c_launch_skill): war.s2c_launch_skill;

        /**
         * Encodes the specified s2c_launch_skill message. Does not implicitly {@link war.s2c_launch_skill.verify|verify} messages.
         * @param message s2c_launch_skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Is2c_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_launch_skill message, length delimited. Does not implicitly {@link war.s2c_launch_skill.verify|verify} messages.
         * @param message s2c_launch_skill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Is2c_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_launch_skill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_launch_skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.s2c_launch_skill;

        /**
         * Decodes a s2c_launch_skill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_launch_skill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.s2c_launch_skill;

        /**
         * Verifies a s2c_launch_skill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_launch_skill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_launch_skill
         */
        public static fromObject(object: { [k: string]: any }): war.s2c_launch_skill;

        /**
         * Creates a plain object from a s2c_launch_skill message. Also converts values to other types if specified.
         * @param message s2c_launch_skill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.s2c_launch_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_launch_skill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_launch_skill
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_ask_cmd. */
    interface Ic2s_ask_cmd {

        /** c2s_ask_cmd warUid */
        warUid?: (number|null);

        /** c2s_ask_cmd frame */
        frame?: (number|null);
    }

    /** Represents a c2s_ask_cmd. */
    class c2s_ask_cmd implements Ic2s_ask_cmd {

        /**
         * Constructs a new c2s_ask_cmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Ic2s_ask_cmd);

        /** c2s_ask_cmd warUid. */
        public warUid: number;

        /** c2s_ask_cmd frame. */
        public frame: number;

        /**
         * Creates a new c2s_ask_cmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_ask_cmd instance
         */
        public static create(properties?: war.Ic2s_ask_cmd): war.c2s_ask_cmd;

        /**
         * Encodes the specified c2s_ask_cmd message. Does not implicitly {@link war.c2s_ask_cmd.verify|verify} messages.
         * @param message c2s_ask_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Ic2s_ask_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_ask_cmd message, length delimited. Does not implicitly {@link war.c2s_ask_cmd.verify|verify} messages.
         * @param message c2s_ask_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Ic2s_ask_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_ask_cmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_ask_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.c2s_ask_cmd;

        /**
         * Decodes a c2s_ask_cmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_ask_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.c2s_ask_cmd;

        /**
         * Verifies a c2s_ask_cmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_ask_cmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_ask_cmd
         */
        public static fromObject(object: { [k: string]: any }): war.c2s_ask_cmd;

        /**
         * Creates a plain object from a c2s_ask_cmd message. Also converts values to other types if specified.
         * @param message c2s_ask_cmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.c2s_ask_cmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_ask_cmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_ask_cmd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_ask_cmd. */
    interface Is2c_ask_cmd {

        /** s2c_ask_cmd err */
        err?: (number|null);
    }

    /** Represents a s2c_ask_cmd. */
    class s2c_ask_cmd implements Is2c_ask_cmd {

        /**
         * Constructs a new s2c_ask_cmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Is2c_ask_cmd);

        /** s2c_ask_cmd err. */
        public err: number;

        /**
         * Creates a new s2c_ask_cmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_ask_cmd instance
         */
        public static create(properties?: war.Is2c_ask_cmd): war.s2c_ask_cmd;

        /**
         * Encodes the specified s2c_ask_cmd message. Does not implicitly {@link war.s2c_ask_cmd.verify|verify} messages.
         * @param message s2c_ask_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Is2c_ask_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_ask_cmd message, length delimited. Does not implicitly {@link war.s2c_ask_cmd.verify|verify} messages.
         * @param message s2c_ask_cmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Is2c_ask_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_ask_cmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_ask_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.s2c_ask_cmd;

        /**
         * Decodes a s2c_ask_cmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_ask_cmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.s2c_ask_cmd;

        /**
         * Verifies a s2c_ask_cmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_ask_cmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_ask_cmd
         */
        public static fromObject(object: { [k: string]: any }): war.s2c_ask_cmd;

        /**
         * Creates a plain object from a s2c_ask_cmd message. Also converts values to other types if specified.
         * @param message s2c_ask_cmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.s2c_ask_cmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_ask_cmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_ask_cmd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_ask_fight. */
    interface Ic2s_ask_fight {

        /** c2s_ask_fight warUid */
        warUid?: (number|null);
    }

    /** Represents a c2s_ask_fight. */
    class c2s_ask_fight implements Ic2s_ask_fight {

        /**
         * Constructs a new c2s_ask_fight.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Ic2s_ask_fight);

        /** c2s_ask_fight warUid. */
        public warUid: number;

        /**
         * Creates a new c2s_ask_fight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_ask_fight instance
         */
        public static create(properties?: war.Ic2s_ask_fight): war.c2s_ask_fight;

        /**
         * Encodes the specified c2s_ask_fight message. Does not implicitly {@link war.c2s_ask_fight.verify|verify} messages.
         * @param message c2s_ask_fight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Ic2s_ask_fight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_ask_fight message, length delimited. Does not implicitly {@link war.c2s_ask_fight.verify|verify} messages.
         * @param message c2s_ask_fight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Ic2s_ask_fight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_ask_fight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_ask_fight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.c2s_ask_fight;

        /**
         * Decodes a c2s_ask_fight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_ask_fight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.c2s_ask_fight;

        /**
         * Verifies a c2s_ask_fight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_ask_fight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_ask_fight
         */
        public static fromObject(object: { [k: string]: any }): war.c2s_ask_fight;

        /**
         * Creates a plain object from a c2s_ask_fight message. Also converts values to other types if specified.
         * @param message c2s_ask_fight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.c2s_ask_fight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_ask_fight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_ask_fight
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_ask_fight. */
    interface Is2c_ask_fight {

        /** s2c_ask_fight err */
        err?: (number|null);
    }

    /** Represents a s2c_ask_fight. */
    class s2c_ask_fight implements Is2c_ask_fight {

        /**
         * Constructs a new s2c_ask_fight.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Is2c_ask_fight);

        /** s2c_ask_fight err. */
        public err: number;

        /**
         * Creates a new s2c_ask_fight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_ask_fight instance
         */
        public static create(properties?: war.Is2c_ask_fight): war.s2c_ask_fight;

        /**
         * Encodes the specified s2c_ask_fight message. Does not implicitly {@link war.s2c_ask_fight.verify|verify} messages.
         * @param message s2c_ask_fight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Is2c_ask_fight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_ask_fight message, length delimited. Does not implicitly {@link war.s2c_ask_fight.verify|verify} messages.
         * @param message s2c_ask_fight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Is2c_ask_fight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_ask_fight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_ask_fight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.s2c_ask_fight;

        /**
         * Decodes a s2c_ask_fight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_ask_fight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.s2c_ask_fight;

        /**
         * Verifies a s2c_ask_fight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_ask_fight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_ask_fight
         */
        public static fromObject(object: { [k: string]: any }): war.s2c_ask_fight;

        /**
         * Creates a plain object from a s2c_ask_fight message. Also converts values to other types if specified.
         * @param message s2c_ask_fight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.s2c_ask_fight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_ask_fight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_ask_fight
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_start. */
    interface Inotify_start {

        /** notify_start warUid */
        warUid?: (number|null);
    }

    /** Represents a notify_start. */
    class notify_start implements Inotify_start {

        /**
         * Constructs a new notify_start.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Inotify_start);

        /** notify_start warUid. */
        public warUid: number;

        /**
         * Creates a new notify_start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_start instance
         */
        public static create(properties?: war.Inotify_start): war.notify_start;

        /**
         * Encodes the specified notify_start message. Does not implicitly {@link war.notify_start.verify|verify} messages.
         * @param message notify_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Inotify_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_start message, length delimited. Does not implicitly {@link war.notify_start.verify|verify} messages.
         * @param message notify_start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Inotify_start, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.notify_start;

        /**
         * Decodes a notify_start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.notify_start;

        /**
         * Verifies a notify_start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_start
         */
        public static fromObject(object: { [k: string]: any }): war.notify_start;

        /**
         * Creates a plain object from a notify_start message. Also converts values to other types if specified.
         * @param message notify_start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.notify_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_start
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_end. */
    interface Inotify_end {

        /** notify_end warUid */
        warUid?: (number|null);
    }

    /** Represents a notify_end. */
    class notify_end implements Inotify_end {

        /**
         * Constructs a new notify_end.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Inotify_end);

        /** notify_end warUid. */
        public warUid: number;

        /**
         * Creates a new notify_end instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_end instance
         */
        public static create(properties?: war.Inotify_end): war.notify_end;

        /**
         * Encodes the specified notify_end message. Does not implicitly {@link war.notify_end.verify|verify} messages.
         * @param message notify_end message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Inotify_end, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_end message, length delimited. Does not implicitly {@link war.notify_end.verify|verify} messages.
         * @param message notify_end message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Inotify_end, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_end message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.notify_end;

        /**
         * Decodes a notify_end message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_end
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.notify_end;

        /**
         * Verifies a notify_end message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_end message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_end
         */
        public static fromObject(object: { [k: string]: any }): war.notify_end;

        /**
         * Creates a plain object from a notify_end message. Also converts values to other types if specified.
         * @param message notify_end
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.notify_end, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_end to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_end
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DebugInfo. */
    interface IDebugInfo {

        /** DebugInfo x */
        x?: (number|null);

        /** DebugInfo y */
        y?: (number|null);

        /** DebugInfo z */
        z?: (number|null);

        /** DebugInfo color */
        color?: (number|null);

        /** DebugInfo size */
        size?: (number|null);
    }

    /** Represents a DebugInfo. */
    class DebugInfo implements IDebugInfo {

        /**
         * Constructs a new DebugInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.IDebugInfo);

        /** DebugInfo x. */
        public x: number;

        /** DebugInfo y. */
        public y: number;

        /** DebugInfo z. */
        public z: number;

        /** DebugInfo color. */
        public color: number;

        /** DebugInfo size. */
        public size: number;

        /**
         * Creates a new DebugInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugInfo instance
         */
        public static create(properties?: war.IDebugInfo): war.DebugInfo;

        /**
         * Encodes the specified DebugInfo message. Does not implicitly {@link war.DebugInfo.verify|verify} messages.
         * @param message DebugInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link war.DebugInfo.verify|verify} messages.
         * @param message DebugInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.DebugInfo;

        /**
         * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.DebugInfo;

        /**
         * Verifies a DebugInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugInfo
         */
        public static fromObject(object: { [k: string]: any }): war.DebugInfo;

        /**
         * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
         * @param message DebugInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DebugInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_debug. */
    interface Inotify_debug {

        /** notify_debug infos */
        infos?: (war.IDebugInfo[]|null);

        /** notify_debug logs */
        logs?: (string[]|null);
    }

    /** Represents a notify_debug. */
    class notify_debug implements Inotify_debug {

        /**
         * Constructs a new notify_debug.
         * @param [properties] Properties to set
         */
        constructor(properties?: war.Inotify_debug);

        /** notify_debug infos. */
        public infos: war.IDebugInfo[];

        /** notify_debug logs. */
        public logs: string[];

        /**
         * Creates a new notify_debug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_debug instance
         */
        public static create(properties?: war.Inotify_debug): war.notify_debug;

        /**
         * Encodes the specified notify_debug message. Does not implicitly {@link war.notify_debug.verify|verify} messages.
         * @param message notify_debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: war.Inotify_debug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_debug message, length delimited. Does not implicitly {@link war.notify_debug.verify|verify} messages.
         * @param message notify_debug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: war.Inotify_debug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_debug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): war.notify_debug;

        /**
         * Decodes a notify_debug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_debug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): war.notify_debug;

        /**
         * Verifies a notify_debug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_debug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_debug
         */
        public static fromObject(object: { [k: string]: any }): war.notify_debug;

        /**
         * Creates a plain object from a notify_debug message. Also converts values to other types if specified.
         * @param message notify_debug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: war.notify_debug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_debug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_debug
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace world. */
export namespace world {

    /** Properties of a Role. */
    interface IRole {

        /** Role rid */
        rid?: (number|null);

        /** Role name */
        name?: (string|null);

        /** Role aid */
        aid?: (number|null);
    }

    /** Represents a Role. */
    class Role implements IRole {

        /**
         * Constructs a new Role.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IRole);

        /** Role rid. */
        public rid: number;

        /** Role name. */
        public name: string;

        /** Role aid. */
        public aid: number;

        /**
         * Creates a new Role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Role instance
         */
        public static create(properties?: world.IRole): world.Role;

        /**
         * Encodes the specified Role message. Does not implicitly {@link world.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Role message, length delimited. Does not implicitly {@link world.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.Role;

        /**
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.Role;

        /**
         * Verifies a Role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Role
         */
        public static fromObject(object: { [k: string]: any }): world.Role;

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @param message Role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Role
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Alliance. */
    interface IAlliance {

        /** Alliance aid */
        aid?: (number|null);

        /** Alliance name */
        name?: (string|null);
    }

    /** Represents an Alliance. */
    class Alliance implements IAlliance {

        /**
         * Constructs a new Alliance.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IAlliance);

        /** Alliance aid. */
        public aid: number;

        /** Alliance name. */
        public name: string;

        /**
         * Creates a new Alliance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Alliance instance
         */
        public static create(properties?: world.IAlliance): world.Alliance;

        /**
         * Encodes the specified Alliance message. Does not implicitly {@link world.Alliance.verify|verify} messages.
         * @param message Alliance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IAlliance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Alliance message, length delimited. Does not implicitly {@link world.Alliance.verify|verify} messages.
         * @param message Alliance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IAlliance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Alliance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Alliance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.Alliance;

        /**
         * Decodes an Alliance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Alliance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.Alliance;

        /**
         * Verifies an Alliance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Alliance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Alliance
         */
        public static fromObject(object: { [k: string]: any }): world.Alliance;

        /**
         * Creates a plain object from an Alliance message. Also converts values to other types if specified.
         * @param message Alliance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.Alliance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Alliance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Alliance
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentPlayer. */
    interface IComponentPlayer {

        /** ComponentPlayer soldierId */
        soldierId?: (number|null);

        /** ComponentPlayer cmd */
        cmd?: (number|null);

        /** ComponentPlayer stayEid */
        stayEid?: (number|null);

        /** ComponentPlayer homeEid */
        homeEid?: (number|null);
    }

    /** Represents a ComponentPlayer. */
    class ComponentPlayer implements IComponentPlayer {

        /**
         * Constructs a new ComponentPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentPlayer);

        /** ComponentPlayer soldierId. */
        public soldierId: number;

        /** ComponentPlayer cmd. */
        public cmd: number;

        /** ComponentPlayer stayEid. */
        public stayEid: number;

        /** ComponentPlayer homeEid. */
        public homeEid: number;

        /**
         * Creates a new ComponentPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentPlayer instance
         */
        public static create(properties?: world.IComponentPlayer): world.ComponentPlayer;

        /**
         * Encodes the specified ComponentPlayer message. Does not implicitly {@link world.ComponentPlayer.verify|verify} messages.
         * @param message ComponentPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentPlayer message, length delimited. Does not implicitly {@link world.ComponentPlayer.verify|verify} messages.
         * @param message ComponentPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentPlayer;

        /**
         * Decodes a ComponentPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentPlayer;

        /**
         * Verifies a ComponentPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentPlayer
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentPlayer;

        /**
         * Creates a plain object from a ComponentPlayer message. Also converts values to other types if specified.
         * @param message ComponentPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentPlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentOwner. */
    interface IComponentOwner {

        /** ComponentOwner rid */
        rid?: (number|null);

        /** ComponentOwner aid */
        aid?: (number|null);

        /** ComponentOwner eid */
        eid?: (number|null);
    }

    /** Represents a ComponentOwner. */
    class ComponentOwner implements IComponentOwner {

        /**
         * Constructs a new ComponentOwner.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentOwner);

        /** ComponentOwner rid. */
        public rid: number;

        /** ComponentOwner aid. */
        public aid: number;

        /** ComponentOwner eid. */
        public eid: number;

        /**
         * Creates a new ComponentOwner instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentOwner instance
         */
        public static create(properties?: world.IComponentOwner): world.ComponentOwner;

        /**
         * Encodes the specified ComponentOwner message. Does not implicitly {@link world.ComponentOwner.verify|verify} messages.
         * @param message ComponentOwner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentOwner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentOwner message, length delimited. Does not implicitly {@link world.ComponentOwner.verify|verify} messages.
         * @param message ComponentOwner message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentOwner, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentOwner message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentOwner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentOwner;

        /**
         * Decodes a ComponentOwner message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentOwner
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentOwner;

        /**
         * Verifies a ComponentOwner message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentOwner message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentOwner
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentOwner;

        /**
         * Creates a plain object from a ComponentOwner message. Also converts values to other types if specified.
         * @param message ComponentOwner
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentOwner, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentOwner to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentOwner
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Timer. */
    interface ITimer {

        /** Timer type */
        type?: (number|null);

        /** Timer start */
        start?: (number|null);

        /** Timer expire */
        expire?: (number|null);
    }

    /** Represents a Timer. */
    class Timer implements ITimer {

        /**
         * Constructs a new Timer.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.ITimer);

        /** Timer type. */
        public type: number;

        /** Timer start. */
        public start: number;

        /** Timer expire. */
        public expire: number;

        /**
         * Creates a new Timer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Timer instance
         */
        public static create(properties?: world.ITimer): world.Timer;

        /**
         * Encodes the specified Timer message. Does not implicitly {@link world.Timer.verify|verify} messages.
         * @param message Timer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.ITimer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Timer message, length delimited. Does not implicitly {@link world.Timer.verify|verify} messages.
         * @param message Timer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.ITimer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Timer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Timer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.Timer;

        /**
         * Decodes a Timer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Timer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.Timer;

        /**
         * Verifies a Timer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Timer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Timer
         */
        public static fromObject(object: { [k: string]: any }): world.Timer;

        /**
         * Creates a plain object from a Timer message. Also converts values to other types if specified.
         * @param message Timer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.Timer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Timer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Timer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentTimer. */
    interface IComponentTimer {

        /** ComponentTimer timers */
        timers?: ({ [k: string]: world.ITimer }|null);
    }

    /** Represents a ComponentTimer. */
    class ComponentTimer implements IComponentTimer {

        /**
         * Constructs a new ComponentTimer.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentTimer);

        /** ComponentTimer timers. */
        public timers: { [k: string]: world.ITimer };

        /**
         * Creates a new ComponentTimer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentTimer instance
         */
        public static create(properties?: world.IComponentTimer): world.ComponentTimer;

        /**
         * Encodes the specified ComponentTimer message. Does not implicitly {@link world.ComponentTimer.verify|verify} messages.
         * @param message ComponentTimer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentTimer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentTimer message, length delimited. Does not implicitly {@link world.ComponentTimer.verify|verify} messages.
         * @param message ComponentTimer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentTimer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentTimer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentTimer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentTimer;

        /**
         * Decodes a ComponentTimer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentTimer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentTimer;

        /**
         * Verifies a ComponentTimer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentTimer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentTimer
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentTimer;

        /**
         * Creates a plain object from a ComponentTimer message. Also converts values to other types if specified.
         * @param message ComponentTimer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentTimer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentTimer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentTimer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentMove. */
    interface IComponentMove {

        /** ComponentMove startMs */
        startMs?: (number|null);

        /** ComponentMove path */
        path?: (number[]|null);

        /** ComponentMove speed */
        speed?: (number|null);
    }

    /** Represents a ComponentMove. */
    class ComponentMove implements IComponentMove {

        /**
         * Constructs a new ComponentMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentMove);

        /** ComponentMove startMs. */
        public startMs: number;

        /** ComponentMove path. */
        public path: number[];

        /** ComponentMove speed. */
        public speed: number;

        /**
         * Creates a new ComponentMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentMove instance
         */
        public static create(properties?: world.IComponentMove): world.ComponentMove;

        /**
         * Encodes the specified ComponentMove message. Does not implicitly {@link world.ComponentMove.verify|verify} messages.
         * @param message ComponentMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentMove message, length delimited. Does not implicitly {@link world.ComponentMove.verify|verify} messages.
         * @param message ComponentMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentMove;

        /**
         * Decodes a ComponentMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentMove;

        /**
         * Verifies a ComponentMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentMove
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentMove;

        /**
         * Creates a plain object from a ComponentMove message. Also converts values to other types if specified.
         * @param message ComponentMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentBuilding. */
    interface IComponentBuilding {

        /** ComponentBuilding bid */
        bid?: (number|null);

        /** ComponentBuilding hp */
        hp?: (number|null);

        /** ComponentBuilding maxHp */
        maxHp?: (number|null);

        /** ComponentBuilding autoHpMs */
        autoHpMs?: (number|null);

        /** ComponentBuilding autoHp */
        autoHp?: (number|null);

        /** ComponentBuilding autoHpInr */
        autoHpInr?: (number|null);

        /** ComponentBuilding name */
        name?: (string|null);
    }

    /** Represents a ComponentBuilding. */
    class ComponentBuilding implements IComponentBuilding {

        /**
         * Constructs a new ComponentBuilding.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentBuilding);

        /** ComponentBuilding bid. */
        public bid: number;

        /** ComponentBuilding hp. */
        public hp: number;

        /** ComponentBuilding maxHp. */
        public maxHp: number;

        /** ComponentBuilding autoHpMs. */
        public autoHpMs: number;

        /** ComponentBuilding autoHp. */
        public autoHp: number;

        /** ComponentBuilding autoHpInr. */
        public autoHpInr: number;

        /** ComponentBuilding name. */
        public name: string;

        /**
         * Creates a new ComponentBuilding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentBuilding instance
         */
        public static create(properties?: world.IComponentBuilding): world.ComponentBuilding;

        /**
         * Encodes the specified ComponentBuilding message. Does not implicitly {@link world.ComponentBuilding.verify|verify} messages.
         * @param message ComponentBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentBuilding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentBuilding message, length delimited. Does not implicitly {@link world.ComponentBuilding.verify|verify} messages.
         * @param message ComponentBuilding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentBuilding, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentBuilding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentBuilding;

        /**
         * Decodes a ComponentBuilding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentBuilding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentBuilding;

        /**
         * Verifies a ComponentBuilding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentBuilding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentBuilding
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentBuilding;

        /**
         * Creates a plain object from a ComponentBuilding message. Also converts values to other types if specified.
         * @param message ComponentBuilding
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentBuilding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentBuilding to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentBuilding
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ComponentWar. */
    interface IComponentWar {

        /** ComponentWar warUid */
        warUid?: (number|null);

        /** ComponentWar fighterEids */
        fighterEids?: (number[]|null);

        /** ComponentWar startTs */
        startTs?: (number|null);
    }

    /** Represents a ComponentWar. */
    class ComponentWar implements IComponentWar {

        /**
         * Constructs a new ComponentWar.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IComponentWar);

        /** ComponentWar warUid. */
        public warUid: number;

        /** ComponentWar fighterEids. */
        public fighterEids: number[];

        /** ComponentWar startTs. */
        public startTs: number;

        /**
         * Creates a new ComponentWar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentWar instance
         */
        public static create(properties?: world.IComponentWar): world.ComponentWar;

        /**
         * Encodes the specified ComponentWar message. Does not implicitly {@link world.ComponentWar.verify|verify} messages.
         * @param message ComponentWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IComponentWar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentWar message, length delimited. Does not implicitly {@link world.ComponentWar.verify|verify} messages.
         * @param message ComponentWar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IComponentWar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentWar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ComponentWar;

        /**
         * Decodes a ComponentWar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentWar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ComponentWar;

        /**
         * Verifies a ComponentWar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentWar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentWar
         */
        public static fromObject(object: { [k: string]: any }): world.ComponentWar;

        /**
         * Creates a plain object from a ComponentWar message. Also converts values to other types if specified.
         * @param message ComponentWar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.ComponentWar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentWar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComponentWar
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Entity. */
    interface IEntity {

        /** Entity eid */
        eid?: (number|null);

        /** Entity etype */
        etype?: (number|null);

        /** Entity pos */
        pos?: (number|null);

        /** Entity state */
        state?: (number|null);

        /** Entity timer */
        timer?: (world.IComponentTimer|null);

        /** Entity move */
        move?: (world.IComponentMove|null);

        /** Entity building */
        building?: (world.IComponentBuilding|null);

        /** Entity owner */
        owner?: (world.IComponentOwner|null);

        /** Entity player */
        player?: (world.IComponentPlayer|null);

        /** Entity war */
        war?: (world.IComponentWar|null);
    }

    /** Represents an Entity. */
    class Entity implements IEntity {

        /**
         * Constructs a new Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IEntity);

        /** Entity eid. */
        public eid: number;

        /** Entity etype. */
        public etype: number;

        /** Entity pos. */
        public pos: number;

        /** Entity state. */
        public state: number;

        /** Entity timer. */
        public timer?: (world.IComponentTimer|null);

        /** Entity move. */
        public move?: (world.IComponentMove|null);

        /** Entity building. */
        public building?: (world.IComponentBuilding|null);

        /** Entity owner. */
        public owner?: (world.IComponentOwner|null);

        /** Entity player. */
        public player?: (world.IComponentPlayer|null);

        /** Entity war. */
        public war?: (world.IComponentWar|null);

        /**
         * Creates a new Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entity instance
         */
        public static create(properties?: world.IEntity): world.Entity;

        /**
         * Encodes the specified Entity message. Does not implicitly {@link world.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entity message, length delimited. Does not implicitly {@link world.Entity.verify|verify} messages.
         * @param message Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.Entity;

        /**
         * Decodes an Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.Entity;

        /**
         * Verifies an Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entity
         */
        public static fromObject(object: { [k: string]: any }): world.Entity;

        /**
         * Creates a plain object from an Entity message. Also converts values to other types if specified.
         * @param message Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Entity
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load. */
    interface Ic2s_load {
    }

    /** Represents a c2s_load. */
    class c2s_load implements Ic2s_load {

        /**
         * Constructs a new c2s_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_load);

        /**
         * Creates a new c2s_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load instance
         */
        public static create(properties?: world.Ic2s_load): world.c2s_load;

        /**
         * Encodes the specified c2s_load message. Does not implicitly {@link world.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link world.c2s_load.verify|verify} messages.
         * @param message c2s_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_load;

        /**
         * Decodes a c2s_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_load;

        /**
         * Verifies a c2s_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_load;

        /**
         * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
         * @param message c2s_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load. */
    interface Is2c_load {

        /** s2c_load err */
        err?: (number|null);

        /** s2c_load myCastleEid */
        myCastleEid?: (number|null);

        /** s2c_load myCastlePos */
        myCastlePos?: (number|null);
    }

    /** Represents a s2c_load. */
    class s2c_load implements Is2c_load {

        /**
         * Constructs a new s2c_load.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_load);

        /** s2c_load err. */
        public err: number;

        /** s2c_load myCastleEid. */
        public myCastleEid: number;

        /** s2c_load myCastlePos. */
        public myCastlePos: number;

        /**
         * Creates a new s2c_load instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load instance
         */
        public static create(properties?: world.Is2c_load): world.s2c_load;

        /**
         * Encodes the specified s2c_load message. Does not implicitly {@link world.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link world.s2c_load.verify|verify} messages.
         * @param message s2c_load message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_load;

        /**
         * Decodes a s2c_load message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_load;

        /**
         * Verifies a s2c_load message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_load;

        /**
         * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
         * @param message s2c_load
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_change_viewport. */
    interface Ic2s_change_viewport {

        /** c2s_change_viewport pos */
        pos?: (number|null);
    }

    /** Represents a c2s_change_viewport. */
    class c2s_change_viewport implements Ic2s_change_viewport {

        /**
         * Constructs a new c2s_change_viewport.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_change_viewport);

        /** c2s_change_viewport pos. */
        public pos: number;

        /**
         * Creates a new c2s_change_viewport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_change_viewport instance
         */
        public static create(properties?: world.Ic2s_change_viewport): world.c2s_change_viewport;

        /**
         * Encodes the specified c2s_change_viewport message. Does not implicitly {@link world.c2s_change_viewport.verify|verify} messages.
         * @param message c2s_change_viewport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_change_viewport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_change_viewport message, length delimited. Does not implicitly {@link world.c2s_change_viewport.verify|verify} messages.
         * @param message c2s_change_viewport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_change_viewport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_change_viewport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_change_viewport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_change_viewport;

        /**
         * Decodes a c2s_change_viewport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_change_viewport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_change_viewport;

        /**
         * Verifies a c2s_change_viewport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_change_viewport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_change_viewport
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_change_viewport;

        /**
         * Creates a plain object from a c2s_change_viewport message. Also converts values to other types if specified.
         * @param message c2s_change_viewport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_change_viewport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_change_viewport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_change_viewport
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_change_viewport. */
    interface Is2c_change_viewport {

        /** s2c_change_viewport err */
        err?: (number|null);
    }

    /** Represents a s2c_change_viewport. */
    class s2c_change_viewport implements Is2c_change_viewport {

        /**
         * Constructs a new s2c_change_viewport.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_change_viewport);

        /** s2c_change_viewport err. */
        public err: number;

        /**
         * Creates a new s2c_change_viewport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_change_viewport instance
         */
        public static create(properties?: world.Is2c_change_viewport): world.s2c_change_viewport;

        /**
         * Encodes the specified s2c_change_viewport message. Does not implicitly {@link world.s2c_change_viewport.verify|verify} messages.
         * @param message s2c_change_viewport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_change_viewport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_change_viewport message, length delimited. Does not implicitly {@link world.s2c_change_viewport.verify|verify} messages.
         * @param message s2c_change_viewport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_change_viewport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_change_viewport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_change_viewport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_change_viewport;

        /**
         * Decodes a s2c_change_viewport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_change_viewport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_change_viewport;

        /**
         * Verifies a s2c_change_viewport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_change_viewport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_change_viewport
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_change_viewport;

        /**
         * Creates a plain object from a s2c_change_viewport message. Also converts values to other types if specified.
         * @param message s2c_change_viewport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_change_viewport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_change_viewport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_change_viewport
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_giveup. */
    interface Ic2s_giveup {

        /** c2s_giveup eid */
        eid?: (number|null);
    }

    /** Represents a c2s_giveup. */
    class c2s_giveup implements Ic2s_giveup {

        /**
         * Constructs a new c2s_giveup.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_giveup);

        /** c2s_giveup eid. */
        public eid: number;

        /**
         * Creates a new c2s_giveup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_giveup instance
         */
        public static create(properties?: world.Ic2s_giveup): world.c2s_giveup;

        /**
         * Encodes the specified c2s_giveup message. Does not implicitly {@link world.c2s_giveup.verify|verify} messages.
         * @param message c2s_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_giveup message, length delimited. Does not implicitly {@link world.c2s_giveup.verify|verify} messages.
         * @param message c2s_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_giveup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_giveup;

        /**
         * Decodes a c2s_giveup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_giveup;

        /**
         * Verifies a c2s_giveup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_giveup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_giveup
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_giveup;

        /**
         * Creates a plain object from a c2s_giveup message. Also converts values to other types if specified.
         * @param message c2s_giveup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_giveup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_giveup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_giveup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_giveup. */
    interface Is2c_giveup {

        /** s2c_giveup err */
        err?: (number|null);
    }

    /** Represents a s2c_giveup. */
    class s2c_giveup implements Is2c_giveup {

        /**
         * Constructs a new s2c_giveup.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_giveup);

        /** s2c_giveup err. */
        public err: number;

        /**
         * Creates a new s2c_giveup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_giveup instance
         */
        public static create(properties?: world.Is2c_giveup): world.s2c_giveup;

        /**
         * Encodes the specified s2c_giveup message. Does not implicitly {@link world.s2c_giveup.verify|verify} messages.
         * @param message s2c_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_giveup message, length delimited. Does not implicitly {@link world.s2c_giveup.verify|verify} messages.
         * @param message s2c_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_giveup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_giveup;

        /**
         * Decodes a s2c_giveup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_giveup;

        /**
         * Verifies a s2c_giveup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_giveup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_giveup
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_giveup;

        /**
         * Creates a plain object from a s2c_giveup message. Also converts values to other types if specified.
         * @param message s2c_giveup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_giveup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_giveup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_giveup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_cancel_giveup. */
    interface Ic2s_cancel_giveup {

        /** c2s_cancel_giveup eid */
        eid?: (number|Long|null);
    }

    /** Represents a c2s_cancel_giveup. */
    class c2s_cancel_giveup implements Ic2s_cancel_giveup {

        /**
         * Constructs a new c2s_cancel_giveup.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_cancel_giveup);

        /** c2s_cancel_giveup eid. */
        public eid: (number|Long);

        /**
         * Creates a new c2s_cancel_giveup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_cancel_giveup instance
         */
        public static create(properties?: world.Ic2s_cancel_giveup): world.c2s_cancel_giveup;

        /**
         * Encodes the specified c2s_cancel_giveup message. Does not implicitly {@link world.c2s_cancel_giveup.verify|verify} messages.
         * @param message c2s_cancel_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_cancel_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_cancel_giveup message, length delimited. Does not implicitly {@link world.c2s_cancel_giveup.verify|verify} messages.
         * @param message c2s_cancel_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_cancel_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_cancel_giveup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_cancel_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_cancel_giveup;

        /**
         * Decodes a c2s_cancel_giveup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_cancel_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_cancel_giveup;

        /**
         * Verifies a c2s_cancel_giveup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_cancel_giveup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_cancel_giveup
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_cancel_giveup;

        /**
         * Creates a plain object from a c2s_cancel_giveup message. Also converts values to other types if specified.
         * @param message c2s_cancel_giveup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_cancel_giveup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_cancel_giveup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_cancel_giveup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_cancel_giveup. */
    interface Is2c_cancel_giveup {

        /** s2c_cancel_giveup err */
        err?: (number|null);
    }

    /** Represents a s2c_cancel_giveup. */
    class s2c_cancel_giveup implements Is2c_cancel_giveup {

        /**
         * Constructs a new s2c_cancel_giveup.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_cancel_giveup);

        /** s2c_cancel_giveup err. */
        public err: number;

        /**
         * Creates a new s2c_cancel_giveup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_cancel_giveup instance
         */
        public static create(properties?: world.Is2c_cancel_giveup): world.s2c_cancel_giveup;

        /**
         * Encodes the specified s2c_cancel_giveup message. Does not implicitly {@link world.s2c_cancel_giveup.verify|verify} messages.
         * @param message s2c_cancel_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_cancel_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_cancel_giveup message, length delimited. Does not implicitly {@link world.s2c_cancel_giveup.verify|verify} messages.
         * @param message s2c_cancel_giveup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_cancel_giveup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_cancel_giveup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_cancel_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_cancel_giveup;

        /**
         * Decodes a s2c_cancel_giveup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_cancel_giveup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_cancel_giveup;

        /**
         * Verifies a s2c_cancel_giveup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_cancel_giveup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_cancel_giveup
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_cancel_giveup;

        /**
         * Creates a plain object from a s2c_cancel_giveup message. Also converts values to other types if specified.
         * @param message s2c_cancel_giveup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_cancel_giveup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_cancel_giveup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_cancel_giveup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_load_detect_info. */
    interface Ic2s_load_detect_info {

        /** c2s_load_detect_info pos */
        pos?: (number|null);
    }

    /** Represents a c2s_load_detect_info. */
    class c2s_load_detect_info implements Ic2s_load_detect_info {

        /**
         * Constructs a new c2s_load_detect_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_load_detect_info);

        /** c2s_load_detect_info pos. */
        public pos: number;

        /**
         * Creates a new c2s_load_detect_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_load_detect_info instance
         */
        public static create(properties?: world.Ic2s_load_detect_info): world.c2s_load_detect_info;

        /**
         * Encodes the specified c2s_load_detect_info message. Does not implicitly {@link world.c2s_load_detect_info.verify|verify} messages.
         * @param message c2s_load_detect_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_load_detect_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_load_detect_info message, length delimited. Does not implicitly {@link world.c2s_load_detect_info.verify|verify} messages.
         * @param message c2s_load_detect_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_load_detect_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_load_detect_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_load_detect_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_load_detect_info;

        /**
         * Decodes a c2s_load_detect_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_load_detect_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_load_detect_info;

        /**
         * Verifies a c2s_load_detect_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_load_detect_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_load_detect_info
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_load_detect_info;

        /**
         * Creates a plain object from a c2s_load_detect_info message. Also converts values to other types if specified.
         * @param message c2s_load_detect_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_load_detect_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_load_detect_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_load_detect_info
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_load_detect_info. */
    interface Is2c_load_detect_info {

        /** s2c_load_detect_info err */
        err?: (number|null);

        /** s2c_load_detect_info dungeonId */
        dungeonId?: (number|null);

        /** s2c_load_detect_info aliveCount */
        aliveCount?: (number|null);
    }

    /** Represents a s2c_load_detect_info. */
    class s2c_load_detect_info implements Is2c_load_detect_info {

        /**
         * Constructs a new s2c_load_detect_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_load_detect_info);

        /** s2c_load_detect_info err. */
        public err: number;

        /** s2c_load_detect_info dungeonId. */
        public dungeonId: number;

        /** s2c_load_detect_info aliveCount. */
        public aliveCount: number;

        /**
         * Creates a new s2c_load_detect_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_load_detect_info instance
         */
        public static create(properties?: world.Is2c_load_detect_info): world.s2c_load_detect_info;

        /**
         * Encodes the specified s2c_load_detect_info message. Does not implicitly {@link world.s2c_load_detect_info.verify|verify} messages.
         * @param message s2c_load_detect_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_load_detect_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_load_detect_info message, length delimited. Does not implicitly {@link world.s2c_load_detect_info.verify|verify} messages.
         * @param message s2c_load_detect_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_load_detect_info, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_load_detect_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_load_detect_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_load_detect_info;

        /**
         * Decodes a s2c_load_detect_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_load_detect_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_load_detect_info;

        /**
         * Verifies a s2c_load_detect_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_load_detect_info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_load_detect_info
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_load_detect_info;

        /**
         * Creates a plain object from a s2c_load_detect_info message. Also converts values to other types if specified.
         * @param message s2c_load_detect_info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_load_detect_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_load_detect_info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_load_detect_info
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_player_move. */
    interface Ic2s_player_move {

        /** c2s_player_move playerEid */
        playerEid?: (number|null);

        /** c2s_player_move dstPos */
        dstPos?: (number|null);
    }

    /** Represents a c2s_player_move. */
    class c2s_player_move implements Ic2s_player_move {

        /**
         * Constructs a new c2s_player_move.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_player_move);

        /** c2s_player_move playerEid. */
        public playerEid: number;

        /** c2s_player_move dstPos. */
        public dstPos: number;

        /**
         * Creates a new c2s_player_move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_player_move instance
         */
        public static create(properties?: world.Ic2s_player_move): world.c2s_player_move;

        /**
         * Encodes the specified c2s_player_move message. Does not implicitly {@link world.c2s_player_move.verify|verify} messages.
         * @param message c2s_player_move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_player_move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_player_move message, length delimited. Does not implicitly {@link world.c2s_player_move.verify|verify} messages.
         * @param message c2s_player_move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_player_move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_player_move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_player_move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_player_move;

        /**
         * Decodes a c2s_player_move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_player_move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_player_move;

        /**
         * Verifies a c2s_player_move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_player_move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_player_move
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_player_move;

        /**
         * Creates a plain object from a c2s_player_move message. Also converts values to other types if specified.
         * @param message c2s_player_move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_player_move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_player_move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_player_move
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_player_move. */
    interface Is2c_player_move {

        /** s2c_player_move err */
        err?: (number|null);
    }

    /** Represents a s2c_player_move. */
    class s2c_player_move implements Is2c_player_move {

        /**
         * Constructs a new s2c_player_move.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_player_move);

        /** s2c_player_move err. */
        public err: number;

        /**
         * Creates a new s2c_player_move instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_player_move instance
         */
        public static create(properties?: world.Is2c_player_move): world.s2c_player_move;

        /**
         * Encodes the specified s2c_player_move message. Does not implicitly {@link world.s2c_player_move.verify|verify} messages.
         * @param message s2c_player_move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_player_move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_player_move message, length delimited. Does not implicitly {@link world.s2c_player_move.verify|verify} messages.
         * @param message s2c_player_move message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_player_move, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_player_move message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_player_move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_player_move;

        /**
         * Decodes a s2c_player_move message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_player_move
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_player_move;

        /**
         * Verifies a s2c_player_move message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_player_move message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_player_move
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_player_move;

        /**
         * Creates a plain object from a s2c_player_move message. Also converts values to other types if specified.
         * @param message s2c_player_move
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_player_move, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_player_move to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_player_move
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a c2s_player_stop. */
    interface Ic2s_player_stop {

        /** c2s_player_stop playerEid */
        playerEid?: (number|null);
    }

    /** Represents a c2s_player_stop. */
    class c2s_player_stop implements Ic2s_player_stop {

        /**
         * Constructs a new c2s_player_stop.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Ic2s_player_stop);

        /** c2s_player_stop playerEid. */
        public playerEid: number;

        /**
         * Creates a new c2s_player_stop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_player_stop instance
         */
        public static create(properties?: world.Ic2s_player_stop): world.c2s_player_stop;

        /**
         * Encodes the specified c2s_player_stop message. Does not implicitly {@link world.c2s_player_stop.verify|verify} messages.
         * @param message c2s_player_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Ic2s_player_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_player_stop message, length delimited. Does not implicitly {@link world.c2s_player_stop.verify|verify} messages.
         * @param message c2s_player_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Ic2s_player_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_player_stop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_player_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_player_stop;

        /**
         * Decodes a c2s_player_stop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_player_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_player_stop;

        /**
         * Verifies a c2s_player_stop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_player_stop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_player_stop
         */
        public static fromObject(object: { [k: string]: any }): world.c2s_player_stop;

        /**
         * Creates a plain object from a c2s_player_stop message. Also converts values to other types if specified.
         * @param message c2s_player_stop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.c2s_player_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_player_stop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for c2s_player_stop
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a s2c_player_stop. */
    interface Is2c_player_stop {

        /** s2c_player_stop err */
        err?: (number|null);
    }

    /** Represents a s2c_player_stop. */
    class s2c_player_stop implements Is2c_player_stop {

        /**
         * Constructs a new s2c_player_stop.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Is2c_player_stop);

        /** s2c_player_stop err. */
        public err: number;

        /**
         * Creates a new s2c_player_stop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_player_stop instance
         */
        public static create(properties?: world.Is2c_player_stop): world.s2c_player_stop;

        /**
         * Encodes the specified s2c_player_stop message. Does not implicitly {@link world.s2c_player_stop.verify|verify} messages.
         * @param message s2c_player_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Is2c_player_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_player_stop message, length delimited. Does not implicitly {@link world.s2c_player_stop.verify|verify} messages.
         * @param message s2c_player_stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Is2c_player_stop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_player_stop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_player_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_player_stop;

        /**
         * Decodes a s2c_player_stop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_player_stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_player_stop;

        /**
         * Verifies a s2c_player_stop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_player_stop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_player_stop
         */
        public static fromObject(object: { [k: string]: any }): world.s2c_player_stop;

        /**
         * Creates a plain object from a s2c_player_stop message. Also converts values to other types if specified.
         * @param message s2c_player_stop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.s2c_player_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_player_stop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for s2c_player_stop
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_alliances. */
    interface Inotify_alliances {

        /** notify_alliances alliances */
        alliances?: (world.IAlliance[]|null);
    }

    /** Represents a notify_alliances. */
    class notify_alliances implements Inotify_alliances {

        /**
         * Constructs a new notify_alliances.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_alliances);

        /** notify_alliances alliances. */
        public alliances: world.IAlliance[];

        /**
         * Creates a new notify_alliances instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_alliances instance
         */
        public static create(properties?: world.Inotify_alliances): world.notify_alliances;

        /**
         * Encodes the specified notify_alliances message. Does not implicitly {@link world.notify_alliances.verify|verify} messages.
         * @param message notify_alliances message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_alliances, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_alliances message, length delimited. Does not implicitly {@link world.notify_alliances.verify|verify} messages.
         * @param message notify_alliances message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_alliances, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_alliances message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_alliances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_alliances;

        /**
         * Decodes a notify_alliances message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_alliances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_alliances;

        /**
         * Verifies a notify_alliances message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_alliances message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_alliances
         */
        public static fromObject(object: { [k: string]: any }): world.notify_alliances;

        /**
         * Creates a plain object from a notify_alliances message. Also converts values to other types if specified.
         * @param message notify_alliances
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_alliances, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_alliances to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_alliances
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_roles. */
    interface Inotify_roles {

        /** notify_roles roles */
        roles?: (world.IRole[]|null);
    }

    /** Represents a notify_roles. */
    class notify_roles implements Inotify_roles {

        /**
         * Constructs a new notify_roles.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_roles);

        /** notify_roles roles. */
        public roles: world.IRole[];

        /**
         * Creates a new notify_roles instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_roles instance
         */
        public static create(properties?: world.Inotify_roles): world.notify_roles;

        /**
         * Encodes the specified notify_roles message. Does not implicitly {@link world.notify_roles.verify|verify} messages.
         * @param message notify_roles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_roles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_roles message, length delimited. Does not implicitly {@link world.notify_roles.verify|verify} messages.
         * @param message notify_roles message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_roles, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_roles message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_roles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_roles;

        /**
         * Decodes a notify_roles message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_roles
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_roles;

        /**
         * Verifies a notify_roles message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_roles message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_roles
         */
        public static fromObject(object: { [k: string]: any }): world.notify_roles;

        /**
         * Creates a plain object from a notify_roles message. Also converts values to other types if specified.
         * @param message notify_roles
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_roles, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_roles to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_roles
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddEntityAction. */
    interface IAddEntityAction {

        /** AddEntityAction entity */
        entity?: (world.IEntity|null);
    }

    /** Represents an AddEntityAction. */
    class AddEntityAction implements IAddEntityAction {

        /**
         * Constructs a new AddEntityAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IAddEntityAction);

        /** AddEntityAction entity. */
        public entity?: (world.IEntity|null);

        /**
         * Creates a new AddEntityAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddEntityAction instance
         */
        public static create(properties?: world.IAddEntityAction): world.AddEntityAction;

        /**
         * Encodes the specified AddEntityAction message. Does not implicitly {@link world.AddEntityAction.verify|verify} messages.
         * @param message AddEntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IAddEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddEntityAction message, length delimited. Does not implicitly {@link world.AddEntityAction.verify|verify} messages.
         * @param message AddEntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IAddEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddEntityAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddEntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.AddEntityAction;

        /**
         * Decodes an AddEntityAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddEntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.AddEntityAction;

        /**
         * Verifies an AddEntityAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddEntityAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddEntityAction
         */
        public static fromObject(object: { [k: string]: any }): world.AddEntityAction;

        /**
         * Creates a plain object from an AddEntityAction message. Also converts values to other types if specified.
         * @param message AddEntityAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.AddEntityAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddEntityAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddEntityAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DelEntityAction. */
    interface IDelEntityAction {

        /** DelEntityAction eid */
        eid?: (number|Long|null);
    }

    /** Represents a DelEntityAction. */
    class DelEntityAction implements IDelEntityAction {

        /**
         * Constructs a new DelEntityAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IDelEntityAction);

        /** DelEntityAction eid. */
        public eid: (number|Long);

        /**
         * Creates a new DelEntityAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelEntityAction instance
         */
        public static create(properties?: world.IDelEntityAction): world.DelEntityAction;

        /**
         * Encodes the specified DelEntityAction message. Does not implicitly {@link world.DelEntityAction.verify|verify} messages.
         * @param message DelEntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IDelEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelEntityAction message, length delimited. Does not implicitly {@link world.DelEntityAction.verify|verify} messages.
         * @param message DelEntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IDelEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelEntityAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelEntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.DelEntityAction;

        /**
         * Decodes a DelEntityAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelEntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.DelEntityAction;

        /**
         * Verifies a DelEntityAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelEntityAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelEntityAction
         */
        public static fromObject(object: { [k: string]: any }): world.DelEntityAction;

        /**
         * Creates a plain object from a DelEntityAction message. Also converts values to other types if specified.
         * @param message DelEntityAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.DelEntityAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelEntityAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DelEntityAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MoveAction. */
    interface IMoveAction {

        /** MoveAction eid */
        eid?: (number|Long|null);

        /** MoveAction path */
        path?: (number[]|null);

        /** MoveAction speed */
        speed?: (number|null);

        /** MoveAction startMs */
        startMs?: (number|null);
    }

    /** Represents a MoveAction. */
    class MoveAction implements IMoveAction {

        /**
         * Constructs a new MoveAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IMoveAction);

        /** MoveAction eid. */
        public eid: (number|Long);

        /** MoveAction path. */
        public path: number[];

        /** MoveAction speed. */
        public speed: number;

        /** MoveAction startMs. */
        public startMs: number;

        /**
         * Creates a new MoveAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveAction instance
         */
        public static create(properties?: world.IMoveAction): world.MoveAction;

        /**
         * Encodes the specified MoveAction message. Does not implicitly {@link world.MoveAction.verify|verify} messages.
         * @param message MoveAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IMoveAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoveAction message, length delimited. Does not implicitly {@link world.MoveAction.verify|verify} messages.
         * @param message MoveAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IMoveAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoveAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.MoveAction;

        /**
         * Decodes a MoveAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.MoveAction;

        /**
         * Verifies a MoveAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoveAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveAction
         */
        public static fromObject(object: { [k: string]: any }): world.MoveAction;

        /**
         * Creates a plain object from a MoveAction message. Also converts values to other types if specified.
         * @param message MoveAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.MoveAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoveAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MoveAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EntityAction. */
    interface IEntityAction {

        /** EntityAction action */
        action?: (number|null);

        /** EntityAction addEntity */
        addEntity?: (world.IAddEntityAction|null);

        /** EntityAction delEntity */
        delEntity?: (world.IDelEntityAction|null);

        /** EntityAction move */
        move?: (world.IMoveAction|null);
    }

    /** Represents an EntityAction. */
    class EntityAction implements IEntityAction {

        /**
         * Constructs a new EntityAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.IEntityAction);

        /** EntityAction action. */
        public action: number;

        /** EntityAction addEntity. */
        public addEntity?: (world.IAddEntityAction|null);

        /** EntityAction delEntity. */
        public delEntity?: (world.IDelEntityAction|null);

        /** EntityAction move. */
        public move?: (world.IMoveAction|null);

        /**
         * Creates a new EntityAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityAction instance
         */
        public static create(properties?: world.IEntityAction): world.EntityAction;

        /**
         * Encodes the specified EntityAction message. Does not implicitly {@link world.EntityAction.verify|verify} messages.
         * @param message EntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.IEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityAction message, length delimited. Does not implicitly {@link world.EntityAction.verify|verify} messages.
         * @param message EntityAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.IEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.EntityAction;

        /**
         * Decodes an EntityAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.EntityAction;

        /**
         * Verifies an EntityAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityAction
         */
        public static fromObject(object: { [k: string]: any }): world.EntityAction;

        /**
         * Creates a plain object from an EntityAction message. Also converts values to other types if specified.
         * @param message EntityAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.EntityAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_entities. */
    interface Inotify_entities {

        /** notify_entities enterList */
        enterList?: (world.IEntity[]|null);

        /** notify_entities leaveList */
        leaveList?: (number[]|null);
    }

    /** Represents a notify_entities. */
    class notify_entities implements Inotify_entities {

        /**
         * Constructs a new notify_entities.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_entities);

        /** notify_entities enterList. */
        public enterList: world.IEntity[];

        /** notify_entities leaveList. */
        public leaveList: number[];

        /**
         * Creates a new notify_entities instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_entities instance
         */
        public static create(properties?: world.Inotify_entities): world.notify_entities;

        /**
         * Encodes the specified notify_entities message. Does not implicitly {@link world.notify_entities.verify|verify} messages.
         * @param message notify_entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_entities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_entities message, length delimited. Does not implicitly {@link world.notify_entities.verify|verify} messages.
         * @param message notify_entities message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_entities, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_entities message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_entities;

        /**
         * Decodes a notify_entities message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_entities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_entities;

        /**
         * Verifies a notify_entities message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_entities message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_entities
         */
        public static fromObject(object: { [k: string]: any }): world.notify_entities;

        /**
         * Creates a plain object from a notify_entities message. Also converts values to other types if specified.
         * @param message notify_entities
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_entities, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_entities to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_entities
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_actions. */
    interface Inotify_actions {

        /** notify_actions actions */
        actions?: (world.IEntityAction[]|null);
    }

    /** Represents a notify_actions. */
    class notify_actions implements Inotify_actions {

        /**
         * Constructs a new notify_actions.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_actions);

        /** notify_actions actions. */
        public actions: world.IEntityAction[];

        /**
         * Creates a new notify_actions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_actions instance
         */
        public static create(properties?: world.Inotify_actions): world.notify_actions;

        /**
         * Encodes the specified notify_actions message. Does not implicitly {@link world.notify_actions.verify|verify} messages.
         * @param message notify_actions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_actions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_actions message, length delimited. Does not implicitly {@link world.notify_actions.verify|verify} messages.
         * @param message notify_actions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_actions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_actions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_actions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_actions;

        /**
         * Decodes a notify_actions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_actions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_actions;

        /**
         * Verifies a notify_actions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_actions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_actions
         */
        public static fromObject(object: { [k: string]: any }): world.notify_actions;

        /**
         * Creates a plain object from a notify_actions message. Also converts values to other types if specified.
         * @param message notify_actions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_actions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_actions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_actions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_war_result. */
    interface Inotify_war_result {

        /** notify_war_result srcEid */
        srcEid?: (number|null);

        /** notify_war_result dstEid */
        dstEid?: (number|null);

        /** notify_war_result result */
        result?: (number|null);
    }

    /** Represents a notify_war_result. */
    class notify_war_result implements Inotify_war_result {

        /**
         * Constructs a new notify_war_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_war_result);

        /** notify_war_result srcEid. */
        public srcEid: number;

        /** notify_war_result dstEid. */
        public dstEid: number;

        /** notify_war_result result. */
        public result: number;

        /**
         * Creates a new notify_war_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_war_result instance
         */
        public static create(properties?: world.Inotify_war_result): world.notify_war_result;

        /**
         * Encodes the specified notify_war_result message. Does not implicitly {@link world.notify_war_result.verify|verify} messages.
         * @param message notify_war_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_war_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_war_result message, length delimited. Does not implicitly {@link world.notify_war_result.verify|verify} messages.
         * @param message notify_war_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_war_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_war_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_war_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_war_result;

        /**
         * Decodes a notify_war_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_war_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_war_result;

        /**
         * Verifies a notify_war_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_war_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_war_result
         */
        public static fromObject(object: { [k: string]: any }): world.notify_war_result;

        /**
         * Creates a plain object from a notify_war_result message. Also converts values to other types if specified.
         * @param message notify_war_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_war_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_war_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_war_result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a notify_occupy_result. */
    interface Inotify_occupy_result {

        /** notify_occupy_result type */
        type?: (number|null);

        /** notify_occupy_result aid */
        aid?: (number|null);

        /** notify_occupy_result bid */
        bid?: (number|null);

        /** notify_occupy_result eid */
        eid?: (number|null);
    }

    /** Represents a notify_occupy_result. */
    class notify_occupy_result implements Inotify_occupy_result {

        /**
         * Constructs a new notify_occupy_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: world.Inotify_occupy_result);

        /** notify_occupy_result type. */
        public type: number;

        /** notify_occupy_result aid. */
        public aid: number;

        /** notify_occupy_result bid. */
        public bid: number;

        /** notify_occupy_result eid. */
        public eid: number;

        /**
         * Creates a new notify_occupy_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns notify_occupy_result instance
         */
        public static create(properties?: world.Inotify_occupy_result): world.notify_occupy_result;

        /**
         * Encodes the specified notify_occupy_result message. Does not implicitly {@link world.notify_occupy_result.verify|verify} messages.
         * @param message notify_occupy_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: world.Inotify_occupy_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified notify_occupy_result message, length delimited. Does not implicitly {@link world.notify_occupy_result.verify|verify} messages.
         * @param message notify_occupy_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: world.Inotify_occupy_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a notify_occupy_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns notify_occupy_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_occupy_result;

        /**
         * Decodes a notify_occupy_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns notify_occupy_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_occupy_result;

        /**
         * Verifies a notify_occupy_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a notify_occupy_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns notify_occupy_result
         */
        public static fromObject(object: { [k: string]: any }): world.notify_occupy_result;

        /**
         * Creates a plain object from a notify_occupy_result message. Also converts values to other types if specified.
         * @param message notify_occupy_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: world.notify_occupy_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this notify_occupy_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for notify_occupy_result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
