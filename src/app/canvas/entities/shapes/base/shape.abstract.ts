import {Drawable} from "../../behavior/drawable/drawable.interface";
import {CollisionDetectable} from "../../behavior/collision-detectable/collision-detectable.interface";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";
import {Movable} from "../../behavior/movable/movable.interface";
import {Velocity} from "../../behavior/movable/velocity.class";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";

export abstract class BaseShape implements Drawable, Movable, CollisionDetectable {

    private static readonly MAX_VELOCITY = 25;
    private static readonly GRAVITY_FACTOR = 0.5;

    constructor(protected position: Point,
                protected dimensions: Dimensions,
                protected color: string,
                protected velocity: Velocity,
                protected moveStrategy: MoveStrategy) {
    }

    abstract isCollisionDetected(otherShape: BaseShape): boolean;
    abstract draw(context: CanvasRenderingContext2D): void;

    getPosition(): Point {
        return this.position;
    }

    setPosition(position: Point): void {
        this.position = position;
    }

    getDimensions(): Dimensions {
        return this.dimensions;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string) {
        this.color = color;
    }

    getVelocity(): Velocity {
        return this.velocity;
    }

    setVelocity(velocity: Velocity): void {
        this.velocity = Velocity.new()
            .withX(velocity.xVelocity >= BaseShape.MAX_VELOCITY ? BaseShape.MAX_VELOCITY : velocity.xVelocity)
            .withY(velocity.yVelocity >= BaseShape.MAX_VELOCITY ? BaseShape.MAX_VELOCITY : velocity.yVelocity + BaseShape.GRAVITY_FACTOR);
    }

    setMoveStrategy(moveStrategy: MoveStrategy): void {
        this.moveStrategy = moveStrategy;
    }

    getMoveStrategy(): MoveStrategy {
        return this.moveStrategy
    }

}