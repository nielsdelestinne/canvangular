import {DrawEngine} from "./draw-engine";
import {ElementRef} from "@angular/core";
import {BaseShape} from "../entities/shapes/base/shape.abstract";

export class GameEngine {

    private static readonly GAME_LOOP_FPS = 60;

    private shapes: BaseShape[];
    private gameLoopRef: number;
    private drawEngine: DrawEngine;

    constructor(canvas: ElementRef) {
        this.shapes = [];
        this.drawEngine = new DrawEngine(canvas);
    }

    startGameLoop(): void {
        this.gameLoopRef = window.setInterval(() => this.run(), 1000 / GameEngine.GAME_LOOP_FPS);
    }

    stopGameLoop(): void {
        clearInterval(this.gameLoopRef);
    }

    addShape(shape: BaseShape) {
        this.shapes.push(shape);
    }

    private run(): void {
        this.drawEngine.draw(this.shapes);
    }

    calibrateWindow(): void {
        this.drawEngine.initCanvasDimensions();
    }

}