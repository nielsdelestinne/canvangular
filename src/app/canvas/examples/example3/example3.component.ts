import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GameEngine} from "../../engine/game-engine";
import {CollisionDetectableShape} from "../../entities/shapes/collision-detectable/collision-detectable-shape.class";
import {ControllableShape} from "../../entities/shapes/controllable/controllable.shape.class";
import {Rectangle} from "../../entities/shapes/base/rectangle.class";
import {Point} from "../../entities/point.class";
import {Dimensions} from "../../entities/dimensions.class";
import {Velocity} from "../../entities/behavior/movable/velocity.class";
import {MoveBoundary} from "../../entities/behavior/movable/strategy/move-boundary.class";
import {ControlWASD} from "../../entities/behavior/controllable/strategy/control-wasd.class";

@Component({
    selector: 'app-example3',
    templateUrl: "example3.component.html",
    styleUrls: ["example3.component.css"]
})
export class Example3Component implements AfterViewInit, OnDestroy {

    @ViewChild('boardcanvaselement3') private canvas: ElementRef;

    private gameEngine: GameEngine;

    ngAfterViewInit(): void {
        this.gameEngine = new GameEngine(this.canvas);
        this.gameEngine.startGameLoop();
        this.generateSomeSampleData();
    }

    ngOnDestroy(): void {
        this.gameEngine.stopGameLoop();
    }

    @HostListener('window:resize')
    onResize() {
        this.gameEngine.calibrateWindow();
    }

    /**
     * From here: example data being generated
     * ---->>>>
     */

    private generateSomeSampleData() {
        this.controllableWASDShape();
        this.createCollisionBigShapes();
        this.createBigShapes();
    }

    private controllableWASDShape() {
        this.gameEngine.addShape(
            new CollisionDetectableShape(
                new ControllableShape(
                    new Rectangle(
                        Point.new().withX(500).withY(500),
                        Dimensions.new().withWidth(15).withHeight(15),
                        "#000",
                        Velocity.new().withX(0).withY(0),
                        new MoveBoundary())
                    , new ControlWASD())
            )
        );
    }

    private createCollisionBigShapes() {
        for (let i = 0; i <= 5; i++) {
            this.gameEngine.addShape(
                new CollisionDetectableShape(
                    new Rectangle(
                        Point.new().withX(this.getRandomNumber(1250)).withY(this.getRandomNumber(1250)),
                        Dimensions.new().withWidth(50).withHeight(50),
                        "#fff",
                        Velocity.new().withX(0).withY(0),
                        new MoveBoundary())
                )
            );
        }
    }

    private createBigShapes() {
        for (let i = 0; i <= 5; i++) {
            this.gameEngine.addShape(
                new Rectangle(
                    Point.new().withX(this.getRandomNumber(1250)).withY(this.getRandomNumber(1250)),
                    Dimensions.new().withWidth(35).withHeight(35),
                    "#444",
                    Velocity.new().withX(0).withY(0),
                    new MoveBoundary())
            );
        }
    }

    private getRandomNumber(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

}