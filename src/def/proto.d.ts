// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

export = proto;

declare namespace proto {


    /** Namespace alliance. */
    namespace alliance {

        /** Properties of a c2s_load. */
        interface Ic2s_load {
        }

        /** Represents a c2s_load. */
        class c2s_load implements Ic2s_load {

            /**
             * Constructs a new c2s_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: alliance.Ic2s_load);

            /**
             * Creates a new c2s_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load instance
             */
            public static create(properties?: alliance.Ic2s_load): alliance.c2s_load;

            /**
             * Encodes the specified c2s_load message. Does not implicitly {@link alliance.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: alliance.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link alliance.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: alliance.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alliance.c2s_load;

            /**
             * Decodes a c2s_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alliance.c2s_load;

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
            public static fromObject(object: { [k: string]: any }): alliance.c2s_load;

            /**
             * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
             * @param message c2s_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: alliance.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** s2c_load aid */
            aid?: (number|null);
        }

        /** Represents a s2c_load. */
        class s2c_load implements Is2c_load {

            /**
             * Constructs a new s2c_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: alliance.Is2c_load);

            /** s2c_load err. */
            public err: number;

            /** s2c_load aid. */
            public aid: number;

            /**
             * Creates a new s2c_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load instance
             */
            public static create(properties?: alliance.Is2c_load): alliance.s2c_load;

            /**
             * Encodes the specified s2c_load message. Does not implicitly {@link alliance.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: alliance.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link alliance.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: alliance.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alliance.s2c_load;

            /**
             * Decodes a s2c_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alliance.s2c_load;

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
            public static fromObject(object: { [k: string]: any }): alliance.s2c_load;

            /**
             * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
             * @param message s2c_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: alliance.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Namespace bag. */
    namespace bag {

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

    /** Namespace chat. */
    namespace chat {

        /** Properties of a ChatRole. */
        interface IChatRole {

            /** ChatRole rid */
            rid?: (number|null);

            /** ChatRole avatarId */
            avatarId?: (number|null);

            /** ChatRole avatarUrl */
            avatarUrl?: (string|null);

            /** ChatRole name */
            name?: (string|null);
        }

        /** Represents a ChatRole. */
        class ChatRole implements IChatRole {

            /**
             * Constructs a new ChatRole.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.IChatRole);

            /** ChatRole rid. */
            public rid: number;

            /** ChatRole avatarId. */
            public avatarId: number;

            /** ChatRole avatarUrl. */
            public avatarUrl: string;

            /** ChatRole name. */
            public name: string;

            /**
             * Creates a new ChatRole instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatRole instance
             */
            public static create(properties?: chat.IChatRole): chat.ChatRole;

            /**
             * Encodes the specified ChatRole message. Does not implicitly {@link chat.ChatRole.verify|verify} messages.
             * @param message ChatRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.IChatRole, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatRole message, length delimited. Does not implicitly {@link chat.ChatRole.verify|verify} messages.
             * @param message ChatRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.IChatRole, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatRole message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ChatRole;

            /**
             * Decodes a ChatRole message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ChatRole;

            /**
             * Verifies a ChatRole message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatRole message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatRole
             */
            public static fromObject(object: { [k: string]: any }): chat.ChatRole;

            /**
             * Creates a plain object from a ChatRole message. Also converts values to other types if specified.
             * @param message ChatRole
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.ChatRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatRole to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatRole
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChatMessage. */
        interface IChatMessage {

            /** ChatMessage rid */
            rid?: (number|null);

            /** ChatMessage text */
            text?: (string|null);

            /** ChatMessage time */
            time?: (number|null);
        }

        /** Represents a ChatMessage. */
        class ChatMessage implements IChatMessage {

            /**
             * Constructs a new ChatMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.IChatMessage);

            /** ChatMessage rid. */
            public rid: number;

            /** ChatMessage text. */
            public text: string;

            /** ChatMessage time. */
            public time: number;

            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatMessage instance
             */
            public static create(properties?: chat.IChatMessage): chat.ChatMessage;

            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ChatMessage;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ChatMessage;

            /**
             * Verifies a ChatMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatMessage
             */
            public static fromObject(object: { [k: string]: any }): chat.ChatMessage;

            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @param message ChatMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load. */
        interface Ic2s_load {

            /** c2s_load channel */
            channel?: (number|null);
        }

        /** Represents a c2s_load. */
        class c2s_load implements Ic2s_load {

            /**
             * Constructs a new c2s_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Ic2s_load);

            /** c2s_load channel. */
            public channel: number;

            /**
             * Creates a new c2s_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load instance
             */
            public static create(properties?: chat.Ic2s_load): chat.c2s_load;

            /**
             * Encodes the specified c2s_load message. Does not implicitly {@link chat.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link chat.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.c2s_load;

            /**
             * Decodes a c2s_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.c2s_load;

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
            public static fromObject(object: { [k: string]: any }): chat.c2s_load;

            /**
             * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
             * @param message c2s_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** s2c_load channel */
            channel?: (number|null);

            /** s2c_load messages */
            messages?: (chat.IChatMessage[]|null);

            /** s2c_load chatRoles */
            chatRoles?: (chat.IChatRole[]|null);
        }

        /** Represents a s2c_load. */
        class s2c_load implements Is2c_load {

            /**
             * Constructs a new s2c_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Is2c_load);

            /** s2c_load err. */
            public err: number;

            /** s2c_load channel. */
            public channel: number;

            /** s2c_load messages. */
            public messages: chat.IChatMessage[];

            /** s2c_load chatRoles. */
            public chatRoles: chat.IChatRole[];

            /**
             * Creates a new s2c_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load instance
             */
            public static create(properties?: chat.Is2c_load): chat.s2c_load;

            /**
             * Encodes the specified s2c_load message. Does not implicitly {@link chat.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link chat.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.s2c_load;

            /**
             * Decodes a s2c_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.s2c_load;

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
            public static fromObject(object: { [k: string]: any }): chat.s2c_load;

            /**
             * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
             * @param message s2c_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a c2s_send. */
        interface Ic2s_send {

            /** c2s_send channel */
            channel?: (number|null);

            /** c2s_send text */
            text?: (string|null);
        }

        /** Represents a c2s_send. */
        class c2s_send implements Ic2s_send {

            /**
             * Constructs a new c2s_send.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Ic2s_send);

            /** c2s_send channel. */
            public channel: number;

            /** c2s_send text. */
            public text: string;

            /**
             * Creates a new c2s_send instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_send instance
             */
            public static create(properties?: chat.Ic2s_send): chat.c2s_send;

            /**
             * Encodes the specified c2s_send message. Does not implicitly {@link chat.c2s_send.verify|verify} messages.
             * @param message c2s_send message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Ic2s_send, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_send message, length delimited. Does not implicitly {@link chat.c2s_send.verify|verify} messages.
             * @param message c2s_send message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Ic2s_send, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_send message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.c2s_send;

            /**
             * Decodes a c2s_send message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.c2s_send;

            /**
             * Verifies a c2s_send message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_send message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_send
             */
            public static fromObject(object: { [k: string]: any }): chat.c2s_send;

            /**
             * Creates a plain object from a c2s_send message. Also converts values to other types if specified.
             * @param message c2s_send
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.c2s_send, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_send to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_send
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_send. */
        interface Is2c_send {

            /** s2c_send err */
            err?: (number|null);
        }

        /** Represents a s2c_send. */
        class s2c_send implements Is2c_send {

            /**
             * Constructs a new s2c_send.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Is2c_send);

            /** s2c_send err. */
            public err: number;

            /**
             * Creates a new s2c_send instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_send instance
             */
            public static create(properties?: chat.Is2c_send): chat.s2c_send;

            /**
             * Encodes the specified s2c_send message. Does not implicitly {@link chat.s2c_send.verify|verify} messages.
             * @param message s2c_send message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Is2c_send, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_send message, length delimited. Does not implicitly {@link chat.s2c_send.verify|verify} messages.
             * @param message s2c_send message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Is2c_send, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_send message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.s2c_send;

            /**
             * Decodes a s2c_send message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_send
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.s2c_send;

            /**
             * Verifies a s2c_send message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_send message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_send
             */
            public static fromObject(object: { [k: string]: any }): chat.s2c_send;

            /**
             * Creates a plain object from a s2c_send message. Also converts values to other types if specified.
             * @param message s2c_send
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.s2c_send, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_send to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_send
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify. */
        interface Inotify {

            /** notify channel */
            channel?: (number|null);

            /** notify messages */
            messages?: (chat.IChatMessage[]|null);

            /** notify chatRoles */
            chatRoles?: (chat.IChatRole[]|null);
        }

        /** Represents a notify. */
        class notify implements Inotify {

            /**
             * Constructs a new notify.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Inotify);

            /** notify channel. */
            public channel: number;

            /** notify messages. */
            public messages: chat.IChatMessage[];

            /** notify chatRoles. */
            public chatRoles: chat.IChatRole[];

            /**
             * Creates a new notify instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify instance
             */
            public static create(properties?: chat.Inotify): chat.notify;

            /**
             * Encodes the specified notify message. Does not implicitly {@link chat.notify.verify|verify} messages.
             * @param message notify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Inotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify message, length delimited. Does not implicitly {@link chat.notify.verify|verify} messages.
             * @param message notify message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Inotify, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.notify;

            /**
             * Decodes a notify message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.notify;

            /**
             * Verifies a notify message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify
             */
            public static fromObject(object: { [k: string]: any }): chat.notify;

            /**
             * Creates a plain object from a notify message. Also converts values to other types if specified.
             * @param message notify
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.notify, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace dungeon. */
    namespace dungeon {

        /** Properties of a Dungeon. */
        interface IDungeon {

            /** Dungeon id */
            id?: (number|null);

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

            /** Dungeon id. */
            public id: number;

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

        /** Properties of a c2s_challenge. */
        interface Ic2s_challenge {

            /** c2s_challenge dungeonId */
            dungeonId?: (number|null);
        }

        /** Represents a c2s_challenge. */
        class c2s_challenge implements Ic2s_challenge {

            /**
             * Constructs a new c2s_challenge.
             * @param [properties] Properties to set
             */
            constructor(properties?: dungeon.Ic2s_challenge);

            /** c2s_challenge dungeonId. */
            public dungeonId: number;

