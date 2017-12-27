import {Point} from "../../../point.class";
import {Entity} from "../../../entity.interface";

export interface MoveStrategy {

    move(entity: Entity): Point;

}