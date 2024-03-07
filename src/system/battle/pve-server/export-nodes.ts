import { b3 } from "../../../core/behavior3/behavior";
import { PveServer } from "./pve-server";

export class ExportNodes extends PveServer {
    constructor() {
        super(null!);
    }

    stringify() {
        const descriptors: b3.ProcessDescriptor[] = [];
        for (const v of this._processResolvers.values()) {
            descriptors.push(v.descriptor);
        }
        descriptors.sort((a, b) => a.name.localeCompare(b.name));
        let str = JSON.stringify(descriptors, null, 2);
        str = str.replace(/"doc": "\\n +/g, '"doc": "');
        str = str.replace(/\\n +/g, "\\n");
        return str;
    }
}
