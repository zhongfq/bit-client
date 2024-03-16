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

    /** Namespace battle. */
    namespace battle {

        /** Properties of a BattleHero. */
        interface IBattleHero {

            /** BattleHero heroId */
            heroId?: (number|null);

            /** BattleHero eid */
            eid?: (number|null);
        }

        /** Represents a BattleHero. */
        class BattleHero implements IBattleHero {

            /**
             * Constructs a new BattleHero.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.IBattleHero);

            /** BattleHero heroId. */
            public heroId: number;

            /** BattleHero eid. */
            public eid: number;

            /**
             * Creates a new BattleHero instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleHero instance
             */
            public static create(properties?: battle.IBattleHero): battle.BattleHero;

            /**
             * Encodes the specified BattleHero message. Does not implicitly {@link battle.BattleHero.verify|verify} messages.
             * @param message BattleHero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IBattleHero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleHero message, length delimited. Does not implicitly {@link battle.BattleHero.verify|verify} messages.
             * @param message BattleHero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IBattleHero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleHero message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleHero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.BattleHero;

            /**
             * Decodes a BattleHero message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleHero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.BattleHero;

            /**
             * Verifies a BattleHero message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleHero message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleHero
             */
            public static fromObject(object: { [k: string]: any }): battle.BattleHero;

            /**
             * Creates a plain object from a BattleHero message. Also converts values to other types if specified.
             * @param message BattleHero
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.BattleHero, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleHero to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleHero
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleRole. */
        interface IBattleRole {

            /** BattleRole rid */
            rid?: (number|null);

            /** BattleRole name */
            name?: (string|null);

            /** BattleRole heros */
            heros?: (battle.IBattleHero[]|null);
        }

        /** Represents a BattleRole. */
        class BattleRole implements IBattleRole {

            /**
             * Constructs a new BattleRole.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.IBattleRole);

            /** BattleRole rid. */
            public rid: number;

            /** BattleRole name. */
            public name: string;

            /** BattleRole heros. */
            public heros: battle.IBattleHero[];

            /**
             * Creates a new BattleRole instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleRole instance
             */
            public static create(properties?: battle.IBattleRole): battle.BattleRole;

            /**
             * Encodes the specified BattleRole message. Does not implicitly {@link battle.BattleRole.verify|verify} messages.
             * @param message BattleRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IBattleRole, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleRole message, length delimited. Does not implicitly {@link battle.BattleRole.verify|verify} messages.
             * @param message BattleRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IBattleRole, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleRole message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.BattleRole;

            /**
             * Decodes a BattleRole message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.BattleRole;

            /**
             * Verifies a BattleRole message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleRole message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleRole
             */
            public static fromObject(object: { [k: string]: any }): battle.BattleRole;

            /**
             * Creates a plain object from a BattleRole message. Also converts values to other types if specified.
             * @param message BattleRole
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.BattleRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleRole to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleRole
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BattleEntity. */
        interface IBattleEntity {

            /** BattleEntity eid */
            eid?: (number|null);

            /** BattleEntity rid */
            rid?: (number|null);

            /** BattleEntity entityId */
            entityId?: (number|null);

            /** BattleEntity maxHp */
            maxHp?: (number|null);

            /** BattleEntity hp */
            hp?: (number|null);

            /** BattleEntity x */
            x?: (number|null);

            /** BattleEntity y */
            y?: (number|null);

            /** BattleEntity z */
            z?: (number|null);

            /** BattleEntity maxMp */
            maxMp?: (number|null);

            /** BattleEntity mp */
            mp?: (number|null);
        }

        /** Represents a BattleEntity. */
        class BattleEntity implements IBattleEntity {

            /**
             * Constructs a new BattleEntity.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.IBattleEntity);

            /** BattleEntity eid. */
            public eid: number;

            /** BattleEntity rid. */
            public rid: number;

            /** BattleEntity entityId. */
            public entityId: number;

            /** BattleEntity maxHp. */
            public maxHp: number;

            /** BattleEntity hp. */
            public hp: number;

            /** BattleEntity x. */
            public x: number;

            /** BattleEntity y. */
            public y: number;

            /** BattleEntity z. */
            public z: number;

            /** BattleEntity maxMp. */
            public maxMp: number;

            /** BattleEntity mp. */
            public mp: number;

            /**
             * Creates a new BattleEntity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleEntity instance
             */
            public static create(properties?: battle.IBattleEntity): battle.BattleEntity;

            /**
             * Encodes the specified BattleEntity message. Does not implicitly {@link battle.BattleEntity.verify|verify} messages.
             * @param message BattleEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IBattleEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleEntity message, length delimited. Does not implicitly {@link battle.BattleEntity.verify|verify} messages.
             * @param message BattleEntity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IBattleEntity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleEntity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.BattleEntity;

            /**
             * Decodes a BattleEntity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleEntity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.BattleEntity;

            /**
             * Verifies a BattleEntity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleEntity message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleEntity
             */
            public static fromObject(object: { [k: string]: any }): battle.BattleEntity;

            /**
             * Creates a plain object from a BattleEntity message. Also converts values to other types if specified.
             * @param message BattleEntity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.BattleEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleEntity to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleEntity
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a cmd_add_entity. */
        interface Icmd_add_entity {

            /** cmd_add_entity entity */
            entity?: (battle.IBattleEntity|null);
        }

        /** Represents a cmd_add_entity. */
        class cmd_add_entity implements Icmd_add_entity {

            /**
             * Constructs a new cmd_add_entity.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Icmd_add_entity);

            /** cmd_add_entity entity. */
            public entity?: (battle.IBattleEntity|null);

            /**
             * Creates a new cmd_add_entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns cmd_add_entity instance
             */
            public static create(properties?: battle.Icmd_add_entity): battle.cmd_add_entity;

            /**
             * Encodes the specified cmd_add_entity message. Does not implicitly {@link battle.cmd_add_entity.verify|verify} messages.
             * @param message cmd_add_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_add_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_add_entity message, length delimited. Does not implicitly {@link battle.cmd_add_entity.verify|verify} messages.
             * @param message cmd_add_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_add_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_add_entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_add_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_add_entity;

            /**
             * Decodes a cmd_add_entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_add_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_add_entity;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_add_entity;

            /**
             * Creates a plain object from a cmd_add_entity message. Also converts values to other types if specified.
             * @param message cmd_add_entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_add_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_update_entity);

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
            public static create(properties?: battle.Icmd_update_entity): battle.cmd_update_entity;

            /**
             * Encodes the specified cmd_update_entity message. Does not implicitly {@link battle.cmd_update_entity.verify|verify} messages.
             * @param message cmd_update_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_update_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_update_entity message, length delimited. Does not implicitly {@link battle.cmd_update_entity.verify|verify} messages.
             * @param message cmd_update_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_update_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_update_entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_update_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_update_entity;

            /**
             * Decodes a cmd_update_entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_update_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_update_entity;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_update_entity;

            /**
             * Creates a plain object from a cmd_update_entity message. Also converts values to other types if specified.
             * @param message cmd_update_entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_update_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_del_entity);

            /** cmd_del_entity eid. */
            public eid: number;

            /**
             * Creates a new cmd_del_entity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns cmd_del_entity instance
             */
            public static create(properties?: battle.Icmd_del_entity): battle.cmd_del_entity;

            /**
             * Encodes the specified cmd_del_entity message. Does not implicitly {@link battle.cmd_del_entity.verify|verify} messages.
             * @param message cmd_del_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_del_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_del_entity message, length delimited. Does not implicitly {@link battle.cmd_del_entity.verify|verify} messages.
             * @param message cmd_del_entity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_del_entity, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_del_entity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_del_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_del_entity;

            /**
             * Decodes a cmd_del_entity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_del_entity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_del_entity;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_del_entity;

            /**
             * Creates a plain object from a cmd_del_entity message. Also converts values to other types if specified.
             * @param message cmd_del_entity
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_del_entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_move_to);

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
            public static create(properties?: battle.Icmd_move_to): battle.cmd_move_to;

            /**
             * Encodes the specified cmd_move_to message. Does not implicitly {@link battle.cmd_move_to.verify|verify} messages.
             * @param message cmd_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_move_to message, length delimited. Does not implicitly {@link battle.cmd_move_to.verify|verify} messages.
             * @param message cmd_move_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_move_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_move_to message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_move_to;

            /**
             * Decodes a cmd_move_to message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_move_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_move_to;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_move_to;

            /**
             * Creates a plain object from a cmd_move_to message. Also converts values to other types if specified.
             * @param message cmd_move_to
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_move_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_force_to);

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
            public static create(properties?: battle.Icmd_force_to): battle.cmd_force_to;

            /**
             * Encodes the specified cmd_force_to message. Does not implicitly {@link battle.cmd_force_to.verify|verify} messages.
             * @param message cmd_force_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_force_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_force_to message, length delimited. Does not implicitly {@link battle.cmd_force_to.verify|verify} messages.
             * @param message cmd_force_to message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_force_to, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_force_to message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_force_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_force_to;

            /**
             * Decodes a cmd_force_to message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_force_to
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_force_to;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_force_to;

            /**
             * Creates a plain object from a cmd_force_to message. Also converts values to other types if specified.
             * @param message cmd_force_to
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_force_to, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_move_start);

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
            public static create(properties?: battle.Icmd_move_start): battle.cmd_move_start;

            /**
             * Encodes the specified cmd_move_start message. Does not implicitly {@link battle.cmd_move_start.verify|verify} messages.
             * @param message cmd_move_start message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_move_start message, length delimited. Does not implicitly {@link battle.cmd_move_start.verify|verify} messages.
             * @param message cmd_move_start message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_move_start, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_move_start message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_move_start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_move_start;

            /**
             * Decodes a cmd_move_start message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_move_start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_move_start;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_move_start;

            /**
             * Creates a plain object from a cmd_move_start message. Also converts values to other types if specified.
             * @param message cmd_move_start
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_move_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_move_stop);

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
            public static create(properties?: battle.Icmd_move_stop): battle.cmd_move_stop;

            /**
             * Encodes the specified cmd_move_stop message. Does not implicitly {@link battle.cmd_move_stop.verify|verify} messages.
             * @param message cmd_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_move_stop message, length delimited. Does not implicitly {@link battle.cmd_move_stop.verify|verify} messages.
             * @param message cmd_move_stop message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_move_stop, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_move_stop message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_move_stop;

            /**
             * Decodes a cmd_move_stop message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_move_stop
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_move_stop;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_move_stop;

            /**
             * Creates a plain object from a cmd_move_stop message. Also converts values to other types if specified.
             * @param message cmd_move_stop
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_move_stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_add_buff);

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
            public static create(properties?: battle.Icmd_add_buff): battle.cmd_add_buff;

            /**
             * Encodes the specified cmd_add_buff message. Does not implicitly {@link battle.cmd_add_buff.verify|verify} messages.
             * @param message cmd_add_buff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_add_buff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_add_buff message, length delimited. Does not implicitly {@link battle.cmd_add_buff.verify|verify} messages.
             * @param message cmd_add_buff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_add_buff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_add_buff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_add_buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_add_buff;

            /**
             * Decodes a cmd_add_buff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_add_buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_add_buff;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_add_buff;

            /**
             * Creates a plain object from a cmd_add_buff message. Also converts values to other types if specified.
             * @param message cmd_add_buff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_add_buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_del_buff);

            /** cmd_del_buff eid. */
            public eid: number;

            /** cmd_del_buff id. */
            public id: number;

            /**
             * Creates a new cmd_del_buff instance using the specified properties.
             * @param [properties] Properties to set
             * @returns cmd_del_buff instance
             */
            public static create(properties?: battle.Icmd_del_buff): battle.cmd_del_buff;

            /**
             * Encodes the specified cmd_del_buff message. Does not implicitly {@link battle.cmd_del_buff.verify|verify} messages.
             * @param message cmd_del_buff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_del_buff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_del_buff message, length delimited. Does not implicitly {@link battle.cmd_del_buff.verify|verify} messages.
             * @param message cmd_del_buff message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_del_buff, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_del_buff message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_del_buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_del_buff;

            /**
             * Decodes a cmd_del_buff message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_del_buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_del_buff;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_del_buff;

            /**
             * Creates a plain object from a cmd_del_buff message. Also converts values to other types if specified.
             * @param message cmd_del_buff
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_del_buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_attack);

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
            public static create(properties?: battle.Icmd_attack): battle.cmd_attack;

            /**
             * Encodes the specified cmd_attack message. Does not implicitly {@link battle.cmd_attack.verify|verify} messages.
             * @param message cmd_attack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_attack, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_attack message, length delimited. Does not implicitly {@link battle.cmd_attack.verify|verify} messages.
             * @param message cmd_attack message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_attack, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_attack message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_attack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_attack;

            /**
             * Decodes a cmd_attack message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_attack
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_attack;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_attack;

            /**
             * Creates a plain object from a cmd_attack message. Also converts values to other types if specified.
             * @param message cmd_attack
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_attack, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_under_atk);

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
            public static create(properties?: battle.Icmd_under_atk): battle.cmd_under_atk;

            /**
             * Encodes the specified cmd_under_atk message. Does not implicitly {@link battle.cmd_under_atk.verify|verify} messages.
             * @param message cmd_under_atk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_under_atk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_under_atk message, length delimited. Does not implicitly {@link battle.cmd_under_atk.verify|verify} messages.
             * @param message cmd_under_atk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_under_atk, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_under_atk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_under_atk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_under_atk;

            /**
             * Decodes a cmd_under_atk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_under_atk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_under_atk;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_under_atk;

            /**
             * Creates a plain object from a cmd_under_atk message. Also converts values to other types if specified.
             * @param message cmd_under_atk
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_under_atk, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Icmd_recover_hp);

            /** cmd_recover_hp eid. */
            public eid: number;

            /** cmd_recover_hp addHp. */
            public addHp: number;

            /**
             * Creates a new cmd_recover_hp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns cmd_recover_hp instance
             */
            public static create(properties?: battle.Icmd_recover_hp): battle.cmd_recover_hp;

            /**
             * Encodes the specified cmd_recover_hp message. Does not implicitly {@link battle.cmd_recover_hp.verify|verify} messages.
             * @param message cmd_recover_hp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Icmd_recover_hp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified cmd_recover_hp message, length delimited. Does not implicitly {@link battle.cmd_recover_hp.verify|verify} messages.
             * @param message cmd_recover_hp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Icmd_recover_hp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a cmd_recover_hp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns cmd_recover_hp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.cmd_recover_hp;

            /**
             * Decodes a cmd_recover_hp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns cmd_recover_hp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.cmd_recover_hp;

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
            public static fromObject(object: { [k: string]: any }): battle.cmd_recover_hp;

            /**
             * Creates a plain object from a cmd_recover_hp message. Also converts values to other types if specified.
             * @param message cmd_recover_hp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.cmd_recover_hp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a BattleCmd. */
        interface IBattleCmd {

            /** BattleCmd cmdType */
            cmdType?: (number|null);

            /** BattleCmd addEntity */
            addEntity?: (battle.Icmd_add_entity|null);

            /** BattleCmd updateEntity */
            updateEntity?: (battle.Icmd_update_entity|null);

            /** BattleCmd delEntity */
            delEntity?: (battle.Icmd_del_entity|null);

            /** BattleCmd moveStart */
            moveStart?: (battle.Icmd_move_start|null);

            /** BattleCmd moveStop */
            moveStop?: (battle.Icmd_move_stop|null);

            /** BattleCmd addBuff */
            addBuff?: (battle.Icmd_add_buff|null);

            /** BattleCmd delBuff */
            delBuff?: (battle.Icmd_del_buff|null);

            /** BattleCmd attack */
            attack?: (battle.Icmd_attack|null);

            /** BattleCmd underAtk */
            underAtk?: (battle.Icmd_under_atk|null);

            /** BattleCmd forceTo */
            forceTo?: (battle.Icmd_force_to|null);

            /** BattleCmd moveTo */
            moveTo?: (battle.Icmd_move_to|null);

            /** BattleCmd recoverHp */
            recoverHp?: (battle.Icmd_recover_hp|null);
        }

        /** Represents a BattleCmd. */
        class BattleCmd implements IBattleCmd {

            /**
             * Constructs a new BattleCmd.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.IBattleCmd);

            /** BattleCmd cmdType. */
            public cmdType: number;

            /** BattleCmd addEntity. */
            public addEntity?: (battle.Icmd_add_entity|null);

            /** BattleCmd updateEntity. */
            public updateEntity?: (battle.Icmd_update_entity|null);

            /** BattleCmd delEntity. */
            public delEntity?: (battle.Icmd_del_entity|null);

            /** BattleCmd moveStart. */
            public moveStart?: (battle.Icmd_move_start|null);

            /** BattleCmd moveStop. */
            public moveStop?: (battle.Icmd_move_stop|null);

            /** BattleCmd addBuff. */
            public addBuff?: (battle.Icmd_add_buff|null);

            /** BattleCmd delBuff. */
            public delBuff?: (battle.Icmd_del_buff|null);

            /** BattleCmd attack. */
            public attack?: (battle.Icmd_attack|null);

            /** BattleCmd underAtk. */
            public underAtk?: (battle.Icmd_under_atk|null);

            /** BattleCmd forceTo. */
            public forceTo?: (battle.Icmd_force_to|null);

            /** BattleCmd moveTo. */
            public moveTo?: (battle.Icmd_move_to|null);

            /** BattleCmd recoverHp. */
            public recoverHp?: (battle.Icmd_recover_hp|null);

            /**
             * Creates a new BattleCmd instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BattleCmd instance
             */
            public static create(properties?: battle.IBattleCmd): battle.BattleCmd;

            /**
             * Encodes the specified BattleCmd message. Does not implicitly {@link battle.BattleCmd.verify|verify} messages.
             * @param message BattleCmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IBattleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BattleCmd message, length delimited. Does not implicitly {@link battle.BattleCmd.verify|verify} messages.
             * @param message BattleCmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IBattleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BattleCmd message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BattleCmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.BattleCmd;

            /**
             * Decodes a BattleCmd message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BattleCmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.BattleCmd;

            /**
             * Verifies a BattleCmd message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BattleCmd message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BattleCmd
             */
            public static fromObject(object: { [k: string]: any }): battle.BattleCmd;

            /**
             * Creates a plain object from a BattleCmd message. Also converts values to other types if specified.
             * @param message BattleCmd
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.BattleCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BattleCmd to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BattleCmd
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Battle. */
        interface IBattle {

            /** Battle battleId */
            battleId?: (number|null);

            /** Battle battleUid */
            battleUid?: (number|null);

            /** Battle roles */
            roles?: (battle.IBattleRole[]|null);
        }

        /** Represents a Battle. */
        class Battle implements IBattle {

            /**
             * Constructs a new Battle.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.IBattle);

            /** Battle battleId. */
            public battleId: number;

            /** Battle battleUid. */
            public battleUid: number;

            /** Battle roles. */
            public roles: battle.IBattleRole[];

            /**
             * Creates a new Battle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Battle instance
             */
            public static create(properties?: battle.IBattle): battle.Battle;

            /**
             * Encodes the specified Battle message. Does not implicitly {@link battle.Battle.verify|verify} messages.
             * @param message Battle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IBattle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Battle message, length delimited. Does not implicitly {@link battle.Battle.verify|verify} messages.
             * @param message Battle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IBattle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Battle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Battle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.Battle;

            /**
             * Decodes a Battle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Battle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.Battle;

            /**
             * Verifies a Battle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Battle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Battle
             */
            public static fromObject(object: { [k: string]: any }): battle.Battle;

            /**
             * Creates a plain object from a Battle message. Also converts values to other types if specified.
             * @param message Battle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.Battle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Battle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Battle
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_enter. */
        interface Ic2s_enter {

            /** c2s_enter battleUid */
            battleUid?: (number|null);
        }

        /** Represents a c2s_enter. */
        class c2s_enter implements Ic2s_enter {

            /**
             * Constructs a new c2s_enter.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Ic2s_enter);

            /** c2s_enter battleUid. */
            public battleUid: number;

            /**
             * Creates a new c2s_enter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_enter instance
             */
            public static create(properties?: battle.Ic2s_enter): battle.c2s_enter;

            /**
             * Encodes the specified c2s_enter message. Does not implicitly {@link battle.c2s_enter.verify|verify} messages.
             * @param message c2s_enter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Ic2s_enter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_enter message, length delimited. Does not implicitly {@link battle.c2s_enter.verify|verify} messages.
             * @param message c2s_enter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Ic2s_enter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_enter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_enter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.c2s_enter;

            /**
             * Decodes a c2s_enter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_enter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.c2s_enter;

            /**
             * Verifies a c2s_enter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_enter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_enter
             */
            public static fromObject(object: { [k: string]: any }): battle.c2s_enter;

            /**
             * Creates a plain object from a c2s_enter message. Also converts values to other types if specified.
             * @param message c2s_enter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.c2s_enter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_enter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_enter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_enter. */
        interface Is2c_enter {

            /** s2c_enter err */
            err?: (number|null);

            /** s2c_enter roles */
            roles?: (battle.IBattleRole[]|null);

            /** s2c_enter entities */
            entities?: (battle.IBattleEntity[]|null);
        }

        /** Represents a s2c_enter. */
        class s2c_enter implements Is2c_enter {

            /**
             * Constructs a new s2c_enter.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Is2c_enter);

            /** s2c_enter err. */
            public err: number;

            /** s2c_enter roles. */
            public roles: battle.IBattleRole[];

            /** s2c_enter entities. */
            public entities: battle.IBattleEntity[];

            /**
             * Creates a new s2c_enter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_enter instance
             */
            public static create(properties?: battle.Is2c_enter): battle.s2c_enter;

            /**
             * Encodes the specified s2c_enter message. Does not implicitly {@link battle.s2c_enter.verify|verify} messages.
             * @param message s2c_enter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Is2c_enter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_enter message, length delimited. Does not implicitly {@link battle.s2c_enter.verify|verify} messages.
             * @param message s2c_enter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Is2c_enter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_enter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_enter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.s2c_enter;

            /**
             * Decodes a s2c_enter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_enter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.s2c_enter;

            /**
             * Verifies a s2c_enter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_enter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_enter
             */
            public static fromObject(object: { [k: string]: any }): battle.s2c_enter;

            /**
             * Creates a plain object from a s2c_enter message. Also converts values to other types if specified.
             * @param message s2c_enter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.s2c_enter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_enter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_enter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify_cmd. */
        interface Inotify_cmd {

            /** notify_cmd frame */
            frame?: (number|null);

            /** notify_cmd cmds */
            cmds?: (battle.IBattleCmd[]|null);
        }

        /** Represents a notify_cmd. */
        class notify_cmd implements Inotify_cmd {

            /**
             * Constructs a new notify_cmd.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Inotify_cmd);

            /** notify_cmd frame. */
            public frame: number;

            /** notify_cmd cmds. */
            public cmds: battle.IBattleCmd[];

            /**
             * Creates a new notify_cmd instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_cmd instance
             */
            public static create(properties?: battle.Inotify_cmd): battle.notify_cmd;

            /**
             * Encodes the specified notify_cmd message. Does not implicitly {@link battle.notify_cmd.verify|verify} messages.
             * @param message notify_cmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Inotify_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_cmd message, length delimited. Does not implicitly {@link battle.notify_cmd.verify|verify} messages.
             * @param message notify_cmd message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Inotify_cmd, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_cmd message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_cmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.notify_cmd;

            /**
             * Decodes a notify_cmd message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_cmd
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.notify_cmd;

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
            public static fromObject(object: { [k: string]: any }): battle.notify_cmd;

            /**
             * Creates a plain object from a notify_cmd message. Also converts values to other types if specified.
             * @param message notify_cmd
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.notify_cmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** c2s_launch_skill eid */
            eid?: (number|null);
        }

        /** Represents a c2s_launch_skill. */
        class c2s_launch_skill implements Ic2s_launch_skill {

            /**
             * Constructs a new c2s_launch_skill.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Ic2s_launch_skill);

            /** c2s_launch_skill eid. */
            public eid: number;

            /**
             * Creates a new c2s_launch_skill instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_launch_skill instance
             */
            public static create(properties?: battle.Ic2s_launch_skill): battle.c2s_launch_skill;

            /**
             * Encodes the specified c2s_launch_skill message. Does not implicitly {@link battle.c2s_launch_skill.verify|verify} messages.
             * @param message c2s_launch_skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Ic2s_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_launch_skill message, length delimited. Does not implicitly {@link battle.c2s_launch_skill.verify|verify} messages.
             * @param message c2s_launch_skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Ic2s_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_launch_skill message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_launch_skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.c2s_launch_skill;

            /**
             * Decodes a c2s_launch_skill message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_launch_skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.c2s_launch_skill;

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
            public static fromObject(object: { [k: string]: any }): battle.c2s_launch_skill;

            /**
             * Creates a plain object from a c2s_launch_skill message. Also converts values to other types if specified.
             * @param message c2s_launch_skill
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.c2s_launch_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.Is2c_launch_skill);

            /** s2c_launch_skill err. */
            public err: number;

            /**
             * Creates a new s2c_launch_skill instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_launch_skill instance
             */
            public static create(properties?: battle.Is2c_launch_skill): battle.s2c_launch_skill;

            /**
             * Encodes the specified s2c_launch_skill message. Does not implicitly {@link battle.s2c_launch_skill.verify|verify} messages.
             * @param message s2c_launch_skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Is2c_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_launch_skill message, length delimited. Does not implicitly {@link battle.s2c_launch_skill.verify|verify} messages.
             * @param message s2c_launch_skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Is2c_launch_skill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_launch_skill message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_launch_skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.s2c_launch_skill;

            /**
             * Decodes a s2c_launch_skill message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_launch_skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.s2c_launch_skill;

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
            public static fromObject(object: { [k: string]: any }): battle.s2c_launch_skill;

            /**
             * Creates a plain object from a s2c_launch_skill message. Also converts values to other types if specified.
             * @param message s2c_launch_skill
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.s2c_launch_skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a notify_start. */
        interface Inotify_start {
        }

        /** Represents a notify_start. */
        class notify_start implements Inotify_start {

            /**
             * Constructs a new notify_start.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Inotify_start);

            /**
             * Creates a new notify_start instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_start instance
             */
            public static create(properties?: battle.Inotify_start): battle.notify_start;

            /**
             * Encodes the specified notify_start message. Does not implicitly {@link battle.notify_start.verify|verify} messages.
             * @param message notify_start message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Inotify_start, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_start message, length delimited. Does not implicitly {@link battle.notify_start.verify|verify} messages.
             * @param message notify_start message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Inotify_start, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_start message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.notify_start;

            /**
             * Decodes a notify_start message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_start
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.notify_start;

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
            public static fromObject(object: { [k: string]: any }): battle.notify_start;

            /**
             * Creates a plain object from a notify_start message. Also converts values to other types if specified.
             * @param message notify_start
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.notify_start, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        }

        /** Represents a notify_end. */
        class notify_end implements Inotify_end {

            /**
             * Constructs a new notify_end.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Inotify_end);

            /**
             * Creates a new notify_end instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_end instance
             */
            public static create(properties?: battle.Inotify_end): battle.notify_end;

            /**
             * Encodes the specified notify_end message. Does not implicitly {@link battle.notify_end.verify|verify} messages.
             * @param message notify_end message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Inotify_end, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_end message, length delimited. Does not implicitly {@link battle.notify_end.verify|verify} messages.
             * @param message notify_end message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Inotify_end, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_end message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_end
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.notify_end;

            /**
             * Decodes a notify_end message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_end
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.notify_end;

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
            public static fromObject(object: { [k: string]: any }): battle.notify_end;

            /**
             * Creates a plain object from a notify_end message. Also converts values to other types if specified.
             * @param message notify_end
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.notify_end, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: battle.IDebugInfo);

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
            public static create(properties?: battle.IDebugInfo): battle.DebugInfo;

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link battle.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link battle.DebugInfo.verify|verify} messages.
             * @param message DebugInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.DebugInfo;

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.DebugInfo;

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
            public static fromObject(object: { [k: string]: any }): battle.DebugInfo;

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @param message DebugInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            infos?: (battle.IDebugInfo[]|null);

            /** notify_debug logs */
            logs?: (string[]|null);
        }

        /** Represents a notify_debug. */
        class notify_debug implements Inotify_debug {

            /**
             * Constructs a new notify_debug.
             * @param [properties] Properties to set
             */
            constructor(properties?: battle.Inotify_debug);

            /** notify_debug infos. */
            public infos: battle.IDebugInfo[];

            /** notify_debug logs. */
            public logs: string[];

            /**
             * Creates a new notify_debug instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_debug instance
             */
            public static create(properties?: battle.Inotify_debug): battle.notify_debug;

            /**
             * Encodes the specified notify_debug message. Does not implicitly {@link battle.notify_debug.verify|verify} messages.
             * @param message notify_debug message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: battle.Inotify_debug, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_debug message, length delimited. Does not implicitly {@link battle.notify_debug.verify|verify} messages.
             * @param message notify_debug message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: battle.Inotify_debug, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_debug message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_debug
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): battle.notify_debug;

            /**
             * Decodes a notify_debug message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_debug
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): battle.notify_debug;

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
            public static fromObject(object: { [k: string]: any }): battle.notify_debug;

            /**
             * Creates a plain object from a notify_debug message. Also converts values to other types if specified.
             * @param message notify_debug
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: battle.notify_debug, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Namespace chest. */
    namespace chest {

        /** Properties of a ChestInfo. */
        interface IChestInfo {

            /** ChestInfo id */
            id?: (number|null);

            /** ChestInfo num */
            num?: (number|null);
        }

        /** Represents a ChestInfo. */
        class ChestInfo implements IChestInfo {

            /**
             * Constructs a new ChestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.IChestInfo);

            /** ChestInfo id. */
            public id: number;

            /** ChestInfo num. */
            public num: number;

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

        /** Properties of a ScoreInfo. */
        interface IScoreInfo {

            /** ScoreInfo score */
            score?: (number|null);

            /** ScoreInfo scoreId */
            scoreId?: (number|null);
        }

        /** Represents a ScoreInfo. */
        class ScoreInfo implements IScoreInfo {

            /**
             * Constructs a new ScoreInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.IScoreInfo);

            /** ScoreInfo score. */
            public score: number;

            /** ScoreInfo scoreId. */
            public scoreId: number;

            /**
             * Creates a new ScoreInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScoreInfo instance
             */
            public static create(properties?: chest.IScoreInfo): chest.ScoreInfo;

            /**
             * Encodes the specified ScoreInfo message. Does not implicitly {@link chest.ScoreInfo.verify|verify} messages.
             * @param message ScoreInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.IScoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScoreInfo message, length delimited. Does not implicitly {@link chest.ScoreInfo.verify|verify} messages.
             * @param message ScoreInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.IScoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScoreInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScoreInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.ScoreInfo;

            /**
             * Decodes a ScoreInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScoreInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.ScoreInfo;

            /**
             * Verifies a ScoreInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScoreInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScoreInfo
             */
            public static fromObject(object: { [k: string]: any }): chest.ScoreInfo;

            /**
             * Creates a plain object from a ScoreInfo message. Also converts values to other types if specified.
             * @param message ScoreInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.ScoreInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScoreInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScoreInfo
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

            /** s2c_load heroId */
            heroId?: (number|null);

            /** s2c_load chests */
            chests?: (chest.IChestInfo[]|null);

            /** s2c_load score */
            score?: (chest.IScoreInfo|null);

            /** s2c_load heroIds */
            heroIds?: (number[]|null);
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

            /** s2c_load heroId. */
            public heroId: number;

            /** s2c_load chests. */
            public chests: chest.IChestInfo[];

            /** s2c_load score. */
            public score?: (chest.IScoreInfo|null);

            /** s2c_load heroIds. */
            public heroIds: number[];

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

        /** Properties of a c2s_open_chest. */
        interface Ic2s_open_chest {

            /** c2s_open_chest id */
            id?: (number|null);
        }

        /** Represents a c2s_open_chest. */
        class c2s_open_chest implements Ic2s_open_chest {

            /**
             * Constructs a new c2s_open_chest.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Ic2s_open_chest);

            /** c2s_open_chest id. */
            public id: number;

            /**
             * Creates a new c2s_open_chest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_open_chest instance
             */
            public static create(properties?: chest.Ic2s_open_chest): chest.c2s_open_chest;

            /**
             * Encodes the specified c2s_open_chest message. Does not implicitly {@link chest.c2s_open_chest.verify|verify} messages.
             * @param message c2s_open_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Ic2s_open_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_open_chest message, length delimited. Does not implicitly {@link chest.c2s_open_chest.verify|verify} messages.
             * @param message c2s_open_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Ic2s_open_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_open_chest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_open_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_open_chest;

            /**
             * Decodes a c2s_open_chest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_open_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_open_chest;

            /**
             * Verifies a c2s_open_chest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_open_chest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_open_chest
             */
            public static fromObject(object: { [k: string]: any }): chest.c2s_open_chest;

            /**
             * Creates a plain object from a c2s_open_chest message. Also converts values to other types if specified.
             * @param message c2s_open_chest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.c2s_open_chest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_open_chest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_open_chest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_open_chest. */
        interface Is2c_open_chest {

            /** s2c_open_chest err */
            err?: (number|null);

            /** s2c_open_chest chest */
            chest?: (chest.IChestInfo|null);

            /** s2c_open_chest score */
            score?: (chest.IScoreInfo|null);

            /** s2c_open_chest rewards */
            rewards?: (bag.IItem[]|null);
        }

        /** Represents a s2c_open_chest. */
        class s2c_open_chest implements Is2c_open_chest {

            /**
             * Constructs a new s2c_open_chest.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Is2c_open_chest);

            /** s2c_open_chest err. */
            public err: number;

            /** s2c_open_chest chest. */
            public chest?: (chest.IChestInfo|null);

            /** s2c_open_chest score. */
            public score?: (chest.IScoreInfo|null);

            /** s2c_open_chest rewards. */
            public rewards: bag.IItem[];

            /**
             * Creates a new s2c_open_chest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_open_chest instance
             */
            public static create(properties?: chest.Is2c_open_chest): chest.s2c_open_chest;

            /**
             * Encodes the specified s2c_open_chest message. Does not implicitly {@link chest.s2c_open_chest.verify|verify} messages.
             * @param message s2c_open_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Is2c_open_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_open_chest message, length delimited. Does not implicitly {@link chest.s2c_open_chest.verify|verify} messages.
             * @param message s2c_open_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Is2c_open_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_open_chest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_open_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_open_chest;

            /**
             * Decodes a s2c_open_chest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_open_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_open_chest;

            /**
             * Verifies a s2c_open_chest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_open_chest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_open_chest
             */
            public static fromObject(object: { [k: string]: any }): chest.s2c_open_chest;

            /**
             * Creates a plain object from a s2c_open_chest message. Also converts values to other types if specified.
             * @param message s2c_open_chest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.s2c_open_chest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_open_chest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_open_chest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_score_receive. */
        interface Ic2s_score_receive {
        }

        /** Represents a c2s_score_receive. */
        class c2s_score_receive implements Ic2s_score_receive {

            /**
             * Constructs a new c2s_score_receive.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Ic2s_score_receive);

            /**
             * Creates a new c2s_score_receive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_score_receive instance
             */
            public static create(properties?: chest.Ic2s_score_receive): chest.c2s_score_receive;

            /**
             * Encodes the specified c2s_score_receive message. Does not implicitly {@link chest.c2s_score_receive.verify|verify} messages.
             * @param message c2s_score_receive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Ic2s_score_receive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_score_receive message, length delimited. Does not implicitly {@link chest.c2s_score_receive.verify|verify} messages.
             * @param message c2s_score_receive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Ic2s_score_receive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_score_receive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_score_receive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_score_receive;

            /**
             * Decodes a c2s_score_receive message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_score_receive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_score_receive;

            /**
             * Verifies a c2s_score_receive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_score_receive message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_score_receive
             */
            public static fromObject(object: { [k: string]: any }): chest.c2s_score_receive;

            /**
             * Creates a plain object from a c2s_score_receive message. Also converts values to other types if specified.
             * @param message c2s_score_receive
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.c2s_score_receive, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_score_receive to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_score_receive
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_score_receive. */
        interface Is2c_score_receive {

            /** s2c_score_receive err */
            err?: (number|null);

            /** s2c_score_receive score */
            score?: (chest.IScoreInfo|null);
        }

        /** Represents a s2c_score_receive. */
        class s2c_score_receive implements Is2c_score_receive {

            /**
             * Constructs a new s2c_score_receive.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Is2c_score_receive);

            /** s2c_score_receive err. */
            public err: number;

            /** s2c_score_receive score. */
            public score?: (chest.IScoreInfo|null);

            /**
             * Creates a new s2c_score_receive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_score_receive instance
             */
            public static create(properties?: chest.Is2c_score_receive): chest.s2c_score_receive;

            /**
             * Encodes the specified s2c_score_receive message. Does not implicitly {@link chest.s2c_score_receive.verify|verify} messages.
             * @param message s2c_score_receive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Is2c_score_receive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_score_receive message, length delimited. Does not implicitly {@link chest.s2c_score_receive.verify|verify} messages.
             * @param message s2c_score_receive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Is2c_score_receive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_score_receive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_score_receive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_score_receive;

            /**
             * Decodes a s2c_score_receive message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_score_receive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_score_receive;

            /**
             * Verifies a s2c_score_receive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_score_receive message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_score_receive
             */
            public static fromObject(object: { [k: string]: any }): chest.s2c_score_receive;

            /**
             * Creates a plain object from a s2c_score_receive message. Also converts values to other types if specified.
             * @param message s2c_score_receive
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.s2c_score_receive, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_score_receive to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_score_receive
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_switch_hero. */
        interface Ic2s_switch_hero {

            /** c2s_switch_hero heroId */
            heroId?: (number|null);
        }

        /** Represents a c2s_switch_hero. */
        class c2s_switch_hero implements Ic2s_switch_hero {

            /**
             * Constructs a new c2s_switch_hero.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Ic2s_switch_hero);

            /** c2s_switch_hero heroId. */
            public heroId: number;

            /**
             * Creates a new c2s_switch_hero instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_switch_hero instance
             */
            public static create(properties?: chest.Ic2s_switch_hero): chest.c2s_switch_hero;

            /**
             * Encodes the specified c2s_switch_hero message. Does not implicitly {@link chest.c2s_switch_hero.verify|verify} messages.
             * @param message c2s_switch_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Ic2s_switch_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_switch_hero message, length delimited. Does not implicitly {@link chest.c2s_switch_hero.verify|verify} messages.
             * @param message c2s_switch_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Ic2s_switch_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_switch_hero message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_switch_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.c2s_switch_hero;

            /**
             * Decodes a c2s_switch_hero message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_switch_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.c2s_switch_hero;

            /**
             * Verifies a c2s_switch_hero message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_switch_hero message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_switch_hero
             */
            public static fromObject(object: { [k: string]: any }): chest.c2s_switch_hero;

            /**
             * Creates a plain object from a c2s_switch_hero message. Also converts values to other types if specified.
             * @param message c2s_switch_hero
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.c2s_switch_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_switch_hero to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_switch_hero
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_switch_hero. */
        interface Is2c_switch_hero {

            /** s2c_switch_hero err */
            err?: (number|null);
        }

        /** Represents a s2c_switch_hero. */
        class s2c_switch_hero implements Is2c_switch_hero {

            /**
             * Constructs a new s2c_switch_hero.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Is2c_switch_hero);

            /** s2c_switch_hero err. */
            public err: number;

            /**
             * Creates a new s2c_switch_hero instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_switch_hero instance
             */
            public static create(properties?: chest.Is2c_switch_hero): chest.s2c_switch_hero;

            /**
             * Encodes the specified s2c_switch_hero message. Does not implicitly {@link chest.s2c_switch_hero.verify|verify} messages.
             * @param message s2c_switch_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Is2c_switch_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_switch_hero message, length delimited. Does not implicitly {@link chest.s2c_switch_hero.verify|verify} messages.
             * @param message s2c_switch_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Is2c_switch_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_switch_hero message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_switch_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.s2c_switch_hero;

            /**
             * Decodes a s2c_switch_hero message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_switch_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.s2c_switch_hero;

            /**
             * Verifies a s2c_switch_hero message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_switch_hero message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_switch_hero
             */
            public static fromObject(object: { [k: string]: any }): chest.s2c_switch_hero;

            /**
             * Creates a plain object from a s2c_switch_hero message. Also converts values to other types if specified.
             * @param message s2c_switch_hero
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.s2c_switch_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_switch_hero to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_switch_hero
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify_chest. */
        interface Inotify_chest {

            /** notify_chest chests */
            chests?: (chest.IChestInfo[]|null);

            /** notify_chest score */
            score?: (chest.IScoreInfo|null);
        }

        /** Represents a notify_chest. */
        class notify_chest implements Inotify_chest {

            /**
             * Constructs a new notify_chest.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Inotify_chest);

            /** notify_chest chests. */
            public chests: chest.IChestInfo[];

            /** notify_chest score. */
            public score?: (chest.IScoreInfo|null);

            /**
             * Creates a new notify_chest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_chest instance
             */
            public static create(properties?: chest.Inotify_chest): chest.notify_chest;

            /**
             * Encodes the specified notify_chest message. Does not implicitly {@link chest.notify_chest.verify|verify} messages.
             * @param message notify_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Inotify_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_chest message, length delimited. Does not implicitly {@link chest.notify_chest.verify|verify} messages.
             * @param message notify_chest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Inotify_chest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_chest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.notify_chest;

            /**
             * Decodes a notify_chest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_chest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.notify_chest;

            /**
             * Verifies a notify_chest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify_chest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify_chest
             */
            public static fromObject(object: { [k: string]: any }): chest.notify_chest;

            /**
             * Creates a plain object from a notify_chest message. Also converts values to other types if specified.
             * @param message notify_chest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.notify_chest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify_chest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify_chest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify_chest_hero. */
        interface Inotify_chest_hero {

            /** notify_chest_hero heroIds */
            heroIds?: (number[]|null);
        }

        /** Represents a notify_chest_hero. */
        class notify_chest_hero implements Inotify_chest_hero {

            /**
             * Constructs a new notify_chest_hero.
             * @param [properties] Properties to set
             */
            constructor(properties?: chest.Inotify_chest_hero);

            /** notify_chest_hero heroIds. */
            public heroIds: number[];

            /**
             * Creates a new notify_chest_hero instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_chest_hero instance
             */
            public static create(properties?: chest.Inotify_chest_hero): chest.notify_chest_hero;

            /**
             * Encodes the specified notify_chest_hero message. Does not implicitly {@link chest.notify_chest_hero.verify|verify} messages.
             * @param message notify_chest_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chest.Inotify_chest_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_chest_hero message, length delimited. Does not implicitly {@link chest.notify_chest_hero.verify|verify} messages.
             * @param message notify_chest_hero message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chest.Inotify_chest_hero, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_chest_hero message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_chest_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chest.notify_chest_hero;

            /**
             * Decodes a notify_chest_hero message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_chest_hero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chest.notify_chest_hero;

            /**
             * Verifies a notify_chest_hero message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify_chest_hero message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify_chest_hero
             */
            public static fromObject(object: { [k: string]: any }): chest.notify_chest_hero;

            /**
             * Creates a plain object from a notify_chest_hero message. Also converts values to other types if specified.
             * @param message notify_chest_hero
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chest.notify_chest_hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify_chest_hero to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify_chest_hero
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

    /** Namespace soldier. */
    namespace soldier {

        /** Properties of a SoldierInfo. */
        interface ISoldierInfo {

            /** SoldierInfo id */
            id?: (number|null);

            /** SoldierInfo lv */
            lv?: (number|null);

            /** SoldierInfo attrs */
            attrs?: ({ [k: string]: number }|null);
        }

        /** Represents a SoldierInfo. */
        class SoldierInfo implements ISoldierInfo {

            /**
             * Constructs a new SoldierInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.ISoldierInfo);

            /** SoldierInfo id. */
            public id: number;

            /** SoldierInfo lv. */
            public lv: number;

            /** SoldierInfo attrs. */
            public attrs: { [k: string]: number };

            /**
             * Creates a new SoldierInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SoldierInfo instance
             */
            public static create(properties?: soldier.ISoldierInfo): soldier.SoldierInfo;

            /**
             * Encodes the specified SoldierInfo message. Does not implicitly {@link soldier.SoldierInfo.verify|verify} messages.
             * @param message SoldierInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.ISoldierInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SoldierInfo message, length delimited. Does not implicitly {@link soldier.SoldierInfo.verify|verify} messages.
             * @param message SoldierInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.ISoldierInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SoldierInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SoldierInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.SoldierInfo;

            /**
             * Decodes a SoldierInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SoldierInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.SoldierInfo;

            /**
             * Verifies a SoldierInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SoldierInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SoldierInfo
             */
            public static fromObject(object: { [k: string]: any }): soldier.SoldierInfo;

            /**
             * Creates a plain object from a SoldierInfo message. Also converts values to other types if specified.
             * @param message SoldierInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.SoldierInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SoldierInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SoldierInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PendantInfo. */
        interface IPendantInfo {

            /** PendantInfo id */
            id?: (number|null);

            /** PendantInfo lv */
            lv?: (number|null);
        }

        /** Represents a PendantInfo. */
        class PendantInfo implements IPendantInfo {

            /**
             * Constructs a new PendantInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.IPendantInfo);

            /** PendantInfo id. */
            public id: number;

            /** PendantInfo lv. */
            public lv: number;

            /**
             * Creates a new PendantInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendantInfo instance
             */
            public static create(properties?: soldier.IPendantInfo): soldier.PendantInfo;

            /**
             * Encodes the specified PendantInfo message. Does not implicitly {@link soldier.PendantInfo.verify|verify} messages.
             * @param message PendantInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.IPendantInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendantInfo message, length delimited. Does not implicitly {@link soldier.PendantInfo.verify|verify} messages.
             * @param message PendantInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.IPendantInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendantInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendantInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.PendantInfo;

            /**
             * Decodes a PendantInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendantInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.PendantInfo;

            /**
             * Verifies a PendantInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendantInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendantInfo
             */
            public static fromObject(object: { [k: string]: any }): soldier.PendantInfo;

            /**
             * Creates a plain object from a PendantInfo message. Also converts values to other types if specified.
             * @param message PendantInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.PendantInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendantInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PendantInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TrainInfo. */
        interface ITrainInfo {

            /** TrainInfo id */
            id?: (number|null);

            /** TrainInfo lv */
            lv?: (number|null);
        }

        /** Represents a TrainInfo. */
        class TrainInfo implements ITrainInfo {

            /**
             * Constructs a new TrainInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.ITrainInfo);

            /** TrainInfo id. */
            public id: number;

            /** TrainInfo lv. */
            public lv: number;

            /**
             * Creates a new TrainInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TrainInfo instance
             */
            public static create(properties?: soldier.ITrainInfo): soldier.TrainInfo;

            /**
             * Encodes the specified TrainInfo message. Does not implicitly {@link soldier.TrainInfo.verify|verify} messages.
             * @param message TrainInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.ITrainInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TrainInfo message, length delimited. Does not implicitly {@link soldier.TrainInfo.verify|verify} messages.
             * @param message TrainInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.ITrainInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TrainInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TrainInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.TrainInfo;

            /**
             * Decodes a TrainInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TrainInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.TrainInfo;

            /**
             * Verifies a TrainInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TrainInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TrainInfo
             */
            public static fromObject(object: { [k: string]: any }): soldier.TrainInfo;

            /**
             * Creates a plain object from a TrainInfo message. Also converts values to other types if specified.
             * @param message TrainInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.TrainInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TrainInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TrainInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load_soldier. */
        interface Ic2s_load_soldier {
        }

        /** Represents a c2s_load_soldier. */
        class c2s_load_soldier implements Ic2s_load_soldier {

            /**
             * Constructs a new c2s_load_soldier.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_load_soldier);

            /**
             * Creates a new c2s_load_soldier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load_soldier instance
             */
            public static create(properties?: soldier.Ic2s_load_soldier): soldier.c2s_load_soldier;

            /**
             * Encodes the specified c2s_load_soldier message. Does not implicitly {@link soldier.c2s_load_soldier.verify|verify} messages.
             * @param message c2s_load_soldier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_load_soldier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load_soldier message, length delimited. Does not implicitly {@link soldier.c2s_load_soldier.verify|verify} messages.
             * @param message c2s_load_soldier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_load_soldier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load_soldier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load_soldier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_load_soldier;

            /**
             * Decodes a c2s_load_soldier message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load_soldier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_load_soldier;

            /**
             * Verifies a c2s_load_soldier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_load_soldier message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_load_soldier
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_load_soldier;

            /**
             * Creates a plain object from a c2s_load_soldier message. Also converts values to other types if specified.
             * @param message c2s_load_soldier
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_load_soldier, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_load_soldier to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_load_soldier
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_load_soldier. */
        interface Is2c_load_soldier {

            /** s2c_load_soldier err */
            err?: (number|null);

            /** s2c_load_soldier soldiers */
            soldiers?: (soldier.ISoldierInfo[]|null);
        }

        /** Represents a s2c_load_soldier. */
        class s2c_load_soldier implements Is2c_load_soldier {

            /**
             * Constructs a new s2c_load_soldier.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_load_soldier);

            /** s2c_load_soldier err. */
            public err: number;

            /** s2c_load_soldier soldiers. */
            public soldiers: soldier.ISoldierInfo[];

            /**
             * Creates a new s2c_load_soldier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load_soldier instance
             */
            public static create(properties?: soldier.Is2c_load_soldier): soldier.s2c_load_soldier;

            /**
             * Encodes the specified s2c_load_soldier message. Does not implicitly {@link soldier.s2c_load_soldier.verify|verify} messages.
             * @param message s2c_load_soldier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_load_soldier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load_soldier message, length delimited. Does not implicitly {@link soldier.s2c_load_soldier.verify|verify} messages.
             * @param message s2c_load_soldier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_load_soldier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load_soldier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load_soldier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_load_soldier;

            /**
             * Decodes a s2c_load_soldier message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load_soldier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_load_soldier;

            /**
             * Verifies a s2c_load_soldier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_load_soldier message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_load_soldier
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_load_soldier;

            /**
             * Creates a plain object from a s2c_load_soldier message. Also converts values to other types if specified.
             * @param message s2c_load_soldier
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_load_soldier, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_load_soldier to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_load_soldier
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load_pendant. */
        interface Ic2s_load_pendant {
        }

        /** Represents a c2s_load_pendant. */
        class c2s_load_pendant implements Ic2s_load_pendant {

            /**
             * Constructs a new c2s_load_pendant.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_load_pendant);

            /**
             * Creates a new c2s_load_pendant instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load_pendant instance
             */
            public static create(properties?: soldier.Ic2s_load_pendant): soldier.c2s_load_pendant;

            /**
             * Encodes the specified c2s_load_pendant message. Does not implicitly {@link soldier.c2s_load_pendant.verify|verify} messages.
             * @param message c2s_load_pendant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_load_pendant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load_pendant message, length delimited. Does not implicitly {@link soldier.c2s_load_pendant.verify|verify} messages.
             * @param message c2s_load_pendant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_load_pendant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load_pendant message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load_pendant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_load_pendant;

            /**
             * Decodes a c2s_load_pendant message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load_pendant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_load_pendant;

            /**
             * Verifies a c2s_load_pendant message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_load_pendant message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_load_pendant
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_load_pendant;

            /**
             * Creates a plain object from a c2s_load_pendant message. Also converts values to other types if specified.
             * @param message c2s_load_pendant
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_load_pendant, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_load_pendant to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_load_pendant
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_load_pendant. */
        interface Is2c_load_pendant {

            /** s2c_load_pendant err */
            err?: (number|null);

            /** s2c_load_pendant pendants */
            pendants?: (soldier.IPendantInfo[]|null);
        }

        /** Represents a s2c_load_pendant. */
        class s2c_load_pendant implements Is2c_load_pendant {

            /**
             * Constructs a new s2c_load_pendant.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_load_pendant);

            /** s2c_load_pendant err. */
            public err: number;

            /** s2c_load_pendant pendants. */
            public pendants: soldier.IPendantInfo[];

            /**
             * Creates a new s2c_load_pendant instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load_pendant instance
             */
            public static create(properties?: soldier.Is2c_load_pendant): soldier.s2c_load_pendant;

            /**
             * Encodes the specified s2c_load_pendant message. Does not implicitly {@link soldier.s2c_load_pendant.verify|verify} messages.
             * @param message s2c_load_pendant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_load_pendant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load_pendant message, length delimited. Does not implicitly {@link soldier.s2c_load_pendant.verify|verify} messages.
             * @param message s2c_load_pendant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_load_pendant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load_pendant message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load_pendant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_load_pendant;

            /**
             * Decodes a s2c_load_pendant message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load_pendant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_load_pendant;

            /**
             * Verifies a s2c_load_pendant message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_load_pendant message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_load_pendant
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_load_pendant;

            /**
             * Creates a plain object from a s2c_load_pendant message. Also converts values to other types if specified.
             * @param message s2c_load_pendant
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_load_pendant, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_load_pendant to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_load_pendant
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_load_train. */
        interface Ic2s_load_train {
        }

        /** Represents a c2s_load_train. */
        class c2s_load_train implements Ic2s_load_train {

            /**
             * Constructs a new c2s_load_train.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_load_train);

            /**
             * Creates a new c2s_load_train instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_load_train instance
             */
            public static create(properties?: soldier.Ic2s_load_train): soldier.c2s_load_train;

            /**
             * Encodes the specified c2s_load_train message. Does not implicitly {@link soldier.c2s_load_train.verify|verify} messages.
             * @param message c2s_load_train message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_load_train, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_load_train message, length delimited. Does not implicitly {@link soldier.c2s_load_train.verify|verify} messages.
             * @param message c2s_load_train message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_load_train, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_load_train message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_load_train
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_load_train;

            /**
             * Decodes a c2s_load_train message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_load_train
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_load_train;

            /**
             * Verifies a c2s_load_train message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_load_train message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_load_train
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_load_train;

            /**
             * Creates a plain object from a c2s_load_train message. Also converts values to other types if specified.
             * @param message c2s_load_train
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_load_train, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_load_train to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_load_train
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_load_train. */
        interface Is2c_load_train {

            /** s2c_load_train err */
            err?: (number|null);

            /** s2c_load_train trains */
            trains?: (soldier.ITrainInfo[]|null);
        }

        /** Represents a s2c_load_train. */
        class s2c_load_train implements Is2c_load_train {

            /**
             * Constructs a new s2c_load_train.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_load_train);

            /** s2c_load_train err. */
            public err: number;

            /** s2c_load_train trains. */
            public trains: soldier.ITrainInfo[];

            /**
             * Creates a new s2c_load_train instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_load_train instance
             */
            public static create(properties?: soldier.Is2c_load_train): soldier.s2c_load_train;

            /**
             * Encodes the specified s2c_load_train message. Does not implicitly {@link soldier.s2c_load_train.verify|verify} messages.
             * @param message s2c_load_train message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_load_train, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_load_train message, length delimited. Does not implicitly {@link soldier.s2c_load_train.verify|verify} messages.
             * @param message s2c_load_train message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_load_train, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_load_train message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_load_train
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_load_train;

            /**
             * Decodes a s2c_load_train message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_load_train
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_load_train;

            /**
             * Verifies a s2c_load_train message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_load_train message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_load_train
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_load_train;

            /**
             * Creates a plain object from a s2c_load_train message. Also converts values to other types if specified.
             * @param message s2c_load_train
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_load_train, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_load_train to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_load_train
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_soldier_upgrade. */
        interface Ic2s_soldier_upgrade {

            /** c2s_soldier_upgrade id */
            id?: (number|null);
        }

        /** Represents a c2s_soldier_upgrade. */
        class c2s_soldier_upgrade implements Ic2s_soldier_upgrade {

            /**
             * Constructs a new c2s_soldier_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_soldier_upgrade);

            /** c2s_soldier_upgrade id. */
            public id: number;

            /**
             * Creates a new c2s_soldier_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_soldier_upgrade instance
             */
            public static create(properties?: soldier.Ic2s_soldier_upgrade): soldier.c2s_soldier_upgrade;

            /**
             * Encodes the specified c2s_soldier_upgrade message. Does not implicitly {@link soldier.c2s_soldier_upgrade.verify|verify} messages.
             * @param message c2s_soldier_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_soldier_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_soldier_upgrade message, length delimited. Does not implicitly {@link soldier.c2s_soldier_upgrade.verify|verify} messages.
             * @param message c2s_soldier_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_soldier_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_soldier_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_soldier_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_soldier_upgrade;

            /**
             * Decodes a c2s_soldier_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_soldier_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_soldier_upgrade;

            /**
             * Verifies a c2s_soldier_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_soldier_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_soldier_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_soldier_upgrade;

            /**
             * Creates a plain object from a c2s_soldier_upgrade message. Also converts values to other types if specified.
             * @param message c2s_soldier_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_soldier_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_soldier_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_soldier_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_soldier_upgrade. */
        interface Is2c_soldier_upgrade {

            /** s2c_soldier_upgrade err */
            err?: (number|null);

            /** s2c_soldier_upgrade soldier */
            soldier?: (soldier.ISoldierInfo|null);
        }

        /** Represents a s2c_soldier_upgrade. */
        class s2c_soldier_upgrade implements Is2c_soldier_upgrade {

            /**
             * Constructs a new s2c_soldier_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_soldier_upgrade);

            /** s2c_soldier_upgrade err. */
            public err: number;

            /** s2c_soldier_upgrade soldier. */
            public soldier?: (soldier.ISoldierInfo|null);

            /**
             * Creates a new s2c_soldier_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_soldier_upgrade instance
             */
            public static create(properties?: soldier.Is2c_soldier_upgrade): soldier.s2c_soldier_upgrade;

            /**
             * Encodes the specified s2c_soldier_upgrade message. Does not implicitly {@link soldier.s2c_soldier_upgrade.verify|verify} messages.
             * @param message s2c_soldier_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_soldier_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_soldier_upgrade message, length delimited. Does not implicitly {@link soldier.s2c_soldier_upgrade.verify|verify} messages.
             * @param message s2c_soldier_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_soldier_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_soldier_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_soldier_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_soldier_upgrade;

            /**
             * Decodes a s2c_soldier_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_soldier_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_soldier_upgrade;

            /**
             * Verifies a s2c_soldier_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_soldier_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_soldier_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_soldier_upgrade;

            /**
             * Creates a plain object from a s2c_soldier_upgrade message. Also converts values to other types if specified.
             * @param message s2c_soldier_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_soldier_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_soldier_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_soldier_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_pendant_upgrade. */
        interface Ic2s_pendant_upgrade {

            /** c2s_pendant_upgrade id */
            id?: (number|null);
        }

        /** Represents a c2s_pendant_upgrade. */
        class c2s_pendant_upgrade implements Ic2s_pendant_upgrade {

            /**
             * Constructs a new c2s_pendant_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_pendant_upgrade);

            /** c2s_pendant_upgrade id. */
            public id: number;

            /**
             * Creates a new c2s_pendant_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_pendant_upgrade instance
             */
            public static create(properties?: soldier.Ic2s_pendant_upgrade): soldier.c2s_pendant_upgrade;

            /**
             * Encodes the specified c2s_pendant_upgrade message. Does not implicitly {@link soldier.c2s_pendant_upgrade.verify|verify} messages.
             * @param message c2s_pendant_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_pendant_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_pendant_upgrade message, length delimited. Does not implicitly {@link soldier.c2s_pendant_upgrade.verify|verify} messages.
             * @param message c2s_pendant_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_pendant_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_pendant_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_pendant_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_pendant_upgrade;

            /**
             * Decodes a c2s_pendant_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_pendant_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_pendant_upgrade;

            /**
             * Verifies a c2s_pendant_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_pendant_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_pendant_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_pendant_upgrade;

            /**
             * Creates a plain object from a c2s_pendant_upgrade message. Also converts values to other types if specified.
             * @param message c2s_pendant_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_pendant_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_pendant_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_pendant_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_pendant_upgrade. */
        interface Is2c_pendant_upgrade {

            /** s2c_pendant_upgrade err */
            err?: (number|null);
        }

        /** Represents a s2c_pendant_upgrade. */
        class s2c_pendant_upgrade implements Is2c_pendant_upgrade {

            /**
             * Constructs a new s2c_pendant_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_pendant_upgrade);

            /** s2c_pendant_upgrade err. */
            public err: number;

            /**
             * Creates a new s2c_pendant_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_pendant_upgrade instance
             */
            public static create(properties?: soldier.Is2c_pendant_upgrade): soldier.s2c_pendant_upgrade;

            /**
             * Encodes the specified s2c_pendant_upgrade message. Does not implicitly {@link soldier.s2c_pendant_upgrade.verify|verify} messages.
             * @param message s2c_pendant_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_pendant_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_pendant_upgrade message, length delimited. Does not implicitly {@link soldier.s2c_pendant_upgrade.verify|verify} messages.
             * @param message s2c_pendant_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_pendant_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_pendant_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_pendant_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_pendant_upgrade;

            /**
             * Decodes a s2c_pendant_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_pendant_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_pendant_upgrade;

            /**
             * Verifies a s2c_pendant_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_pendant_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_pendant_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_pendant_upgrade;

            /**
             * Creates a plain object from a s2c_pendant_upgrade message. Also converts values to other types if specified.
             * @param message s2c_pendant_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_pendant_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_pendant_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_pendant_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a c2s_train_upgrade. */
        interface Ic2s_train_upgrade {

            /** c2s_train_upgrade id */
            id?: (number|null);

            /** c2s_train_upgrade num */
            num?: (number|null);
        }

        /** Represents a c2s_train_upgrade. */
        class c2s_train_upgrade implements Ic2s_train_upgrade {

            /**
             * Constructs a new c2s_train_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Ic2s_train_upgrade);

            /** c2s_train_upgrade id. */
            public id: number;

            /** c2s_train_upgrade num. */
            public num: number;

            /**
             * Creates a new c2s_train_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_train_upgrade instance
             */
            public static create(properties?: soldier.Ic2s_train_upgrade): soldier.c2s_train_upgrade;

            /**
             * Encodes the specified c2s_train_upgrade message. Does not implicitly {@link soldier.c2s_train_upgrade.verify|verify} messages.
             * @param message c2s_train_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Ic2s_train_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_train_upgrade message, length delimited. Does not implicitly {@link soldier.c2s_train_upgrade.verify|verify} messages.
             * @param message c2s_train_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Ic2s_train_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_train_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_train_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.c2s_train_upgrade;

            /**
             * Decodes a c2s_train_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_train_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.c2s_train_upgrade;

            /**
             * Verifies a c2s_train_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_train_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_train_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.c2s_train_upgrade;

            /**
             * Creates a plain object from a c2s_train_upgrade message. Also converts values to other types if specified.
             * @param message c2s_train_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.c2s_train_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_train_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_train_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_train_upgrade. */
        interface Is2c_train_upgrade {

            /** s2c_train_upgrade err */
            err?: (number|null);
        }

        /** Represents a s2c_train_upgrade. */
        class s2c_train_upgrade implements Is2c_train_upgrade {

            /**
             * Constructs a new s2c_train_upgrade.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Is2c_train_upgrade);

            /** s2c_train_upgrade err. */
            public err: number;

            /**
             * Creates a new s2c_train_upgrade instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_train_upgrade instance
             */
            public static create(properties?: soldier.Is2c_train_upgrade): soldier.s2c_train_upgrade;

            /**
             * Encodes the specified s2c_train_upgrade message. Does not implicitly {@link soldier.s2c_train_upgrade.verify|verify} messages.
             * @param message s2c_train_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Is2c_train_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_train_upgrade message, length delimited. Does not implicitly {@link soldier.s2c_train_upgrade.verify|verify} messages.
             * @param message s2c_train_upgrade message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Is2c_train_upgrade, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_train_upgrade message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_train_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.s2c_train_upgrade;

            /**
             * Decodes a s2c_train_upgrade message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_train_upgrade
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.s2c_train_upgrade;

            /**
             * Verifies a s2c_train_upgrade message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_train_upgrade message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_train_upgrade
             */
            public static fromObject(object: { [k: string]: any }): soldier.s2c_train_upgrade;

            /**
             * Creates a plain object from a s2c_train_upgrade message. Also converts values to other types if specified.
             * @param message s2c_train_upgrade
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.s2c_train_upgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_train_upgrade to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_train_upgrade
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify_pendants. */
        interface Inotify_pendants {

            /** notify_pendants pendants */
            pendants?: (soldier.IPendantInfo[]|null);
        }

        /** Represents a notify_pendants. */
        class notify_pendants implements Inotify_pendants {

            /**
             * Constructs a new notify_pendants.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Inotify_pendants);

            /** notify_pendants pendants. */
            public pendants: soldier.IPendantInfo[];

            /**
             * Creates a new notify_pendants instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_pendants instance
             */
            public static create(properties?: soldier.Inotify_pendants): soldier.notify_pendants;

            /**
             * Encodes the specified notify_pendants message. Does not implicitly {@link soldier.notify_pendants.verify|verify} messages.
             * @param message notify_pendants message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Inotify_pendants, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_pendants message, length delimited. Does not implicitly {@link soldier.notify_pendants.verify|verify} messages.
             * @param message notify_pendants message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Inotify_pendants, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_pendants message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_pendants
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.notify_pendants;

            /**
             * Decodes a notify_pendants message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_pendants
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.notify_pendants;

            /**
             * Verifies a notify_pendants message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify_pendants message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify_pendants
             */
            public static fromObject(object: { [k: string]: any }): soldier.notify_pendants;

            /**
             * Creates a plain object from a notify_pendants message. Also converts values to other types if specified.
             * @param message notify_pendants
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.notify_pendants, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify_pendants to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify_pendants
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a notify_slodiers. */
        interface Inotify_slodiers {

            /** notify_slodiers soldiers */
            soldiers?: (soldier.ISoldierInfo[]|null);
        }

        /** Represents a notify_slodiers. */
        class notify_slodiers implements Inotify_slodiers {

            /**
             * Constructs a new notify_slodiers.
             * @param [properties] Properties to set
             */
            constructor(properties?: soldier.Inotify_slodiers);

            /** notify_slodiers soldiers. */
            public soldiers: soldier.ISoldierInfo[];

            /**
             * Creates a new notify_slodiers instance using the specified properties.
             * @param [properties] Properties to set
             * @returns notify_slodiers instance
             */
            public static create(properties?: soldier.Inotify_slodiers): soldier.notify_slodiers;

            /**
             * Encodes the specified notify_slodiers message. Does not implicitly {@link soldier.notify_slodiers.verify|verify} messages.
             * @param message notify_slodiers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: soldier.Inotify_slodiers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified notify_slodiers message, length delimited. Does not implicitly {@link soldier.notify_slodiers.verify|verify} messages.
             * @param message notify_slodiers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: soldier.Inotify_slodiers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a notify_slodiers message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns notify_slodiers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soldier.notify_slodiers;

            /**
             * Decodes a notify_slodiers message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns notify_slodiers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soldier.notify_slodiers;

            /**
             * Verifies a notify_slodiers message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a notify_slodiers message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns notify_slodiers
             */
            public static fromObject(object: { [k: string]: any }): soldier.notify_slodiers;

            /**
             * Creates a plain object from a notify_slodiers message. Also converts values to other types if specified.
             * @param message notify_slodiers
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: soldier.notify_slodiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this notify_slodiers to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for notify_slodiers
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

            /** TroopComponent insideEid */
            insideEid?: (number|null);

            /** TroopComponent homeEid */
            homeEid?: (number|null);

            /** TroopComponent battleEid */
            battleEid?: (number|null);

            /** TroopComponent maxHp */
            maxHp?: (number|null);

            /** TroopComponent hp */
            hp?: (number|null);

            /** TroopComponent state */
            state?: (number|null);
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

            /** TroopComponent insideEid. */
            public insideEid: number;

            /** TroopComponent homeEid. */
            public homeEid: number;

            /** TroopComponent battleEid. */
            public battleEid: number;

            /** TroopComponent maxHp. */
            public maxHp: number;

            /** TroopComponent hp. */
            public hp: number;

            /** TroopComponent state. */
            public state: number;

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
            path?: (world.IPosition[]|null);

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
            public path: world.IPosition[];

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

            /** BagComponent touchEid */
            touchEid?: (number|null);
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

            /** BagComponent touchEid. */
            public touchEid: number;

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

            /** s2c_load homeEid */
            homeEid?: (number|null);

            /** s2c_load homePos */
            homePos?: (world.IPosition|null);
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

            /** s2c_load homeEid. */
            public homeEid: number;

            /** s2c_load homePos. */
            public homePos?: (world.IPosition|null);

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

        /** Properties of a c2s_troop_retreat. */
        interface Ic2s_troop_retreat {

            /** c2s_troop_retreat troopEid */
            troopEid?: (number|null);
        }

        /** Represents a c2s_troop_retreat. */
        class c2s_troop_retreat implements Ic2s_troop_retreat {

            /**
             * Constructs a new c2s_troop_retreat.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Ic2s_troop_retreat);

            /** c2s_troop_retreat troopEid. */
            public troopEid: number;

            /**
             * Creates a new c2s_troop_retreat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c2s_troop_retreat instance
             */
            public static create(properties?: world.Ic2s_troop_retreat): world.c2s_troop_retreat;

            /**
             * Encodes the specified c2s_troop_retreat message. Does not implicitly {@link world.c2s_troop_retreat.verify|verify} messages.
             * @param message c2s_troop_retreat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Ic2s_troop_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified c2s_troop_retreat message, length delimited. Does not implicitly {@link world.c2s_troop_retreat.verify|verify} messages.
             * @param message c2s_troop_retreat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Ic2s_troop_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a c2s_troop_retreat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c2s_troop_retreat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.c2s_troop_retreat;

            /**
             * Decodes a c2s_troop_retreat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c2s_troop_retreat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.c2s_troop_retreat;

            /**
             * Verifies a c2s_troop_retreat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a c2s_troop_retreat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns c2s_troop_retreat
             */
            public static fromObject(object: { [k: string]: any }): world.c2s_troop_retreat;

            /**
             * Creates a plain object from a c2s_troop_retreat message. Also converts values to other types if specified.
             * @param message c2s_troop_retreat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.c2s_troop_retreat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this c2s_troop_retreat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for c2s_troop_retreat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a s2c_troop_retreat. */
        interface Is2c_troop_retreat {

            /** s2c_troop_retreat err */
            err?: (number|null);
        }

        /** Represents a s2c_troop_retreat. */
        class s2c_troop_retreat implements Is2c_troop_retreat {

            /**
             * Constructs a new s2c_troop_retreat.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.Is2c_troop_retreat);

            /** s2c_troop_retreat err. */
            public err: number;

            /**
             * Creates a new s2c_troop_retreat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s2c_troop_retreat instance
             */
            public static create(properties?: world.Is2c_troop_retreat): world.s2c_troop_retreat;

            /**
             * Encodes the specified s2c_troop_retreat message. Does not implicitly {@link world.s2c_troop_retreat.verify|verify} messages.
             * @param message s2c_troop_retreat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.Is2c_troop_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified s2c_troop_retreat message, length delimited. Does not implicitly {@link world.s2c_troop_retreat.verify|verify} messages.
             * @param message s2c_troop_retreat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.Is2c_troop_retreat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a s2c_troop_retreat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s2c_troop_retreat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.s2c_troop_retreat;

            /**
             * Decodes a s2c_troop_retreat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s2c_troop_retreat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.s2c_troop_retreat;

            /**
             * Verifies a s2c_troop_retreat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a s2c_troop_retreat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns s2c_troop_retreat
             */
            public static fromObject(object: { [k: string]: any }): world.s2c_troop_retreat;

            /**
             * Creates a plain object from a s2c_troop_retreat message. Also converts values to other types if specified.
             * @param message s2c_troop_retreat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.s2c_troop_retreat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this s2c_troop_retreat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for s2c_troop_retreat
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
            path?: (world.IPosition[]|null);

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
            public path: world.IPosition[];

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

        /** Properties of a StartBattleAction. */
        interface IStartBattleAction {

            /** StartBattleAction battleUid */
            battleUid?: (number|null);

            /** StartBattleAction troopEids */
            troopEids?: (number[]|null);
        }

        /** Represents a StartBattleAction. */
        class StartBattleAction implements IStartBattleAction {

            /**
             * Constructs a new StartBattleAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IStartBattleAction);

            /** StartBattleAction battleUid. */
            public battleUid: number;

            /** StartBattleAction troopEids. */
            public troopEids: number[];

            /**
             * Creates a new StartBattleAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartBattleAction instance
             */
            public static create(properties?: world.IStartBattleAction): world.StartBattleAction;

            /**
             * Encodes the specified StartBattleAction message. Does not implicitly {@link world.StartBattleAction.verify|verify} messages.
             * @param message StartBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IStartBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartBattleAction message, length delimited. Does not implicitly {@link world.StartBattleAction.verify|verify} messages.
             * @param message StartBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IStartBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartBattleAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.StartBattleAction;

            /**
             * Decodes a StartBattleAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.StartBattleAction;

            /**
             * Verifies a StartBattleAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartBattleAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartBattleAction
             */
            public static fromObject(object: { [k: string]: any }): world.StartBattleAction;

            /**
             * Creates a plain object from a StartBattleAction message. Also converts values to other types if specified.
             * @param message StartBattleAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.StartBattleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartBattleAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartBattleAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveBattleAction. */
        interface ILeaveBattleAction {

            /** LeaveBattleAction battleUid */
            battleUid?: (number|null);

            /** LeaveBattleAction troopEids */
            troopEids?: (number[]|null);
        }

        /** Represents a LeaveBattleAction. */
        class LeaveBattleAction implements ILeaveBattleAction {

            /**
             * Constructs a new LeaveBattleAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.ILeaveBattleAction);

            /** LeaveBattleAction battleUid. */
            public battleUid: number;

            /** LeaveBattleAction troopEids. */
            public troopEids: number[];

            /**
             * Creates a new LeaveBattleAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveBattleAction instance
             */
            public static create(properties?: world.ILeaveBattleAction): world.LeaveBattleAction;

            /**
             * Encodes the specified LeaveBattleAction message. Does not implicitly {@link world.LeaveBattleAction.verify|verify} messages.
             * @param message LeaveBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.ILeaveBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveBattleAction message, length delimited. Does not implicitly {@link world.LeaveBattleAction.verify|verify} messages.
             * @param message LeaveBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.ILeaveBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveBattleAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.LeaveBattleAction;

            /**
             * Decodes a LeaveBattleAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.LeaveBattleAction;

            /**
             * Verifies a LeaveBattleAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveBattleAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveBattleAction
             */
            public static fromObject(object: { [k: string]: any }): world.LeaveBattleAction;

            /**
             * Creates a plain object from a LeaveBattleAction message. Also converts values to other types if specified.
             * @param message LeaveBattleAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.LeaveBattleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveBattleAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveBattleAction
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StopBattleAction. */
        interface IStopBattleAction {

            /** StopBattleAction battleUid */
            battleUid?: (number|null);

            /** StopBattleAction troopEids */
            troopEids?: (number[]|null);
        }

        /** Represents a StopBattleAction. */
        class StopBattleAction implements IStopBattleAction {

            /**
             * Constructs a new StopBattleAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: world.IStopBattleAction);

            /** StopBattleAction battleUid. */
            public battleUid: number;

            /** StopBattleAction troopEids. */
            public troopEids: number[];

            /**
             * Creates a new StopBattleAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopBattleAction instance
             */
            public static create(properties?: world.IStopBattleAction): world.StopBattleAction;

            /**
             * Encodes the specified StopBattleAction message. Does not implicitly {@link world.StopBattleAction.verify|verify} messages.
             * @param message StopBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: world.IStopBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopBattleAction message, length delimited. Does not implicitly {@link world.StopBattleAction.verify|verify} messages.
             * @param message StopBattleAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: world.IStopBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopBattleAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): world.StopBattleAction;

            /**
             * Decodes a StopBattleAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopBattleAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): world.StopBattleAction;

            /**
             * Verifies a StopBattleAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopBattleAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopBattleAction
             */
            public static fromObject(object: { [k: string]: any }): world.StopBattleAction;

            /**
             * Creates a plain object from a StopBattleAction message. Also converts values to other types if specified.
             * @param message StopBattleAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: world.StopBattleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopBattleAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StopBattleAction
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

            /** EntityAction startBattle */
            startBattle?: (world.IStartBattleAction|null);

            /** EntityAction leaveBattle */
            leaveBattle?: (world.ILeaveBattleAction|null);

            /** EntityAction stopBattle */
            stopBattle?: (world.IStopBattleAction|null);
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

            /** EntityAction startBattle. */
            public startBattle?: (world.IStartBattleAction|null);

            /** EntityAction leaveBattle. */
            public leaveBattle?: (world.ILeaveBattleAction|null);

            /** EntityAction stopBattle. */
            public stopBattle?: (world.IStopBattleAction|null);

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
