import {BaseShape} from "./shape.abstract";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export class Rectangle extends BaseShape {

    constructor(position: Point,
                dimensions: Dimensions,
                color: string) {
        super(position, dimensions, color);
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height
        );
    }



}