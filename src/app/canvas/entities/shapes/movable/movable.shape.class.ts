import {BaseShape} from "../base/shape.abstract";
import {Velocity} from "../../behavior/movable/velocity.class";
import {Movable} from "../../behavior/movable/movable.interface";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";
import {MoveBoundary} from "../../behavior/movable/strategy/move-boundary.class";

export class MovableShape extends BaseShape implements Movable{

    constructor(private decoratedShape: BaseShape,
                private _velocity: Velocity = Velocity.new().withX(10).withY(10),
                private moveStrategy: MoveStrategy = new MoveBoundary()) {
        super(decoratedShape.position,
            decoratedShape.dimensions,
            decoratedShape.color);
    }

    get velocity(): Velocity {
        return this._velocity;
    }

    set velocity(value: Velocity) {
        this._velocity = value;
    }

    setMoveStrategy(moveStrategy: MoveStrategy): void {
        this.moveStrategy = moveStrategy;
    }

    draw(context: CanvasRenderingContext2D): void {
        this.calculateNewPositionByMoving();
        this.decoratedShape.draw(context);
    }

    private calculateNewPositionByMoving() {
        const newPosition = this.moveStrategy.move(this);
        this.position = newPosition;
        this.decoratedShape.position = newPosition;
    }
}