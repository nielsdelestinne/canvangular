export class Point {
    private _x: number;
    private _y: number;

    private constructor() {}

    public static new(): Point {
        return new Point();
    }

    public withX(x: number): Point {
        this._x = x;
        return this;
    }

    public withY(y: number): Point {
        this._y = y;
        return this;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}