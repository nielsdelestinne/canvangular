import {DrawEngine} from "./draw-engine";
import {ElementRef} from "@angular/core";
import {Drawable} from "../shapes/behavior/drawable";
import {Entity} from "../shapes/entity";

export class GameEngine {

    private static readonly GAME_LOOP_FPS = 60;

    private entities: Drawable[];
    private gameLoopRef: number;
    private drawEngine: DrawEngine;

    constructor(canvas: ElementRef) {
        this.entities = [];
        this.drawEngine = new DrawEngine(canvas);
    }

    startGameLoop(): void {
        this.gameLoopRef = window.setInterval(() => this.run(), 1000 / GameEngine.GAME_LOOP_FPS);
    }

    stopGameLoop(): void {
        clearInterval(this.gameLoopRef);
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    private run(): void {
        this.drawEngine.draw(this.entities);
    }

    callibrateWindow(): void {
        this.drawEngine.initCanvasDimensions();
    }

}