import {Point} from "../point";
import {Entity} from "../entity";

export interface MoveStrategy {

    move(entity: Entity): Point;

}