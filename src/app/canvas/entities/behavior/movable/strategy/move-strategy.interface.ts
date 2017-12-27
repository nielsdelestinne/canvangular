import {Point} from "../../../point.class";
import {MovableShape} from "../../../shapes/movable/movable.shape.class";

export interface MoveStrategy {

    move(shape: MovableShape): Point;

}