import {Drawable} from "../../behavior/drawable/drawable.interface";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export abstract class BaseShape implements Drawable {

    constructor(protected _position: Point,
                protected _dimensions: Dimensions,
                protected _color: string) {
    }

    abstract draw(context: CanvasRenderingContext2D): void;

    get position(): Point {
        return this._position;
    }

    set position(value: Point) {
        this._position = value;
    }

    get dimensions(): Dimensions {
        return this._dimensions;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}