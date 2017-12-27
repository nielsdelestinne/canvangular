import {Point} from "../../../point.class";
import {Entity} from "../../../entity.interface";
import {BaseShape} from "../../../shapes/base/shape.abstract";
import {MovableShape} from "../../../shapes/movable/movable.shape.class";

export interface MoveStrategy {

    move(shape: MovableShape): Point;

}