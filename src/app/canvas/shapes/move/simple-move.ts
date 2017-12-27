import {MoveStrategy} from "./move-strategy";
import {Point} from "../point";
import {Entity} from "../entity";

export class SimpleMove implements MoveStrategy {

    move(entity: Entity): Point {
        return Point.new()
            .withX(entity.getPosition().x + entity.getVelocity().xVelocity)
            .withY(entity.getPosition().y + entity.getVelocity().yVelocity);
    }
}