const { regClass } = Laya;
import { ImageBarBase } from "./ImageBar.generated";

@regClass()
export class ImageBar extends ImageBarBase {
    private _value: number = 1;

    get value() {
        return this._value;
    }

    set value(v: number) {
        v = Math.max(0, Math.min(1, v));
        if (this._value != v) {
            this._value = v;

            const bitmap = this.graphics as Laya.AutoBitmap;
            bitmap.uv.length = 0;
        }
    }

    override render(ctx: Laya.Context, x: number, y: number): void {
        const bitmap = this.graphics as Laya.AutoBitmap;
        if (bitmap.source && bitmap.uv.length === 0) {
            for (let i = 0; i < bitmap.source.uv.length; i++) {
                bitmap.uv[i] = bitmap.source.uv[i];
            }
            const u0 = bitmap.uv[0];
            const w = (bitmap.uv[2] - u0) * this._value;
            bitmap.uv[2] = u0 + w;
            bitmap.uv[4] = u0 + w;
            bitmap.width = this.width * this._value;
        }
        super.render(ctx, x, y);
    }

    protected override createChildren(): void {
        const bitmap = new Laya.AutoBitmap();
        bitmap.uv = [];
        this.setGraphics(bitmap, true);
    }
}
