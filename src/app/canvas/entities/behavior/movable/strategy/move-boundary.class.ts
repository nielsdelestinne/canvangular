import {MoveStrategy} from "./move-strategy.interface";
import {Point} from "../../../point.class";
import {WindowService} from "../../../../shared/window/window.service";
import {Velocity} from "../velocity.class";
import {MovableShape} from "../../../shapes/movable/movable.shape.class";

export class MoveBoundary implements MoveStrategy {

    move(shape: MovableShape): Point {
        this.AdjustVelocity(shape);
        return Point.new()
            .withX(shape.getPosition().x + shape.velocity.xVelocity)
            .withY(shape.getPosition().y + shape.velocity.yVelocity);
    }

    private AdjustVelocity(shape: MovableShape) {
        shape.velocity = Velocity.new().withX(this.calculateXVelocity(shape)).withY(this.calculateYVelocity(shape));
    }

    private calculateXVelocity(shape: MovableShape): number {
        const newX = shape.getPosition().x + shape.velocity.xVelocity;
        if (this.isLeftBoundaryCrossed(newX) || this.isRightBoundaryCrossed(newX, shape)) {
            return shape.velocity.xVelocity * -1;
        }
        return shape.velocity.xVelocity;
    }

    private isRightBoundaryCrossed(newX: number, shape: MovableShape) {
        return newX + shape.getDimensions().width >= WindowService.getCanvasDimensions()[0];
    }

    private isLeftBoundaryCrossed(newX: number) {
        return newX <= 0;
    }

    private calculateYVelocity(shape: MovableShape): number {
        const newY = shape.getPosition().y + shape.velocity.yVelocity;
        if (this.isUpperBoundaryCrossed(newY) || this.isLowerBoundaryCrossed(newY, shape)) {
            return shape.velocity.yVelocity * -1;
        }
        return shape.velocity.yVelocity;
    }

    private isLowerBoundaryCrossed(newY: number, shape: MovableShape) {
        return newY + shape.getDimensions().height >= WindowService.getCanvasDimensions()[1];
    }

    private isUpperBoundaryCrossed(newY: number) {
        return newY <= 0;
    }
}