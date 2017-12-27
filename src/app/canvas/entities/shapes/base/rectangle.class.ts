import {BaseShape} from "./shape.abstract";
import {Point} from "../../point.class";
import {Dimensions} from "../../dimensions.class";

export class Rectangle implements BaseShape {
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

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height
        );
    }

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.position.x > otherShape.getPosition().x
            && this.position.x < otherShape.getPosition().x + otherShape.getDimensions().width
            && this.position.y > otherShape.getPosition().y
            && this.position.y < otherShape.getPosition().y + otherShape.getDimensions().height;
    }


}