            /**
             * Creates a new c2s_challenge instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_challenge instance
             */
            public static create(properties?: dungeon.Ic2s_challenge): dungeon.c2s_challenge;

            /**
             * Encodes the specified c2s_challenge message. Does not implicitly {@link dungeon.c2s_challenge.verify|verify} messages.
             * @param message c2s_challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dungeon.Ic2s_challenge, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_challenge message, length delimited. Does not implicitly {@link dungeon.c2s_challenge.verify|verify} messages.
             * @param message c2s_challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dungeon.Ic2s_challenge, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_challenge message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dungeon.c2s_challenge;

            /**
             * Decodes a c2s_challenge message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dungeon.c2s_challenge;

            /**
             * Verifies a c2s_challenge message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_challenge message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_challenge
             */
            public static fromObject(object: { [k: string]: any }): dungeon.c2s_challenge;

            /**
             * Creates a plain object from a c2s_challenge message. Also converts values to other types if specified.
             * @param message c2s_challenge
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dungeon.c2s_challenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_challenge to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_challenge
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_challenge. */
        interface Is2c_challenge {

            /** s2c_challenge err */
            err?: (number|null);

            /** s2c_challenge worldUid */
            worldUid?: (number|null);
        }

        /** Represents a s2c_challenge. */
        class s2c_challenge implements Is2c_challenge {

            /**
             * Constructs a new s2c_challenge.
             * @param [properties] Properties to set
             */
            constructor(properties?: dungeon.Is2c_challenge);

            /** s2c_challenge err. */
            public err: number;

            /** s2c_challenge worldUid. */
            public worldUid: number;

            /**
             * Creates a new s2c_challenge instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_challenge instance
             */
            public static create(properties?: dungeon.Is2c_challenge): dungeon.s2c_challenge;

            /**
             * Encodes the specified s2c_challenge message. Does not implicitly {@link dungeon.s2c_challenge.verify|verify} messages.
             * @param message s2c_challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dungeon.Is2c_challenge, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_challenge message, length delimited. Does not implicitly {@link dungeon.s2c_challenge.verify|verify} messages.
             * @param message s2c_challenge message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dungeon.Is2c_challenge, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_challenge message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dungeon.s2c_challenge;

            /**
             * Decodes a s2c_challenge message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_challenge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dungeon.s2c_challenge;

            /**
             * Verifies a s2c_challenge message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_challenge message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_challenge
             */
            public static fromObject(object: { [k: string]: any }): dungeon.s2c_challenge;

            /**
             * Creates a plain object from a s2c_challenge message. Also converts values to other types if specified.
             * @param message s2c_challenge
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dungeon.s2c_challenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_challenge to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_challenge
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace hero. */
    namespace hero {

        /** Properties of a Hero. */
        interface IHero {

            /** Hero uid */
            uid?: (number|null);

            /** Hero id */
            id?: (number|null);

            /** Hero soldierId */
            soldierId?: (number|null);

            /** Hero soldierAmount */
            soldierAmount?: (number|null);

            /** Hero hp */
            hp?: (number|null);

            /** Hero attrs */
            attrs?: ({ [k: string]: number }|null);
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

            /** Hero soldierId. */
            public soldierId: number;

            /** Hero soldierAmount. */
            public soldierAmount: number;

            /** Hero hp. */
            public hp: number;

            /** Hero attrs. */
            public attrs: { [k: string]: number };

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
    namespace mail {

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

            /** MailInfo expiredSec */
            expiredSec?: (number|null);
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

            /** MailInfo expiredSec. */
            public expiredSec: number;

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

        /** Properties of a c2s_receive_all. */
        interface Ic2s_receive_all {
        }

        /** Represents a c2s_receive_all. */
        class c2s_receive_all implements Ic2s_receive_all {

            /**
             * Constructs a new c2s_receive_all.
             * @param [properties] Properties to set
             */
            constructor(properties?: mail.Ic2s_receive_all);

            /**
             * Creates a new c2s_receive_all instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_receive_all instance
             */
            public static create(properties?: mail.Ic2s_receive_all): mail.c2s_receive_all;

            /**
             * Encodes the specified c2s_receive_all message. Does not implicitly {@link mail.c2s_receive_all.verify|verify} messages.
             * @param message c2s_receive_all message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mail.Ic2s_receive_all, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_receive_all message, length delimited. Does not implicitly {@link mail.c2s_receive_all.verify|verify} messages.
             * @param message c2s_receive_all message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mail.Ic2s_receive_all, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_receive_all message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_receive_all
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.c2s_receive_all;

            /**
             * Decodes a c2s_receive_all message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_receive_all
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.c2s_receive_all;

            /**
             * Verifies a c2s_receive_all message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_receive_all message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_receive_all
             */
            public static fromObject(object: { [k: string]: any }): mail.c2s_receive_all;

            /**
             * Creates a plain object from a c2s_receive_all message. Also converts values to other types if specified.
             * @param message c2s_receive_all
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mail.c2s_receive_all, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_receive_all to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_receive_all
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_receive_all. */
        interface Is2c_receive_all {

            /** s2c_receive_all err */
            err?: (number|null);
        }

        /** Represents a s2c_receive_all. */
        class s2c_receive_all implements Is2c_receive_all {

            /**
             * Constructs a new s2c_receive_all.
             * @param [properties] Properties to set
             */
            constructor(properties?: mail.Is2c_receive_all);

            /** s2c_receive_all err. */
            public err: number;

            /**
             * Creates a new s2c_receive_all instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_receive_all instance
             */
            public static create(properties?: mail.Is2c_receive_all): mail.s2c_receive_all;

            /**
             * Encodes the specified s2c_receive_all message. Does not implicitly {@link mail.s2c_receive_all.verify|verify} messages.
             * @param message s2c_receive_all message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mail.Is2c_receive_all, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_receive_all message, length delimited. Does not implicitly {@link mail.s2c_receive_all.verify|verify} messages.
             * @param message s2c_receive_all message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mail.Is2c_receive_all, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_receive_all message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_receive_all
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mail.s2c_receive_all;

            /**
             * Decodes a s2c_receive_all message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_receive_all
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mail.s2c_receive_all;

            /**
             * Verifies a s2c_receive_all message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_receive_all message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_receive_all
             */
            public static fromObject(object: { [k: string]: any }): mail.s2c_receive_all;

            /**
             * Creates a plain object from a s2c_receive_all message. Also converts values to other types if specified.
             * @param message s2c_receive_all
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mail.s2c_receive_all, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_receive_all to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_receive_all
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
    namespace money {

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
    namespace profile {

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

            /** ProfileInfo headImgId */
            headImgId?: (number|null);
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

            /** ProfileInfo headImgId. */
            public headImgId: number;

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

        /** Properties of a c2s_create_role. */
        interface Ic2s_create_role {

            /** c2s_create_role name */
            name?: (string|null);

            /** c2s_create_role gender */
            gender?: (number|null);
        }

        /** Represents a c2s_create_role. */
        class c2s_create_role implements Ic2s_create_role {

            /**
             * Constructs a new c2s_create_role.
             * @param [properties] Properties to set
             */
            constructor(properties?: profile.Ic2s_create_role);

            /** c2s_create_role name. */
            public name: string;

            /** c2s_create_role gender. */
            public gender: number;

            /**
             * Creates a new c2s_create_role instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_create_role instance
             */
            public static create(properties?: profile.Ic2s_create_role): profile.c2s_create_role;

            /**
             * Encodes the specified c2s_create_role message. Does not implicitly {@link profile.c2s_create_role.verify|verify} messages.
             * @param message c2s_create_role message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: profile.Ic2s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_create_role message, length delimited. Does not implicitly {@link profile.c2s_create_role.verify|verify} messages.
             * @param message c2s_create_role message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: profile.Ic2s_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_create_role message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_create_role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.c2s_create_role;

            /**
             * Decodes a c2s_create_role message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_create_role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.c2s_create_role;

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
            public static fromObject(object: { [k: string]: any }): profile.c2s_create_role;

            /**
             * Creates a plain object from a c2s_create_role message. Also converts values to other types if specified.
             * @param message c2s_create_role
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: profile.c2s_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** s2c_create_role profile */
            profile?: (profile.IProfileInfo|null);
        }

        /** Represents a s2c_create_role. */
        class s2c_create_role implements Is2c_create_role {

            /**
             * Constructs a new s2c_create_role.
             * @param [properties] Properties to set
             */
            constructor(properties?: profile.Is2c_create_role);

            /** s2c_create_role err. */
            public err: number;

            /** s2c_create_role profile. */
            public profile?: (profile.IProfileInfo|null);

            /**
             * Creates a new s2c_create_role instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_create_role instance
             */
            public static create(properties?: profile.Is2c_create_role): profile.s2c_create_role;

            /**
             * Encodes the specified s2c_create_role message. Does not implicitly {@link profile.s2c_create_role.verify|verify} messages.
             * @param message s2c_create_role message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: profile.Is2c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_create_role message, length delimited. Does not implicitly {@link profile.s2c_create_role.verify|verify} messages.
             * @param message s2c_create_role message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: profile.Is2c_create_role, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_create_role message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_create_role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): profile.s2c_create_role;

            /**
             * Decodes a s2c_create_role message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_create_role
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): profile.s2c_create_role;

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
            public static fromObject(object: { [k: string]: any }): profile.s2c_create_role;

            /**
             * Creates a plain object from a s2c_create_role message. Also converts values to other types if specified.
             * @param message s2c_create_role
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: profile.s2c_create_role, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Namespace shop. */
    namespace shop {

        /** Properties of an ItemInfo. */
        interface IItemInfo {

            /** ItemInfo id */
            id?: (number|null);

            /** ItemInfo buyNum */
            buyNum?: (number|null);
        }

        /** Represents an ItemInfo. */
        class ItemInfo implements IItemInfo {

            /**
             * Constructs a new ItemInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: shop.IItemInfo);

            /** ItemInfo id. */
            public id: number;

            /** ItemInfo buyNum. */
            public buyNum: number;

            /**
             * Creates a new ItemInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ItemInfo instance
             */
            public static create(properties?: shop.IItemInfo): shop.ItemInfo;

