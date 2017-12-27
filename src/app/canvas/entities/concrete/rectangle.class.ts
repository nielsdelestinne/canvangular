import {Entity} from "../entity.interface";
import {Point} from "../point.class";
import {Dimensions} from "../dimensions.class";
import {MoveStrategy} from "../behavior/movable/strategy/move-strategy.interface";
import {MoveBoundary} from "../behavior/movable/strategy/move-boundary.class";
import {Velocity} from "../behavior/movable/velocity.class";

export class Rectangle implements Entity {

    private static readonly DEFAULT_X_VELOCITY = 3;
    private static readonly DEFAULT_Y_VELOCITY = 3;

    constructor(private position: Point,
                private dimensions: Dimensions,
                private color: string,
                private velocity: Velocity = Velocity.new().withX(Rectangle.DEFAULT_X_VELOCITY).withY(Rectangle.DEFAULT_Y_VELOCITY),
                private moveStrategy: MoveStrategy = new MoveBoundary()) {
    }

    setColor(color: string): void {
        this.color = color;
    }

    getPosition(): Point {
        return this.position;
    }

    getVelocity(): Velocity {
        return this.velocity;
    }

    setVelocity(velocity: Velocity): void {
        this.velocity = velocity;
    }

    getDimensions(): Dimensions {
        return this.dimensions;
    }

    setMoveStrategy(moveStrategy: MoveStrategy): void {
        this.moveStrategy = moveStrategy;
    }

    draw(context: CanvasRenderingContext2D): void {
        this.position = this.moveStrategy.move(this);
        context.fillStyle = this.color;
        context.fillRect(this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height);
    }
}