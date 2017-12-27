import {MoveStrategy} from "./move-strategy.interface";
import {Point} from "../../../point.class";
import {MovableShape} from "../../../shapes/movable/movable.shape.class";

export class MoveSimple implements MoveStrategy {

    move(shape: MovableShape): Point {
        return Point.new()
            .withX(shape.position.x + shape.velocity.xVelocity)
            .withY(shape.position.y + shape.velocity.yVelocity);
    }
}