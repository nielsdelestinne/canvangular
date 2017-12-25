import {Point} from "./point";
import {Drawable} from "../behavior/drawables";
import {Movable} from "../behavior/movable";

export interface Shape extends Drawable, Movable {

    getPosition(): Point;

}