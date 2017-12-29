import {BaseShape} from "../base/shape.abstract";
import {Velocity} from "../../behavior/movable/velocity.class";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";
import {httpFactory} from "@angular/http/src/http_module";

export class CollisionDetectableShape extends BaseShape {

    constructor(private decoratedShape: BaseShape) {
        super(decoratedShape.getPosition(),
            decoratedShape.getDimensions(),
            decoratedShape.getColor(),
            decoratedShape.getVelocity(),
            decoratedShape.getMoveStrategy());
    }

    getPosition(): Point {
        return this.decoratedShape.getPosition();
    }

    setPosition(position: Point): void {
        this.decoratedShape.setPosition(position);
    }

    getDimensions(): Dimensions {
        return this.decoratedShape.getDimensions()
    }

    getColor(): string {
        return this.decoratedShape.getColor()
    }

    setColor(color: string) {
        this.decoratedShape.setColor(color);
    }

    getVelocity(): Velocity {
        return this.decoratedShape.getVelocity()
    }

    setVelocity(velocity: Velocity): void {
        this.decoratedShape.setVelocity(velocity);
    }

    setMoveStrategy(moveStrategy: MoveStrategy): void {
        this.decoratedShape.setMoveStrategy(moveStrategy);
    }

    getMoveStrategy(): MoveStrategy {
        return this.decoratedShape.getMoveStrategy();
    }

    draw(context: CanvasRenderingContext2D): void {
        this.decoratedShape.draw(context);
    }

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.decoratedShape.isCollisionDetected(otherShape);
    }

    collisionDetection(otherShape: BaseShape): void {
        if(this.decoratedShape.isCollisionDetected(otherShape)) {
            let currentDecoratorShapeVelocity = this.decoratedShape.getVelocity();
            this.alterVelocity(this.decoratedShape, otherShape.getVelocity());
            this.alterVelocity(otherShape, currentDecoratorShapeVelocity);
        }
    }

    private alterVelocity(currentShape: BaseShape, newVelocity: Velocity) {
        currentShape.setVelocity(Velocity.new()
            .withX(newVelocity.xVelocity * 0.99)
            .withY(newVelocity.yVelocity * 0.99));
    }
}