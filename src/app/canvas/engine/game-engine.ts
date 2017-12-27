import {DrawEngine} from "./draw-engine";
import {ElementRef} from "@angular/core";
import {BaseShape} from "../entities/shapes/base/shape.abstract";

export class GameEngine {

    private static readonly GAME_LOOP_FPS = 60;
    public static CANVAS_ELEMENT: HTMLCanvasElement;

    private static INSTANCE: GameEngine;

    private shapes: BaseShape[];
    private gameLoopRef: number;
    private drawEngine: DrawEngine;

    private constructor(canvas: ElementRef) {
        this.shapes = [];
        GameEngine.CANVAS_ELEMENT = canvas.nativeElement;
        this.drawEngine = new DrawEngine(canvas.nativeElement);
    }

    public static getInstance(canvas: ElementRef): GameEngine {
        if(!GameEngine.INSTANCE) {
            GameEngine.INSTANCE = new GameEngine(canvas);
        } return GameEngine.INSTANCE;
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