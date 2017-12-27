import {Point} from "./point.class";
import {Drawable} from "./behavior/drawable/drawable.interface";
import {Dimensions} from "./dimensions.class";
import {Movable} from "./behavior/movable/movable.interface";

export interface Entity extends Drawable, Movable {

    getPosition(): Point;
    getDimensions(): Dimensions;



}