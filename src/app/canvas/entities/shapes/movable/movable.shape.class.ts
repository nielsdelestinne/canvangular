import {BaseShape} from "../base/shape.abstract";
import {Velocity} from "../../behavior/movable/velocity.class";
import {Movable} from "../../behavior/movable/movable.interface";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";
import {MoveBoundary} from "../../behavior/movable/strategy/move-boundary.class";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export class MovableShape implements BaseShape, Movable{
    constructor(private decoratedShape: BaseShape,
                private _velocity: Velocity = Velocity.new().withX(10).withY(10),
                private moveStrategy: MoveStrategy = new MoveBoundary()) {
    }

    get velocity(): Velocity {
        return this._velocity;
    }

    set velocity(value: Velocity) {
        this._velocity = value;
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

    setMoveStrategy(moveStrategy: MoveStrategy): void {
        this.moveStrategy = moveStrategy;
    }

    draw(context: CanvasRenderingContext2D): void {
        this.calculateNewPositionByMoving();
        this.decoratedShape.draw(context);
    }

    private calculateNewPositionByMoving() {
        this.decoratedShape.setPosition(this.moveStrategy.move(this));
    }

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.decoratedShape.isCollisionDetected(otherShape);
    }
}
