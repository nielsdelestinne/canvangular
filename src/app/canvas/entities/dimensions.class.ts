export class Dimensions {
    private _width: number;
    private _height: number;

    private constructor() {}

    public static new(): Dimensions {
        return new Dimensions;
    }

    public withWidth(width: number): Dimensions{
        this._width = width;
        return this;
    }

    public withHeight(height: number): Dimensions{
        this._height = height;
        return this;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }
}