            /**
             * Encodes the specified ItemInfo message. Does not implicitly {@link shop.ItemInfo.verify|verify} messages.
             * @param message ItemInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: shop.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link shop.ItemInfo.verify|verify} messages.
             * @param message ItemInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: shop.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ItemInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.ItemInfo;

            /**
             * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ItemInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.ItemInfo;

            /**
             * Verifies an ItemInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ItemInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ItemInfo
             */
            public static fromObject(object: { [k: string]: any }): shop.ItemInfo;

            /**
             * Creates a plain object from an ItemInfo message. Also converts values to other types if specified.
             * @param message ItemInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: shop.ItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ItemInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ItemInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load. */
        interface Ic2s_load {

            /** c2s_load shopId */
            shopId?: (number|null);
        }

        /** Represents a c2s_load. */
        class c2s_load implements Ic2s_load {

            /**
             * Constructs a new c2s_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: shop.Ic2s_load);

            /** c2s_load shopId. */
            public shopId: number;

            /**
             * Creates a new c2s_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load instance
             */
            public static create(properties?: shop.Ic2s_load): shop.c2s_load;

            /**
             * Encodes the specified c2s_load message. Does not implicitly {@link shop.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: shop.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link shop.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: shop.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.c2s_load;

            /**
             * Decodes a c2s_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.c2s_load;

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
            public static fromObject(object: { [k: string]: any }): shop.c2s_load;

            /**
             * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
             * @param message c2s_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: shop.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            items?: (shop.IItemInfo[]|null);

            /** s2c_load time */
            time?: (number|null);
        }

        /** Represents a s2c_load. */
        class s2c_load implements Is2c_load {

            /**
             * Constructs a new s2c_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: shop.Is2c_load);

            /** s2c_load err. */
            public err: number;

            /** s2c_load items. */
            public items: shop.IItemInfo[];

            /** s2c_load time. */
            public time: number;

            /**
             * Creates a new s2c_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load instance
             */
            public static create(properties?: shop.Is2c_load): shop.s2c_load;

            /**
             * Encodes the specified s2c_load message. Does not implicitly {@link shop.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: shop.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link shop.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: shop.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.s2c_load;

            /**
             * Decodes a s2c_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.s2c_load;

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
            public static fromObject(object: { [k: string]: any }): shop.s2c_load;

            /**
             * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
             * @param message s2c_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: shop.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a c2s_buy. */
        interface Ic2s_buy {

            /** c2s_buy shopId */
            shopId?: (number|null);

            /** c2s_buy shopItemId */
            shopItemId?: (number|null);

            /** c2s_buy num */
            num?: (number|null);
        }

        /** Represents a c2s_buy. */
        class c2s_buy implements Ic2s_buy {

            /**
             * Constructs a new c2s_buy.
             * @param [properties] Properties to set
             */
            constructor(properties?: shop.Ic2s_buy);

            /** c2s_buy shopId. */
            public shopId: number;

            /** c2s_buy shopItemId. */
            public shopItemId: number;

            /** c2s_buy num. */
            public num: number;

            /**
             * Creates a new c2s_buy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_buy instance
             */
            public static create(properties?: shop.Ic2s_buy): shop.c2s_buy;

            /**
             * Encodes the specified c2s_buy message. Does not implicitly {@link shop.c2s_buy.verify|verify} messages.
             * @param message c2s_buy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: shop.Ic2s_buy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_buy message, length delimited. Does not implicitly {@link shop.c2s_buy.verify|verify} messages.
             * @param message c2s_buy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: shop.Ic2s_buy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_buy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_buy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.c2s_buy;

            /**
             * Decodes a c2s_buy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_buy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.c2s_buy;

            /**
             * Verifies a c2s_buy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_buy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_buy
             */
            public static fromObject(object: { [k: string]: any }): shop.c2s_buy;

            /**
             * Creates a plain object from a c2s_buy message. Also converts values to other types if specified.
             * @param message c2s_buy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: shop.c2s_buy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_buy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_buy
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_buy. */
        interface Is2c_buy {

            /** s2c_buy err */
            err?: (number|null);
        }

        /** Represents a s2c_buy. */
        class s2c_buy implements Is2c_buy {

            /**
             * Constructs a new s2c_buy.
             * @param [properties] Properties to set
             */
            constructor(properties?: shop.Is2c_buy);

            /** s2c_buy err. */
            public err: number;

            /**
             * Creates a new s2c_buy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_buy instance
             */
            public static create(properties?: shop.Is2c_buy): shop.s2c_buy;

            /**
             * Encodes the specified s2c_buy message. Does not implicitly {@link shop.s2c_buy.verify|verify} messages.
             * @param message s2c_buy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: shop.Is2c_buy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_buy message, length delimited. Does not implicitly {@link shop.s2c_buy.verify|verify} messages.
             * @param message s2c_buy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: shop.Is2c_buy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_buy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_buy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shop.s2c_buy;

            /**
             * Decodes a s2c_buy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_buy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shop.s2c_buy;

            /**
             * Verifies a s2c_buy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_buy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_buy
             */
            public static fromObject(object: { [k: string]: any }): shop.s2c_buy;

            /**
             * Creates a plain object from a s2c_buy message. Also converts values to other types if specified.
             * @param message s2c_buy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: shop.s2c_buy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_buy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_buy
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace task. */
    namespace task {

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

    /** Namespace troop. */
    namespace troop {

        /** Properties of a Troop. */
        interface ITroop {

            /** Troop idx */
            idx?: (number|null);

            /** Troop eid */
            eid?: (number|null);

            /** Troop heroUid */
            heroUid?: (number|null);
        }

        /** Represents a Troop. */
        class Troop implements ITroop {

            /**
             * Constructs a new Troop.
             * @param [properties] Properties to set
             */
            constructor(properties?: troop.ITroop);

            /** Troop idx. */
            public idx: number;

            /** Troop eid. */
            public eid: number;

            /** Troop heroUid. */
            public heroUid: number;

            /**
             * Creates a new Troop instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Troop instance
             */
            public static create(properties?: troop.ITroop): troop.Troop;

            /**
             * Encodes the specified Troop message. Does not implicitly {@link troop.Troop.verify|verify} messages.
             * @param message Troop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: troop.ITroop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Troop message, length delimited. Does not implicitly {@link troop.Troop.verify|verify} messages.
             * @param message Troop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: troop.ITroop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Troop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Troop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): troop.Troop;

            /**
             * Decodes a Troop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Troop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): troop.Troop;

            /**
             * Verifies a Troop message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Troop message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Troop
             */
            public static fromObject(object: { [k: string]: any }): troop.Troop;

            /**
             * Creates a plain object from a Troop message. Also converts values to other types if specified.
             * @param message Troop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: troop.Troop, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Troop to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Troop
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
            constructor(properties?: troop.Ic2s_load);

            /**
             * Creates a new c2s_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load instance
             */
            public static create(properties?: troop.Ic2s_load): troop.c2s_load;

            /**
             * Encodes the specified c2s_load message. Does not implicitly {@link troop.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: troop.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load message, length delimited. Does not implicitly {@link troop.c2s_load.verify|verify} messages.
             * @param message c2s_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: troop.Ic2s_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): troop.c2s_load;

            /**
             * Decodes a c2s_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): troop.c2s_load;

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
            public static fromObject(object: { [k: string]: any }): troop.c2s_load;

            /**
             * Creates a plain object from a c2s_load message. Also converts values to other types if specified.
             * @param message c2s_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: troop.c2s_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** s2c_load troopList */
            troopList?: (troop.ITroop[]|null);
        }

        /** Represents a s2c_load. */
        class s2c_load implements Is2c_load {

            /**
             * Constructs a new s2c_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: troop.Is2c_load);

            /** s2c_load err. */
            public err: number;

            /** s2c_load troopList. */
            public troopList: troop.ITroop[];

            /**
             * Creates a new s2c_load instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load instance
             */
            public static create(properties?: troop.Is2c_load): troop.s2c_load;

            /**
             * Encodes the specified s2c_load message. Does not implicitly {@link troop.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: troop.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load message, length delimited. Does not implicitly {@link troop.s2c_load.verify|verify} messages.
             * @param message s2c_load message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: troop.Is2c_load, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): troop.s2c_load;

            /**
             * Decodes a s2c_load message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): troop.s2c_load;

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
            public static fromObject(object: { [k: string]: any }): troop.s2c_load;

            /**
             * Creates a plain object from a s2c_load message. Also converts values to other types if specified.
             * @param message s2c_load
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: troop.s2c_load, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    namespace user {

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
            rid?: (number|null);
        }

        /** Represents a RoleInfo. */
        class RoleInfo implements IRoleInfo {

            /**
             * Constructs a new RoleInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: user.IRoleInfo);

            /** RoleInfo rid. */
            public rid: number;

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

    /** Namespace world. */
    namespace world {

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

        /** Properties of a Position. */
        interface IPosition {

            /** Position x */
            x?: (number|null);

            /** Position y */
            y?: (number|null);
        }

        /** Represents a Position. */
        class Position implements IPosition {

            /**
             * Constructs a new Position.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IPosition);

            /** Position x. */
            public x: number;

            /** Position y. */
            public y: number;

            /**
             * Creates a new Position instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Position instance
             */
            public static create(properties?: world.IPosition): world.Position;

            /**
             * Encodes the specified Position message. Does not implicitly {@link world.Position.verify|verify} messages.
             * @param message Position message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Position message, length delimited. Does not implicitly {@link world.Position.verify|verify} messages.
             * @param message Position message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Position message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.Position;

            /**
             * Decodes a Position message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.Position;

            /**
             * Verifies a Position message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Position message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Position
             */
            public static fromObject(object: { [k: string]: any }): world.Position;

            /**
             * Creates a plain object from a Position message. Also converts values to other types if specified.
             * @param message Position
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Position to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Position
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

        /** Properties of a TroopComponent. */
        interface ITroopComponent {

            /** TroopComponent heroId */
            heroId?: (number|null);

            /** TroopComponent soldierId */
            soldierId?: (number|null);

            /** TroopComponent cmd */
            cmd?: (number|null);

            /** TroopComponent stayEid */
            stayEid?: (number|null);

            /** TroopComponent homeEid */
            homeEid?: (number|null);

            /** TroopComponent battleEid */
            battleEid?: (number|null);

            /** TroopComponent maxHp */
            maxHp?: (number|null);

