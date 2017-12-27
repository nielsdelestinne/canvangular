import {MoveStrategy} from "./move-strategy.interface";
import {Point} from "../../../point.class";
import {Entity} from "../../../entity.interface";

export class MoveSimple implements MoveStrategy {

    move(entity: Entity): Point {
        return Point.new()
            .withX(entity.getPosition().x + entity.getVelocity().xVelocity)
            .withY(entity.getPosition().y + entity.getVelocity().yVelocity);
    }
}