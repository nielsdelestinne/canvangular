import {MoveStrategy} from "./move-strategy";
import {Point} from "../point";
import {Entity} from "../entity";

export class SimpleMove implements MoveStrategy{

    move(entity: Entity): Point {
        return {
            x: entity.getPosition().x + entity.getVelocity().xVelocity,
            y: entity.getPosition().y + entity.getVelocity().yVelocity
        }
    }
}