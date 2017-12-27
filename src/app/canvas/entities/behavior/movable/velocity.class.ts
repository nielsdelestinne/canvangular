export class Velocity {
    private _xVelocity: number;
    private _yVelocity: number;

    private constructor() {}

    public static new(): Velocity {
        return new Velocity();
    }

    public withX(xVelocity: number): Velocity {
        this._xVelocity = xVelocity;
        return this;
    }

    public withY(yVelocity: number): Velocity {
        this._yVelocity = yVelocity;
        return this;
    }

    get xVelocity(): number {
        return this._xVelocity;
    }

    get yVelocity(): number {
        return this._yVelocity;
    }
}