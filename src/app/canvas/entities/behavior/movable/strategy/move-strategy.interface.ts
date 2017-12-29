import {Point} from "../../../point.class";
import {BaseShape} from "../../../shapes/base/shape.abstract";

export interface MoveStrategy {

    move(shape: BaseShape): Point;

}