            /** TroopComponent hp */
            hp?: (number|null);
        }

        /** Represents a TroopComponent. */
        class TroopComponent implements ITroopComponent {

            /**
             * Constructs a new TroopComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.ITroopComponent);

            /** TroopComponent heroId. */
            public heroId: number;

            /** TroopComponent soldierId. */
            public soldierId: number;

            /** TroopComponent cmd. */
            public cmd: number;

            /** TroopComponent stayEid. */
            public stayEid: number;

            /** TroopComponent homeEid. */
            public homeEid: number;

            /** TroopComponent battleEid. */
            public battleEid: number;

            /** TroopComponent maxHp. */
            public maxHp: number;

            /** TroopComponent hp. */
            public hp: number;

            /**
             * Creates a new TroopComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TroopComponent instance
             */
            public static create(properties?: world.ITroopComponent): world.TroopComponent;

            /**
             * Encodes the specified TroopComponent message. Does not implicitly {@link world.TroopComponent.verify|verify} messages.
             * @param message TroopComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.ITroopComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TroopComponent message, length delimited. Does not implicitly {@link world.TroopComponent.verify|verify} messages.
             * @param message TroopComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.ITroopComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TroopComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TroopComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.TroopComponent;

            /**
             * Decodes a TroopComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TroopComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.TroopComponent;

            /**
             * Verifies a TroopComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TroopComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TroopComponent
             */
            public static fromObject(object: { [k: string]: any }): world.TroopComponent;

            /**
             * Creates a plain object from a TroopComponent message. Also converts values to other types if specified.
             * @param message TroopComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.TroopComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TroopComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TroopComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OwnerComponent. */
        interface IOwnerComponent {

            /** OwnerComponent rid */
            rid?: (number|null);

            /** OwnerComponent aid */
            aid?: (number|null);

            /** OwnerComponent eid */
            eid?: (number|null);

            /** OwnerComponent isRobot */
            isRobot?: (boolean|null);

            /** OwnerComponent roleName */
            roleName?: (string|null);

            /** OwnerComponent allianceName */
            allianceName?: (string|null);
        }

        /** Represents an OwnerComponent. */
        class OwnerComponent implements IOwnerComponent {

            /**
             * Constructs a new OwnerComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IOwnerComponent);

            /** OwnerComponent rid. */
            public rid: number;

            /** OwnerComponent aid. */
            public aid: number;

            /** OwnerComponent eid. */
            public eid: number;

            /** OwnerComponent isRobot. */
            public isRobot: boolean;

            /** OwnerComponent roleName. */
            public roleName: string;

            /** OwnerComponent allianceName. */
            public allianceName: string;

            /**
             * Creates a new OwnerComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OwnerComponent instance
             */
            public static create(properties?: world.IOwnerComponent): world.OwnerComponent;

            /**
             * Encodes the specified OwnerComponent message. Does not implicitly {@link world.OwnerComponent.verify|verify} messages.
             * @param message OwnerComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IOwnerComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OwnerComponent message, length delimited. Does not implicitly {@link world.OwnerComponent.verify|verify} messages.
             * @param message OwnerComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IOwnerComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OwnerComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OwnerComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.OwnerComponent;

            /**
             * Decodes an OwnerComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OwnerComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.OwnerComponent;

            /**
             * Verifies an OwnerComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OwnerComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OwnerComponent
             */
            public static fromObject(object: { [k: string]: any }): world.OwnerComponent;

            /**
             * Creates a plain object from an OwnerComponent message. Also converts values to other types if specified.
             * @param message OwnerComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.OwnerComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OwnerComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OwnerComponent
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

        /** Properties of a TimerComponent. */
        interface ITimerComponent {

            /** TimerComponent timers */
            timers?: ({ [k: string]: world.ITimer }|null);
        }

        /** Represents a TimerComponent. */
        class TimerComponent implements ITimerComponent {

            /**
             * Constructs a new TimerComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.ITimerComponent);

            /** TimerComponent timers. */
            public timers: { [k: string]: world.ITimer };

            /**
             * Creates a new TimerComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimerComponent instance
             */
            public static create(properties?: world.ITimerComponent): world.TimerComponent;

            /**
             * Encodes the specified TimerComponent message. Does not implicitly {@link world.TimerComponent.verify|verify} messages.
             * @param message TimerComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.ITimerComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimerComponent message, length delimited. Does not implicitly {@link world.TimerComponent.verify|verify} messages.
             * @param message TimerComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.ITimerComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimerComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimerComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.TimerComponent;

            /**
             * Decodes a TimerComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimerComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.TimerComponent;

            /**
             * Verifies a TimerComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimerComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimerComponent
             */
            public static fromObject(object: { [k: string]: any }): world.TimerComponent;

            /**
             * Creates a plain object from a TimerComponent message. Also converts values to other types if specified.
             * @param message TimerComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.TimerComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimerComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimerComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MoveComponent. */
        interface IMoveComponent {

            /** MoveComponent startMs */
            startMs?: (number|null);

            /** MoveComponent path */
            path?: (number[]|null);

            /** MoveComponent speed */
            speed?: (number|null);

            /** MoveComponent degree */
            degree?: (number|null);
        }

        /** Represents a MoveComponent. */
        class MoveComponent implements IMoveComponent {

            /**
             * Constructs a new MoveComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IMoveComponent);

            /** MoveComponent startMs. */
            public startMs: number;

            /** MoveComponent path. */
            public path: number[];

            /** MoveComponent speed. */
            public speed: number;

            /** MoveComponent degree. */
            public degree: number;

            /**
             * Creates a new MoveComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveComponent instance
             */
            public static create(properties?: world.IMoveComponent): world.MoveComponent;

            /**
             * Encodes the specified MoveComponent message. Does not implicitly {@link world.MoveComponent.verify|verify} messages.
             * @param message MoveComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IMoveComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveComponent message, length delimited. Does not implicitly {@link world.MoveComponent.verify|verify} messages.
             * @param message MoveComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IMoveComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MoveComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.MoveComponent;

            /**
             * Decodes a MoveComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MoveComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.MoveComponent;

            /**
             * Verifies a MoveComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveComponent
             */
            public static fromObject(object: { [k: string]: any }): world.MoveComponent;

            /**
             * Creates a plain object from a MoveComponent message. Also converts values to other types if specified.
             * @param message MoveComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.MoveComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MoveComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BuildingComponent. */
        interface IBuildingComponent {

            /** BuildingComponent bid */
            bid?: (number|null);

            /** BuildingComponent hp */
            hp?: (number|null);

            /** BuildingComponent maxHp */
            maxHp?: (number|null);

            /** BuildingComponent autoHpMs */
            autoHpMs?: (number|null);

            /** BuildingComponent autoHp */
            autoHp?: (number|null);

            /** BuildingComponent autoHpInr */
            autoHpInr?: (number|null);

            /** BuildingComponent name */
            name?: (string|null);
        }

        /** Represents a BuildingComponent. */
        class BuildingComponent implements IBuildingComponent {

            /**
             * Constructs a new BuildingComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBuildingComponent);

            /** BuildingComponent bid. */
            public bid: number;

            /** BuildingComponent hp. */
            public hp: number;

            /** BuildingComponent maxHp. */
            public maxHp: number;

            /** BuildingComponent autoHpMs. */
            public autoHpMs: number;

            /** BuildingComponent autoHp. */
            public autoHp: number;

            /** BuildingComponent autoHpInr. */
            public autoHpInr: number;

            /** BuildingComponent name. */
            public name: string;

            /**
             * Creates a new BuildingComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BuildingComponent instance
             */
            public static create(properties?: world.IBuildingComponent): world.BuildingComponent;

            /**
             * Encodes the specified BuildingComponent message. Does not implicitly {@link world.BuildingComponent.verify|verify} messages.
             * @param message BuildingComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBuildingComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BuildingComponent message, length delimited. Does not implicitly {@link world.BuildingComponent.verify|verify} messages.
             * @param message BuildingComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBuildingComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuildingComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BuildingComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BuildingComponent;

            /**
             * Decodes a BuildingComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BuildingComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BuildingComponent;

            /**
             * Verifies a BuildingComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BuildingComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BuildingComponent
             */
            public static fromObject(object: { [k: string]: any }): world.BuildingComponent;

            /**
             * Creates a plain object from a BuildingComponent message. Also converts values to other types if specified.
             * @param message BuildingComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BuildingComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BuildingComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BuildingComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleComponent. */
        interface IBattleComponent {

            /** BattleComponent battleUid */
            battleUid?: (number|null);

            /** BattleComponent fighterEids */
            fighterEids?: (number[]|null);

            /** BattleComponent startTs */
            startTs?: (number|null);
        }

        /** Represents a BattleComponent. */
        class BattleComponent implements IBattleComponent {

            /**
             * Constructs a new BattleComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleComponent);

            /** BattleComponent battleUid. */
            public battleUid: number;

            /** BattleComponent fighterEids. */
            public fighterEids: number[];

            /** BattleComponent startTs. */
            public startTs: number;

            /**
             * Creates a new BattleComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleComponent instance
             */
            public static create(properties?: world.IBattleComponent): world.BattleComponent;

            /**
             * Encodes the specified BattleComponent message. Does not implicitly {@link world.BattleComponent.verify|verify} messages.
             * @param message BattleComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleComponent message, length delimited. Does not implicitly {@link world.BattleComponent.verify|verify} messages.
             * @param message BattleComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleComponent;

            /**
             * Decodes a BattleComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleComponent;

            /**
             * Verifies a BattleComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleComponent
             */
            public static fromObject(object: { [k: string]: any }): world.BattleComponent;

            /**
             * Creates a plain object from a BattleComponent message. Also converts values to other types if specified.
             * @param message BattleComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BagItem. */
        interface IBagItem {

            /** BagItem id */
            id?: (number|null);

            /** BagItem num */
            num?: (number|null);
        }

        /** Represents a BagItem. */
        class BagItem implements IBagItem {

            /**
             * Constructs a new BagItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBagItem);

            /** BagItem id. */
            public id: number;

            /** BagItem num. */
            public num: number;

