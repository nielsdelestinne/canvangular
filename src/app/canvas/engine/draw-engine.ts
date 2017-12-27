import {Drawable} from "../entities/behavior/drawable/drawable.interface";
import {ElementRef} from "@angular/core";
import {WindowService} from "../shared/window/window.service";

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

    draw(entities: Drawable[]): void {
        this.redrawCanvas();
        this.redrawEntities(entities);
    }

    private redrawCanvas() {
        this.canvasContext.fillStyle = "#ff804a";
        this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }

    private redrawEntities(entities: Drawable[]) {
        for (let element of entities) {
            element.draw(this.canvasContext);
        }
    }
}