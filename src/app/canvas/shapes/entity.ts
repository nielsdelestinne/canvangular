import {Point} from "./point";
import {Drawable} from "./behavior/drawable";
import {Dimensions} from "./dimensions";
import {Movable} from "./behavior/movable";

export interface Entity extends Drawable, Movable {

    getPosition(): Point;
    getDimensions(): Dimensions;



}