            /**
             * Creates a new BagItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BagItem instance
             */
            public static create(properties?: world.IBagItem): world.BagItem;

            /**
             * Encodes the specified BagItem message. Does not implicitly {@link world.BagItem.verify|verify} messages.
             * @param message BagItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BagItem message, length delimited. Does not implicitly {@link world.BagItem.verify|verify} messages.
             * @param message BagItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBagItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BagItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BagItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BagItem;

            /**
             * Decodes a BagItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BagItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BagItem;

            /**
             * Verifies a BagItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BagItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BagItem
             */
            public static fromObject(object: { [k: string]: any }): world.BagItem;

            /**
             * Creates a plain object from a BagItem message. Also converts values to other types if specified.
             * @param message BagItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BagItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BagItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BagItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BagComponent. */
        interface IBagComponent {

            /** BagComponent items */
            items?: (world.IBagItem[]|null);
        }

        /** Represents a BagComponent. */
        class BagComponent implements IBagComponent {

            /**
             * Constructs a new BagComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBagComponent);

            /** BagComponent items. */
            public items: world.IBagItem[];

            /**
             * Creates a new BagComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BagComponent instance
             */
            public static create(properties?: world.IBagComponent): world.BagComponent;

            /**
             * Encodes the specified BagComponent message. Does not implicitly {@link world.BagComponent.verify|verify} messages.
             * @param message BagComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBagComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BagComponent message, length delimited. Does not implicitly {@link world.BagComponent.verify|verify} messages.
             * @param message BagComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBagComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BagComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BagComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BagComponent;

            /**
             * Decodes a BagComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BagComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BagComponent;

            /**
             * Verifies a BagComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BagComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BagComponent
             */
            public static fromObject(object: { [k: string]: any }): world.BagComponent;

            /**
             * Creates a plain object from a BagComponent message. Also converts values to other types if specified.
             * @param message BagComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BagComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BagComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BagComponent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ItemComponent. */
        interface IItemComponent {

            /** ItemComponent id */
            id?: (number|null);

            /** ItemComponent num */
            num?: (number|null);
        }

        /** Represents an ItemComponent. */
        class ItemComponent implements IItemComponent {

            /**
             * Constructs a new ItemComponent.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IItemComponent);

            /** ItemComponent id. */
            public id: number;

            /** ItemComponent num. */
            public num: number;

            /**
             * Creates a new ItemComponent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ItemComponent instance
             */
            public static create(properties?: world.IItemComponent): world.ItemComponent;

            /**
             * Encodes the specified ItemComponent message. Does not implicitly {@link world.ItemComponent.verify|verify} messages.
             * @param message ItemComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IItemComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ItemComponent message, length delimited. Does not implicitly {@link world.ItemComponent.verify|verify} messages.
             * @param message ItemComponent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IItemComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ItemComponent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ItemComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.ItemComponent;

            /**
             * Decodes an ItemComponent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ItemComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.ItemComponent;

            /**
             * Verifies an ItemComponent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ItemComponent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ItemComponent
             */
            public static fromObject(object: { [k: string]: any }): world.ItemComponent;

            /**
             * Creates a plain object from an ItemComponent message. Also converts values to other types if specified.
             * @param message ItemComponent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.ItemComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ItemComponent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ItemComponent
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
            pos?: (world.IPosition|null);

            /** Entity state */
            state?: (number|null);

            /** Entity timer */
            timer?: (world.ITimerComponent|null);

            /** Entity move */
            move?: (world.IMoveComponent|null);

            /** Entity building */
            building?: (world.IBuildingComponent|null);

            /** Entity owner */
            owner?: (world.IOwnerComponent|null);

            /** Entity troop */
            troop?: (world.ITroopComponent|null);

            /** Entity battle */
            battle?: (world.IBattleComponent|null);

            /** Entity bag */
            bag?: (world.IBagComponent|null);

            /** Entity item */
            item?: (world.IItemComponent|null);
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
            public pos?: (world.IPosition|null);

            /** Entity state. */
            public state: number;

            /** Entity timer. */
            public timer?: (world.ITimerComponent|null);

            /** Entity move. */
            public move?: (world.IMoveComponent|null);

            /** Entity building. */
            public building?: (world.IBuildingComponent|null);

            /** Entity owner. */
            public owner?: (world.IOwnerComponent|null);

            /** Entity troop. */
            public troop?: (world.ITroopComponent|null);

            /** Entity battle. */
            public battle?: (world.IBattleComponent|null);

            /** Entity bag. */
            public bag?: (world.IBagComponent|null);

            /** Entity item. */
            public item?: (world.IItemComponent|null);

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

        /** Properties of a c2s_load_sand. */
        interface Ic2s_load_sand {
        }

        /** Represents a c2s_load_sand. */
        class c2s_load_sand implements Ic2s_load_sand {

            /**
             * Constructs a new c2s_load_sand.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_load_sand);

            /**
             * Creates a new c2s_load_sand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load_sand instance
             */
            public static create(properties?: world.Ic2s_load_sand): world.c2s_load_sand;

            /**
             * Encodes the specified c2s_load_sand message. Does not implicitly {@link world.c2s_load_sand.verify|verify} messages.
             * @param message c2s_load_sand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Ic2s_load_sand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load_sand message, length delimited. Does not implicitly {@link world.c2s_load_sand.verify|verify} messages.
             * @param message c2s_load_sand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Ic2s_load_sand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load_sand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load_sand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_load_sand;

            /**
             * Decodes a c2s_load_sand message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load_sand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_load_sand;

            /**
             * Verifies a c2s_load_sand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_load_sand message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_load_sand
             */
            public static fromObject(object: { [k: string]: any }): world.c2s_load_sand;

            /**
             * Creates a plain object from a c2s_load_sand message. Also converts values to other types if specified.
             * @param message c2s_load_sand
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.c2s_load_sand, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_load_sand to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_load_sand
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_load_sand. */
        interface Is2c_load_sand {

            /** s2c_load_sand err */
            err?: (number|null);

            /** s2c_load_sand worldUid */
            worldUid?: (number|null);
        }

        /** Represents a s2c_load_sand. */
        class s2c_load_sand implements Is2c_load_sand {

            /**
             * Constructs a new s2c_load_sand.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Is2c_load_sand);

            /** s2c_load_sand err. */
            public err: number;

            /** s2c_load_sand worldUid. */
            public worldUid: number;

            /**
             * Creates a new s2c_load_sand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load_sand instance
             */
            public static create(properties?: world.Is2c_load_sand): world.s2c_load_sand;

            /**
             * Encodes the specified s2c_load_sand message. Does not implicitly {@link world.s2c_load_sand.verify|verify} messages.
             * @param message s2c_load_sand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Is2c_load_sand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load_sand message, length delimited. Does not implicitly {@link world.s2c_load_sand.verify|verify} messages.
             * @param message s2c_load_sand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Is2c_load_sand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load_sand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load_sand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_load_sand;

            /**
             * Decodes a s2c_load_sand message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load_sand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_load_sand;

            /**
             * Verifies a s2c_load_sand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_load_sand message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_load_sand
             */
            public static fromObject(object: { [k: string]: any }): world.s2c_load_sand;

            /**
             * Creates a plain object from a s2c_load_sand message. Also converts values to other types if specified.
             * @param message s2c_load_sand
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.s2c_load_sand, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_load_sand to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_load_sand
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load. */
        interface Ic2s_load {

            /** c2s_load worldUid */
            worldUid?: (number|null);
        }

        /** Represents a c2s_load. */
        class c2s_load implements Ic2s_load {

            /**
             * Constructs a new c2s_load.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_load);

            /** c2s_load worldUid. */
            public worldUid: number;

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

            /** s2c_load mapId */
            mapId?: (number|null);

            /** s2c_load myCastleEid */
            myCastleEid?: (number|null);

            /** s2c_load myCastlePos */
            myCastlePos?: (world.IPosition|null);
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

            /** s2c_load mapId. */
            public mapId: number;

            /** s2c_load myCastleEid. */
            public myCastleEid: number;

            /** s2c_load myCastlePos. */
            public myCastlePos?: (world.IPosition|null);

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

            /** c2s_change_viewport worldUid */
            worldUid?: (number|null);

            /** c2s_change_viewport pos */
            pos?: (world.IPosition|null);
        }

        /** Represents a c2s_change_viewport. */
        class c2s_change_viewport implements Ic2s_change_viewport {

            /**
             * Constructs a new c2s_change_viewport.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_change_viewport);

            /** c2s_change_viewport worldUid. */
            public worldUid: number;

            /** c2s_change_viewport pos. */
            public pos?: (world.IPosition|null);

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
            eid?: (number|null);
        }

        /** Represents a c2s_cancel_giveup. */
        class c2s_cancel_giveup implements Ic2s_cancel_giveup {

            /**
             * Constructs a new c2s_cancel_giveup.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_cancel_giveup);

            /** c2s_cancel_giveup eid. */
            public eid: number;

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
            pos?: (world.IPosition|null);
        }

        /** Represents a c2s_load_detect_info. */
        class c2s_load_detect_info implements Ic2s_load_detect_info {

            /**
             * Constructs a new c2s_load_detect_info.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_load_detect_info);

            /** c2s_load_detect_info pos. */
            public pos?: (world.IPosition|null);

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

        /** Properties of a c2s_troop_move_to. */
        interface Ic2s_troop_move_to {

            /** c2s_troop_move_to troopEid */
            troopEid?: (number|null);

            /** c2s_troop_move_to dstPos */
            dstPos?: (world.IPosition|null);
        }

        /** Represents a c2s_troop_move_to. */
        class c2s_troop_move_to implements Ic2s_troop_move_to {

            /**
             * Constructs a new c2s_troop_move_to.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_troop_move_to);

            /** c2s_troop_move_to troopEid. */
            public troopEid: number;

            /** c2s_troop_move_to dstPos. */
            public dstPos?: (world.IPosition|null);

            /**
             * Creates a new c2s_troop_move_to instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_troop_move_to instance
             */
            public static create(properties?: world.Ic2s_troop_move_to): world.c2s_troop_move_to;

