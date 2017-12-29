import {MoveStrategy} from "./move-strategy.interface";
import {Point} from "../../../point.class";
import {BaseShape} from "../../../shapes/base/shape.abstract";

export class MoveSimple implements MoveStrategy {

    move(shape: BaseShape): Point {
        return Point.new()
            .withX(shape.getPosition().x + shape.getVelocity().xVelocity)
            .withY(shape.getPosition().y + shape.getVelocity().yVelocity);
    }
}