import {Shape} from "./shape";
import {Point} from "./point";

export class CDShape implements Shape {

    constructor(private decoratedShape: Shape) {}

    getPosition(): Point {
        throw new Error("Method not implemented.");
    }

    draw(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }

    move(moveX: number, moveY: number): void {
        throw new Error("Method not implemented.");
    }

}