            /**
             * Encodes the specified c2s_troop_move_to message. Does not implicitly {@link world.c2s_troop_move_to.verify|verify} messages.
             * @param message c2s_troop_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Ic2s_troop_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_troop_move_to message, length delimited. Does not implicitly {@link world.c2s_troop_move_to.verify|verify} messages.
             * @param message c2s_troop_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Ic2s_troop_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_troop_move_to message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_troop_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_troop_move_to;

            /**
             * Decodes a c2s_troop_move_to message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_troop_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_troop_move_to;

            /**
             * Verifies a c2s_troop_move_to message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_troop_move_to message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_troop_move_to
             */
            public static fromObject(object: { [k: string]: any }): world.c2s_troop_move_to;

            /**
             * Creates a plain object from a c2s_troop_move_to message. Also converts values to other types if specified.
             * @param message c2s_troop_move_to
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.c2s_troop_move_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_troop_move_to to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_troop_move_to
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_troop_move_to. */
        interface Is2c_troop_move_to {

            /** s2c_troop_move_to err */
            err?: (number|null);
        }

        /** Represents a s2c_troop_move_to. */
        class s2c_troop_move_to implements Is2c_troop_move_to {

            /**
             * Constructs a new s2c_troop_move_to.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Is2c_troop_move_to);

            /** s2c_troop_move_to err. */
            public err: number;

            /**
             * Creates a new s2c_troop_move_to instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_troop_move_to instance
             */
            public static create(properties?: world.Is2c_troop_move_to): world.s2c_troop_move_to;

            /**
             * Encodes the specified s2c_troop_move_to message. Does not implicitly {@link world.s2c_troop_move_to.verify|verify} messages.
             * @param message s2c_troop_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Is2c_troop_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_troop_move_to message, length delimited. Does not implicitly {@link world.s2c_troop_move_to.verify|verify} messages.
             * @param message s2c_troop_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Is2c_troop_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_troop_move_to message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_troop_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_troop_move_to;

            /**
             * Decodes a s2c_troop_move_to message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_troop_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_troop_move_to;

            /**
             * Verifies a s2c_troop_move_to message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_troop_move_to message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_troop_move_to
             */
            public static fromObject(object: { [k: string]: any }): world.s2c_troop_move_to;

            /**
             * Creates a plain object from a s2c_troop_move_to message. Also converts values to other types if specified.
             * @param message s2c_troop_move_to
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.s2c_troop_move_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_troop_move_to to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_troop_move_to
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_troop_move_by. */
        interface Ic2s_troop_move_by {

            /** c2s_troop_move_by troopEid */
            troopEid?: (number|null);

            /** c2s_troop_move_by degree */
            degree?: (number|null);
        }

        /** Represents a c2s_troop_move_by. */
        class c2s_troop_move_by implements Ic2s_troop_move_by {

            /**
             * Constructs a new c2s_troop_move_by.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_troop_move_by);

            /** c2s_troop_move_by troopEid. */
            public troopEid: number;

            /** c2s_troop_move_by degree. */
            public degree: number;

            /**
             * Creates a new c2s_troop_move_by instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_troop_move_by instance
             */
            public static create(properties?: world.Ic2s_troop_move_by): world.c2s_troop_move_by;

            /**
             * Encodes the specified c2s_troop_move_by message. Does not implicitly {@link world.c2s_troop_move_by.verify|verify} messages.
             * @param message c2s_troop_move_by message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Ic2s_troop_move_by, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_troop_move_by message, length delimited. Does not implicitly {@link world.c2s_troop_move_by.verify|verify} messages.
             * @param message c2s_troop_move_by message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Ic2s_troop_move_by, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_troop_move_by message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_troop_move_by
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_troop_move_by;

            /**
             * Decodes a c2s_troop_move_by message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_troop_move_by
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_troop_move_by;

            /**
             * Verifies a c2s_troop_move_by message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_troop_move_by message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_troop_move_by
             */
            public static fromObject(object: { [k: string]: any }): world.c2s_troop_move_by;

            /**
             * Creates a plain object from a c2s_troop_move_by message. Also converts values to other types if specified.
             * @param message c2s_troop_move_by
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.c2s_troop_move_by, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_troop_move_by to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_troop_move_by
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_troop_move_by. */
        interface Is2c_troop_move_by {

            /** s2c_troop_move_by err */
            err?: (number|null);
        }

        /** Represents a s2c_troop_move_by. */
        class s2c_troop_move_by implements Is2c_troop_move_by {

            /**
             * Constructs a new s2c_troop_move_by.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Is2c_troop_move_by);

            /** s2c_troop_move_by err. */
            public err: number;

            /**
             * Creates a new s2c_troop_move_by instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_troop_move_by instance
             */
            public static create(properties?: world.Is2c_troop_move_by): world.s2c_troop_move_by;

            /**
             * Encodes the specified s2c_troop_move_by message. Does not implicitly {@link world.s2c_troop_move_by.verify|verify} messages.
             * @param message s2c_troop_move_by message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Is2c_troop_move_by, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_troop_move_by message, length delimited. Does not implicitly {@link world.s2c_troop_move_by.verify|verify} messages.
             * @param message s2c_troop_move_by message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Is2c_troop_move_by, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_troop_move_by message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_troop_move_by
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_troop_move_by;

            /**
             * Decodes a s2c_troop_move_by message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_troop_move_by
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_troop_move_by;

            /**
             * Verifies a s2c_troop_move_by message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_troop_move_by message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_troop_move_by
             */
            public static fromObject(object: { [k: string]: any }): world.s2c_troop_move_by;

            /**
             * Creates a plain object from a s2c_troop_move_by message. Also converts values to other types if specified.
             * @param message s2c_troop_move_by
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.s2c_troop_move_by, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_troop_move_by to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_troop_move_by
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_troop_move_stop. */
        interface Ic2s_troop_move_stop {

            /** c2s_troop_move_stop troopEid */
            troopEid?: (number|null);
        }

        /** Represents a c2s_troop_move_stop. */
        class c2s_troop_move_stop implements Ic2s_troop_move_stop {

            /**
             * Constructs a new c2s_troop_move_stop.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_troop_move_stop);

            /** c2s_troop_move_stop troopEid. */
            public troopEid: number;

            /**
             * Creates a new c2s_troop_move_stop instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_troop_move_stop instance
             */
            public static create(properties?: world.Ic2s_troop_move_stop): world.c2s_troop_move_stop;

            /**
             * Encodes the specified c2s_troop_move_stop message. Does not implicitly {@link world.c2s_troop_move_stop.verify|verify} messages.
             * @param message c2s_troop_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Ic2s_troop_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_troop_move_stop message, length delimited. Does not implicitly {@link world.c2s_troop_move_stop.verify|verify} messages.
             * @param message c2s_troop_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Ic2s_troop_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_troop_move_stop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_troop_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_troop_move_stop;

            /**
             * Decodes a c2s_troop_move_stop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_troop_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_troop_move_stop;

            /**
             * Verifies a c2s_troop_move_stop message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_troop_move_stop message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_troop_move_stop
             */
            public static fromObject(object: { [k: string]: any }): world.c2s_troop_move_stop;

            /**
             * Creates a plain object from a c2s_troop_move_stop message. Also converts values to other types if specified.
             * @param message c2s_troop_move_stop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.c2s_troop_move_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_troop_move_stop to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_troop_move_stop
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_troop_move_stop. */
        interface Is2c_troop_move_stop {

            /** s2c_troop_move_stop err */
            err?: (number|null);
        }

        /** Represents a s2c_troop_move_stop. */
        class s2c_troop_move_stop implements Is2c_troop_move_stop {

            /**
             * Constructs a new s2c_troop_move_stop.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Is2c_troop_move_stop);

            /** s2c_troop_move_stop err. */
            public err: number;

            /**
             * Creates a new s2c_troop_move_stop instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_troop_move_stop instance
             */
            public static create(properties?: world.Is2c_troop_move_stop): world.s2c_troop_move_stop;

            /**
             * Encodes the specified s2c_troop_move_stop message. Does not implicitly {@link world.s2c_troop_move_stop.verify|verify} messages.
             * @param message s2c_troop_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Is2c_troop_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_troop_move_stop message, length delimited. Does not implicitly {@link world.s2c_troop_move_stop.verify|verify} messages.
             * @param message s2c_troop_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Is2c_troop_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_troop_move_stop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_troop_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_troop_move_stop;

            /**
             * Decodes a s2c_troop_move_stop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_troop_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_troop_move_stop;

            /**
             * Verifies a s2c_troop_move_stop message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_troop_move_stop message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_troop_move_stop
             */
            public static fromObject(object: { [k: string]: any }): world.s2c_troop_move_stop;

            /**
             * Creates a plain object from a s2c_troop_move_stop message. Also converts values to other types if specified.
             * @param message s2c_troop_move_stop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.s2c_troop_move_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_troop_move_stop to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_troop_move_stop
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
            eid?: (number|null);
        }

        /** Represents a DelEntityAction. */
        class DelEntityAction implements IDelEntityAction {

            /**
             * Constructs a new DelEntityAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IDelEntityAction);

            /** DelEntityAction eid. */
            public eid: number;

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
            eid?: (number|null);

            /** MoveAction path */
            path?: (number[]|null);

            /** MoveAction speed */
            speed?: (number|null);

            /** MoveAction startMs */
            startMs?: (number|null);

            /** MoveAction curPos */
            curPos?: (world.IPosition|null);

            /** MoveAction degree */
            degree?: (number|null);
        }

        /** Represents a MoveAction. */
        class MoveAction implements IMoveAction {

            /**
             * Constructs a new MoveAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IMoveAction);

            /** MoveAction eid. */
            public eid: number;

            /** MoveAction path. */
            public path: number[];

            /** MoveAction speed. */
            public speed: number;

            /** MoveAction startMs. */
            public startMs: number;

            /** MoveAction curPos. */
            public curPos?: (world.IPosition|null);

            /** MoveAction degree. */
            public degree: number;

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

        /** Properties of a BattleStartAction. */
        interface IBattleStartAction {

            /** BattleStartAction fighterEid */
            fighterEid?: (number|null);

            /** BattleStartAction battleEid */
            battleEid?: (number|null);
        }

        /** Represents a BattleStartAction. */
        class BattleStartAction implements IBattleStartAction {

            /**
             * Constructs a new BattleStartAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleStartAction);

            /** BattleStartAction fighterEid. */
            public fighterEid: number;

