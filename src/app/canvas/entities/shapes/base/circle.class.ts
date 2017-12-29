import {BaseShape} from "./shape.abstract";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";
import {Velocity} from "../../behavior/movable/velocity.class";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";
import {MoveSimple} from "../../behavior/movable/strategy/move-simple.class";

export class Circle extends BaseShape {

    constructor(position: Point,
                dimensions: Dimensions,
                color: string,
                velocity: Velocity = Velocity.new().withX(0).withY(0),
                moveStrategy: MoveStrategy = new MoveSimple()) {
        super(position,
            dimensions,
            color,
            velocity,
            moveStrategy);
    }

    /**
     * TODO: Circle should not use width as its radius
     */
    draw(context: CanvasRenderingContext2D): void {
        this.position = this.moveStrategy.move(this);
        this.drawShape(context);
    }

    private drawShape(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(
            this.position.x,
            this.position.y,
            this.dimensions.width,
            0,
            2 * Math.PI,
            false
        );
        context.fill();
    }

    /**
     * TODO
     * Collision detection for Circle with other shapes
     */
    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.position.x > otherShape.getPosition().x
            && this.position.x < otherShape.getPosition().x + otherShape.getDimensions().width
            && this.position.y > otherShape.getPosition().y
            && this.position.y < otherShape.getPosition().y + otherShape.getDimensions().height;
    }

}