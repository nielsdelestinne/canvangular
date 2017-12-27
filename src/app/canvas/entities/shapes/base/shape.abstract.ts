import {Drawable} from "../../behavior/drawable/drawable.interface";
import {CollisionDetectable} from "../../behavior/collision-detectable/collision-detectable.interface";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export interface BaseShape extends Drawable, CollisionDetectable {

    getPosition(): Point;
    setPosition(position: Point): void;
    getDimensions(): Dimensions;
    getColor(): string;
    setColor(color: string): void;

}