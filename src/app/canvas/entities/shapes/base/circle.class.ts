import {BaseShape} from "./shape.abstract";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export class Circle extends BaseShape {

    constructor(position: Point,
                dimensions: Dimensions,
                color: string) {
        super(position, dimensions, color);
    }

    /**
     * TODO: Circle should not use width as its radius
     */
    draw(context: CanvasRenderingContext2D): void {
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

}