            /** BattleStartAction battleEid. */
            public battleEid: number;

            /**
             * Creates a new BattleStartAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleStartAction instance
             */
            public static create(properties?: world.IBattleStartAction): world.BattleStartAction;

            /**
             * Encodes the specified BattleStartAction message. Does not implicitly {@link world.BattleStartAction.verify|verify} messages.
             * @param message BattleStartAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleStartAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleStartAction message, length delimited. Does not implicitly {@link world.BattleStartAction.verify|verify} messages.
             * @param message BattleStartAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleStartAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleStartAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleStartAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleStartAction;

            /**
             * Decodes a BattleStartAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleStartAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleStartAction;

            /**
             * Verifies a BattleStartAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleStartAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleStartAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleStartAction;

            /**
             * Creates a plain object from a BattleStartAction message. Also converts values to other types if specified.
             * @param message BattleStartAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleStartAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleStartAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleStartAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleSkillAction. */
        interface IBattleSkillAction {

            /** BattleSkillAction srcEid */
            srcEid?: (number|null);

            /** BattleSkillAction dstEid */
            dstEid?: (number|null);

            /** BattleSkillAction skillId */
            skillId?: (number|null);
        }

        /** Represents a BattleSkillAction. */
        class BattleSkillAction implements IBattleSkillAction {

            /**
             * Constructs a new BattleSkillAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleSkillAction);

            /** BattleSkillAction srcEid. */
            public srcEid: number;

            /** BattleSkillAction dstEid. */
            public dstEid: number;

            /** BattleSkillAction skillId. */
            public skillId: number;

            /**
             * Creates a new BattleSkillAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleSkillAction instance
             */
            public static create(properties?: world.IBattleSkillAction): world.BattleSkillAction;

            /**
             * Encodes the specified BattleSkillAction message. Does not implicitly {@link world.BattleSkillAction.verify|verify} messages.
             * @param message BattleSkillAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleSkillAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleSkillAction message, length delimited. Does not implicitly {@link world.BattleSkillAction.verify|verify} messages.
             * @param message BattleSkillAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleSkillAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleSkillAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleSkillAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleSkillAction;

            /**
             * Decodes a BattleSkillAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleSkillAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleSkillAction;

            /**
             * Verifies a BattleSkillAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleSkillAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleSkillAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleSkillAction;

            /**
             * Creates a plain object from a BattleSkillAction message. Also converts values to other types if specified.
             * @param message BattleSkillAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleSkillAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleSkillAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleSkillAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleSubHpAction. */
        interface IBattleSubHpAction {

            /** BattleSubHpAction srcEid */
            srcEid?: (number|null);

            /** BattleSubHpAction dstEid */
            dstEid?: (number|null);

            /** BattleSubHpAction subHp */
            subHp?: (number|null);

            /** BattleSubHpAction curHp */
            curHp?: (number|null);
        }

        /** Represents a BattleSubHpAction. */
        class BattleSubHpAction implements IBattleSubHpAction {

            /**
             * Constructs a new BattleSubHpAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleSubHpAction);

            /** BattleSubHpAction srcEid. */
            public srcEid: number;

            /** BattleSubHpAction dstEid. */
            public dstEid: number;

            /** BattleSubHpAction subHp. */
            public subHp: number;

            /** BattleSubHpAction curHp. */
            public curHp: number;

            /**
             * Creates a new BattleSubHpAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleSubHpAction instance
             */
            public static create(properties?: world.IBattleSubHpAction): world.BattleSubHpAction;

            /**
             * Encodes the specified BattleSubHpAction message. Does not implicitly {@link world.BattleSubHpAction.verify|verify} messages.
             * @param message BattleSubHpAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleSubHpAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleSubHpAction message, length delimited. Does not implicitly {@link world.BattleSubHpAction.verify|verify} messages.
             * @param message BattleSubHpAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleSubHpAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleSubHpAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleSubHpAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleSubHpAction;

            /**
             * Decodes a BattleSubHpAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleSubHpAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleSubHpAction;

            /**
             * Verifies a BattleSubHpAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleSubHpAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleSubHpAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleSubHpAction;

            /**
             * Creates a plain object from a BattleSubHpAction message. Also converts values to other types if specified.
             * @param message BattleSubHpAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleSubHpAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleSubHpAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleSubHpAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleAddBullet. */
        interface IBattleAddBullet {

            /** BattleAddBullet srcEid */
            srcEid?: (number|null);

            /** BattleAddBullet dstEid */
            dstEid?: (number|null);

            /** BattleAddBullet bulletId */
            bulletId?: (number|null);

            /** BattleAddBullet duration */
            duration?: (number|null);
        }

        /** Represents a BattleAddBullet. */
        class BattleAddBullet implements IBattleAddBullet {

            /**
             * Constructs a new BattleAddBullet.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleAddBullet);

            /** BattleAddBullet srcEid. */
            public srcEid: number;

            /** BattleAddBullet dstEid. */
            public dstEid: number;

            /** BattleAddBullet bulletId. */
            public bulletId: number;

            /** BattleAddBullet duration. */
            public duration: number;

            /**
             * Creates a new BattleAddBullet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleAddBullet instance
             */
            public static create(properties?: world.IBattleAddBullet): world.BattleAddBullet;

            /**
             * Encodes the specified BattleAddBullet message. Does not implicitly {@link world.BattleAddBullet.verify|verify} messages.
             * @param message BattleAddBullet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleAddBullet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleAddBullet message, length delimited. Does not implicitly {@link world.BattleAddBullet.verify|verify} messages.
             * @param message BattleAddBullet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleAddBullet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleAddBullet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleAddBullet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleAddBullet;

            /**
             * Decodes a BattleAddBullet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleAddBullet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleAddBullet;

            /**
             * Verifies a BattleAddBullet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleAddBullet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleAddBullet
             */
            public static fromObject(object: { [k: string]: any }): world.BattleAddBullet;

            /**
             * Creates a plain object from a BattleAddBullet message. Also converts values to other types if specified.
             * @param message BattleAddBullet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleAddBullet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleAddBullet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleAddBullet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleAddBuffAction. */
        interface IBattleAddBuffAction {

            /** BattleAddBuffAction srcEid */
            srcEid?: (number|null);

            /** BattleAddBuffAction dstEid */
            dstEid?: (number|null);

            /** BattleAddBuffAction buffId */
            buffId?: (number|null);
        }

        /** Represents a BattleAddBuffAction. */
        class BattleAddBuffAction implements IBattleAddBuffAction {

            /**
             * Constructs a new BattleAddBuffAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleAddBuffAction);

            /** BattleAddBuffAction srcEid. */
            public srcEid: number;

            /** BattleAddBuffAction dstEid. */
            public dstEid: number;

            /** BattleAddBuffAction buffId. */
            public buffId: number;

            /**
             * Creates a new BattleAddBuffAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleAddBuffAction instance
             */
            public static create(properties?: world.IBattleAddBuffAction): world.BattleAddBuffAction;

            /**
             * Encodes the specified BattleAddBuffAction message. Does not implicitly {@link world.BattleAddBuffAction.verify|verify} messages.
             * @param message BattleAddBuffAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleAddBuffAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleAddBuffAction message, length delimited. Does not implicitly {@link world.BattleAddBuffAction.verify|verify} messages.
             * @param message BattleAddBuffAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleAddBuffAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleAddBuffAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleAddBuffAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleAddBuffAction;

            /**
             * Decodes a BattleAddBuffAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleAddBuffAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleAddBuffAction;

            /**
             * Verifies a BattleAddBuffAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleAddBuffAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleAddBuffAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleAddBuffAction;

            /**
             * Creates a plain object from a BattleAddBuffAction message. Also converts values to other types if specified.
             * @param message BattleAddBuffAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleAddBuffAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleAddBuffAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleAddBuffAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleDelBuffAction. */
        interface IBattleDelBuffAction {

            /** BattleDelBuffAction srcEid */
            srcEid?: (number|null);

            /** BattleDelBuffAction dstEid */
            dstEid?: (number|null);

            /** BattleDelBuffAction buffId */
            buffId?: (number|null);
        }

        /** Represents a BattleDelBuffAction. */
        class BattleDelBuffAction implements IBattleDelBuffAction {

            /**
             * Constructs a new BattleDelBuffAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleDelBuffAction);

            /** BattleDelBuffAction srcEid. */
            public srcEid: number;

            /** BattleDelBuffAction dstEid. */
            public dstEid: number;

            /** BattleDelBuffAction buffId. */
            public buffId: number;

            /**
             * Creates a new BattleDelBuffAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleDelBuffAction instance
             */
            public static create(properties?: world.IBattleDelBuffAction): world.BattleDelBuffAction;

            /**
             * Encodes the specified BattleDelBuffAction message. Does not implicitly {@link world.BattleDelBuffAction.verify|verify} messages.
             * @param message BattleDelBuffAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleDelBuffAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleDelBuffAction message, length delimited. Does not implicitly {@link world.BattleDelBuffAction.verify|verify} messages.
             * @param message BattleDelBuffAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleDelBuffAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleDelBuffAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleDelBuffAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleDelBuffAction;

            /**
             * Decodes a BattleDelBuffAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleDelBuffAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleDelBuffAction;

            /**
             * Verifies a BattleDelBuffAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleDelBuffAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleDelBuffAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleDelBuffAction;

            /**
             * Creates a plain object from a BattleDelBuffAction message. Also converts values to other types if specified.
             * @param message BattleDelBuffAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleDelBuffAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleDelBuffAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleDelBuffAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleStopAction. */
        interface IBattleStopAction {

            /** BattleStopAction fighterEid */
            fighterEid?: (number|null);

            /** BattleStopAction battleEid */
            battleEid?: (number|null);
        }

        /** Represents a BattleStopAction. */
        class BattleStopAction implements IBattleStopAction {

            /**
             * Constructs a new BattleStopAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IBattleStopAction);

            /** BattleStopAction fighterEid. */
            public fighterEid: number;

            /** BattleStopAction battleEid. */
            public battleEid: number;

            /**
             * Creates a new BattleStopAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleStopAction instance
             */
            public static create(properties?: world.IBattleStopAction): world.BattleStopAction;

