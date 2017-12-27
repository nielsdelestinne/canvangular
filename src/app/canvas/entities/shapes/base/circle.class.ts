import {BaseShape} from "./shape.abstract";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export class Circle implements BaseShape {

    constructor(private position: Point,
                private dimensions: Dimensions,
                private color: string) {
    }

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

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.position.x > otherShape.getPosition().x
            && this.position.x < otherShape.getPosition().x + otherShape.getDimensions().width
            && this.position.y > otherShape.getPosition().y
            && this.position.y < otherShape.getPosition().y + otherShape.getDimensions().height;
    }

}