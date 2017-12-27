import {BaseShape} from "../base/shape.abstract";
import {MovableShape} from "../movable/movable.shape.class";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";
import {Velocity} from "../../behavior/movable/velocity.class";

export class CollisionDetectableShape implements BaseShape {

    constructor(private decoratedShape: MovableShape) {
    }

    getPosition(): Point {
        return this.decoratedShape.getPosition();
    }

    setPosition(position: Point): void {
        return this.decoratedShape.setPosition(position);
    }

    getDimensions(): Dimensions {
        return this.decoratedShape.getDimensions();
    }

    getColor(): string {
        return this.decoratedShape.getColor()
    }

    setColor(color: string) {
        this.decoratedShape.setColor(color);
    }

    draw(context: CanvasRenderingContext2D): void {
        this.decoratedShape.draw(context);
    }

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.decoratedShape.isCollisionDetected(otherShape);
    }

    collisionDetection(otherShape: BaseShape): void {
        if(this.decoratedShape.isCollisionDetected(otherShape)) {
            this.decoratedShape.getColor() === "#fff" ? this.decoratedShape.setColor("#FFF871") : this.decoratedShape.setColor("#fff");
            this.decoratedShape.velocity = Velocity.new()
                .withX(this.decoratedShape.velocity.xVelocity * -1)
                .withY(this.decoratedShape.velocity.yVelocity * -1);
        }
    }

}