            /**
             * Encodes the specified BattleStopAction message. Does not implicitly {@link world.BattleStopAction.verify|verify} messages.
             * @param message BattleStopAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IBattleStopAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleStopAction message, length delimited. Does not implicitly {@link world.BattleStopAction.verify|verify} messages.
             * @param message BattleStopAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IBattleStopAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleStopAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleStopAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.BattleStopAction;

            /**
             * Decodes a BattleStopAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleStopAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.BattleStopAction;

            /**
             * Verifies a BattleStopAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleStopAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleStopAction
             */
            public static fromObject(object: { [k: string]: any }): world.BattleStopAction;

            /**
             * Creates a plain object from a BattleStopAction message. Also converts values to other types if specified.
             * @param message BattleStopAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.BattleStopAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleStopAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleStopAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddBoxAction. */
        interface IAddBoxAction {

            /** AddBoxAction troopEid */
            troopEid?: (number|null);

            /** AddBoxAction boxEid */
            boxEid?: (number|null);
        }

        /** Represents an AddBoxAction. */
        class AddBoxAction implements IAddBoxAction {

            /**
             * Constructs a new AddBoxAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IAddBoxAction);

            /** AddBoxAction troopEid. */
            public troopEid: number;

            /** AddBoxAction boxEid. */
            public boxEid: number;

            /**
             * Creates a new AddBoxAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddBoxAction instance
             */
            public static create(properties?: world.IAddBoxAction): world.AddBoxAction;

            /**
             * Encodes the specified AddBoxAction message. Does not implicitly {@link world.AddBoxAction.verify|verify} messages.
             * @param message AddBoxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IAddBoxAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddBoxAction message, length delimited. Does not implicitly {@link world.AddBoxAction.verify|verify} messages.
             * @param message AddBoxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IAddBoxAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddBoxAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddBoxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.AddBoxAction;

            /**
             * Decodes an AddBoxAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddBoxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.AddBoxAction;

            /**
             * Verifies an AddBoxAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddBoxAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddBoxAction
             */
            public static fromObject(object: { [k: string]: any }): world.AddBoxAction;

            /**
             * Creates a plain object from an AddBoxAction message. Also converts values to other types if specified.
             * @param message AddBoxAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.AddBoxAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddBoxAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddBoxAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DropBoxAction. */
        interface IDropBoxAction {

            /** DropBoxAction troopEid */
            troopEid?: (number|null);

            /** DropBoxAction campEid */
            campEid?: (number|null);
        }

        /** Represents a DropBoxAction. */
        class DropBoxAction implements IDropBoxAction {

            /**
             * Constructs a new DropBoxAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IDropBoxAction);

            /** DropBoxAction troopEid. */
            public troopEid: number;

            /** DropBoxAction campEid. */
            public campEid: number;

            /**
             * Creates a new DropBoxAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DropBoxAction instance
             */
            public static create(properties?: world.IDropBoxAction): world.DropBoxAction;

            /**
             * Encodes the specified DropBoxAction message. Does not implicitly {@link world.DropBoxAction.verify|verify} messages.
             * @param message DropBoxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IDropBoxAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DropBoxAction message, length delimited. Does not implicitly {@link world.DropBoxAction.verify|verify} messages.
             * @param message DropBoxAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IDropBoxAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DropBoxAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DropBoxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.DropBoxAction;

            /**
             * Decodes a DropBoxAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DropBoxAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.DropBoxAction;

            /**
             * Verifies a DropBoxAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DropBoxAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DropBoxAction
             */
            public static fromObject(object: { [k: string]: any }): world.DropBoxAction;

            /**
             * Creates a plain object from a DropBoxAction message. Also converts values to other types if specified.
             * @param message DropBoxAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.DropBoxAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DropBoxAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DropBoxAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PickItemAction. */
        interface IPickItemAction {

            /** PickItemAction troopEid */
            troopEid?: (number|null);

            /** PickItemAction itemEid */
            itemEid?: (number|null);
        }

        /** Represents a PickItemAction. */
        class PickItemAction implements IPickItemAction {

            /**
             * Constructs a new PickItemAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IPickItemAction);

            /** PickItemAction troopEid. */
            public troopEid: number;

            /** PickItemAction itemEid. */
            public itemEid: number;

            /**
             * Creates a new PickItemAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PickItemAction instance
             */
            public static create(properties?: world.IPickItemAction): world.PickItemAction;

            /**
             * Encodes the specified PickItemAction message. Does not implicitly {@link world.PickItemAction.verify|verify} messages.
             * @param message PickItemAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IPickItemAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PickItemAction message, length delimited. Does not implicitly {@link world.PickItemAction.verify|verify} messages.
             * @param message PickItemAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IPickItemAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PickItemAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PickItemAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.PickItemAction;

            /**
             * Decodes a PickItemAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PickItemAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.PickItemAction;

            /**
             * Verifies a PickItemAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PickItemAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PickItemAction
             */
            public static fromObject(object: { [k: string]: any }): world.PickItemAction;

            /**
             * Creates a plain object from a PickItemAction message. Also converts values to other types if specified.
             * @param message PickItemAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.PickItemAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PickItemAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PickItemAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InviteSoldierAction. */
        interface IInviteSoldierAction {

            /** InviteSoldierAction troopEid */
            troopEid?: (number|null);

            /** InviteSoldierAction soldierEid */
            soldierEid?: (number|null);
        }

        /** Represents an InviteSoldierAction. */
        class InviteSoldierAction implements IInviteSoldierAction {

            /**
             * Constructs a new InviteSoldierAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IInviteSoldierAction);

            /** InviteSoldierAction troopEid. */
            public troopEid: number;

            /** InviteSoldierAction soldierEid. */
            public soldierEid: number;

            /**
             * Creates a new InviteSoldierAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InviteSoldierAction instance
             */
            public static create(properties?: world.IInviteSoldierAction): world.InviteSoldierAction;

            /**
             * Encodes the specified InviteSoldierAction message. Does not implicitly {@link world.InviteSoldierAction.verify|verify} messages.
             * @param message InviteSoldierAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IInviteSoldierAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InviteSoldierAction message, length delimited. Does not implicitly {@link world.InviteSoldierAction.verify|verify} messages.
             * @param message InviteSoldierAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IInviteSoldierAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InviteSoldierAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InviteSoldierAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.InviteSoldierAction;

            /**
             * Decodes an InviteSoldierAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InviteSoldierAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.InviteSoldierAction;

            /**
             * Verifies an InviteSoldierAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InviteSoldierAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InviteSoldierAction
             */
            public static fromObject(object: { [k: string]: any }): world.InviteSoldierAction;

            /**
             * Creates a plain object from an InviteSoldierAction message. Also converts values to other types if specified.
             * @param message InviteSoldierAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.InviteSoldierAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InviteSoldierAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InviteSoldierAction
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

            /** EntityAction addBox */
            addBox?: (world.IAddBoxAction|null);

            /** EntityAction dropBox */
            dropBox?: (world.IDropBoxAction|null);

            /** EntityAction pickItem */
            pickItem?: (world.IPickItemAction|null);

            /** EntityAction inviteSoldier */
            inviteSoldier?: (world.IInviteSoldierAction|null);

            /** EntityAction battleStart */
            battleStart?: (world.IBattleStartAction|null);

            /** EntityAction battleSkill */
            battleSkill?: (world.IBattleSkillAction|null);

            /** EntityAction battleAddBuff */
            battleAddBuff?: (world.IBattleAddBuffAction|null);

            /** EntityAction battleDelBuff */
            battleDelBuff?: (world.IBattleDelBuffAction|null);

            /** EntityAction battleStop */
            battleStop?: (world.IBattleStopAction|null);

            /** EntityAction battleSubHp */
            battleSubHp?: (world.IBattleSubHpAction|null);
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

            /** EntityAction addBox. */
            public addBox?: (world.IAddBoxAction|null);

            /** EntityAction dropBox. */
            public dropBox?: (world.IDropBoxAction|null);

            /** EntityAction pickItem. */
            public pickItem?: (world.IPickItemAction|null);

            /** EntityAction inviteSoldier. */
            public inviteSoldier?: (world.IInviteSoldierAction|null);

            /** EntityAction battleStart. */
            public battleStart?: (world.IBattleStartAction|null);

            /** EntityAction battleSkill. */
            public battleSkill?: (world.IBattleSkillAction|null);

            /** EntityAction battleAddBuff. */
            public battleAddBuff?: (world.IBattleAddBuffAction|null);

            /** EntityAction battleDelBuff. */
            public battleDelBuff?: (world.IBattleDelBuffAction|null);

            /** EntityAction battleStop. */
            public battleStop?: (world.IBattleStopAction|null);

            /** EntityAction battleSubHp. */
            public battleSubHp?: (world.IBattleSubHpAction|null);

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

        /** Properties of a notify_battle_result. */
        interface Inotify_battle_result {

            /** notify_battle_result srcEid */
            srcEid?: (number|null);

            /** notify_battle_result dstEid */
            dstEid?: (number|null);

            /** notify_battle_result result */
            result?: (number|null);
        }

        /** Represents a notify_battle_result. */
        class notify_battle_result implements Inotify_battle_result {

            /**
             * Constructs a new notify_battle_result.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Inotify_battle_result);

            /** notify_battle_result srcEid. */
            public srcEid: number;

            /** notify_battle_result dstEid. */
            public dstEid: number;

            /** notify_battle_result result. */
            public result: number;

            /**
             * Creates a new notify_battle_result instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_battle_result instance
             */
            public static create(properties?: world.Inotify_battle_result): world.notify_battle_result;

            /**
             * Encodes the specified notify_battle_result message. Does not implicitly {@link world.notify_battle_result.verify|verify} messages.
             * @param message notify_battle_result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Inotify_battle_result, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_battle_result message, length delimited. Does not implicitly {@link world.notify_battle_result.verify|verify} messages.
             * @param message notify_battle_result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Inotify_battle_result, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_battle_result message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_battle_result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.notify_battle_result;

            /**
             * Decodes a notify_battle_result message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_battle_result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.notify_battle_result;

            /**
             * Verifies a notify_battle_result message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify_battle_result message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify_battle_result
             */
            public static fromObject(object: { [k: string]: any }): world.notify_battle_result;

            /**
             * Creates a plain object from a notify_battle_result message. Also converts values to other types if specified.
             * @param message notify_battle_result
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.notify_battle_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify_battle_result to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify_battle_result
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
}
