import {Entity} from "./entity";
import {Point} from "./point";
import {Dimensions} from "./dimensions";
import {MoveStrategy} from "./move/move-strategy";
import {OuterBoundaryMove} from "./move/outer-boundary-move";
import {Velocity} from "./move/velocity";

export class Rectangle implements Entity {

    private static readonly DEFAULT_X_VELOCITY = 3;
    private static readonly DEFAULT_Y_VELOCITY = 3;

    constructor(private position: Point,
                private dimensions: Dimensions,
                private color: string,
                private velocity: Velocity = Velocity.new().withX(Rectangle.DEFAULT_X_VELOCITY).withY(Rectangle.DEFAULT_Y_VELOCITY),
                private moveStrategy: MoveStrategy = new OuterBoundaryMove()) {
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