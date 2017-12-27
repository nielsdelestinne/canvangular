import {ElementRef} from "@angular/core";
import {WindowService} from "../shared/window/window.service";
import {BaseShape} from "../entities/shapes/base/shape.abstract";

export class DrawEngine {

    private canvasContext: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(canvas: ElementRef) {
        this.canvasElement = canvas.nativeElement;
        this.canvasContext = this.canvasElement.getContext('2d');
        this.initCanvasDimensions();
    }

    initCanvasDimensions(): void {
        [this.canvasElement.width, this.canvasElement.height] = WindowService.getCanvasDimensions();
    }

    draw(shapes: BaseShape[]): void {
        this.redrawCanvas();
        this.redrawShapes(shapes);
    }

    private redrawCanvas() {
        this.canvasContext.fillStyle = "#ff804a";
        this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }

    private redrawShapes(shapes: BaseShape[]) {
        for (let shape of shapes) {
            shape.draw(this.canvasContext);
        }
    }
}