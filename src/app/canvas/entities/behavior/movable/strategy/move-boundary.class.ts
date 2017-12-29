import {MoveStrategy} from "./move-strategy.interface";
import {Point} from "../../../point.class";
import {WindowService} from "../../../../shared/window/window.service";
import {Velocity} from "../velocity.class";
import {BaseShape} from "../../../shapes/base/shape.abstract";

export class MoveBoundary implements MoveStrategy {

    move(shape: BaseShape): Point {
        this.AdjustVelocity(shape);
        return Point.new()
            .withX(shape.getPosition().x + shape.getVelocity().xVelocity)
            .withY(shape.getPosition().y + shape.getVelocity().yVelocity);
    }

    private AdjustVelocity(shape: BaseShape) {
        shape.setVelocity(Velocity.new().withX(this.calculateXVelocity(shape)).withY(this.calculateYVelocity(shape)));
    }

    private calculateXVelocity(shape: BaseShape): number {
        const newX = shape.getPosition().x + shape.getVelocity().xVelocity;
        if (this.isLeftBoundaryCrossed(newX) || this.isRightBoundaryCrossed(newX, shape)) {
            return shape.getVelocity().xVelocity * -1;
        }
        return shape.getVelocity().xVelocity;
    }

    private isRightBoundaryCrossed(newX: number, shape: BaseShape) {
        return newX + shape.getDimensions().width >= WindowService.getCanvasDimensions()[0];
    }

    private isLeftBoundaryCrossed(newX: number) {
        return newX <= 0;
    }

    private calculateYVelocity(shape: BaseShape): number {
        const newY = shape.getPosition().y + shape.getVelocity().yVelocity;
        if (this.isUpperBoundaryCrossed(newY) || this.isLowerBoundaryCrossed(newY, shape)) {
            return shape.getVelocity().yVelocity * -1;
        }
        return shape.getVelocity().yVelocity;
    }

    private isLowerBoundaryCrossed(newY: number, shape: BaseShape) {
        return newY + shape.getDimensions().height >= WindowService.getCanvasDimensions()[1];
    }

    private isUpperBoundaryCrossed(newY: number) {
        return newY <= 0;
    }
}