import {Shape} from "./shape";
import {Point} from "./point";
import {Dimensions} from "./dimensions";
import {WindowService} from "../shared/window/window.service";

export class Rectangle implements Shape {
    private position: Point;

    constructor(position: Point | MouseEvent, private dimensions: Dimensions, private color: string) {
        this.position = position instanceof MouseEvent ? this.getPositionFromEvent(position) : position;
    }

    private getPositionFromEvent(position: MouseEvent) {
        return {x: position.x, y: WindowService.getCalibratedYPosition(position.clientY)};
    }

    getPosition(): Point {
        return this.position;
    }

    draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.color;
        context.fillRect(this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height);
    }

    move(moveX: number, moveY: number): void {
        this.position = {x: this.position.x + moveX, y: this.position.y + moveY};
    }
}