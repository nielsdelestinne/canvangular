import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GameEngine} from "../../engine/game-engine";
import {CollisionDetectableShape} from "../../entities/shapes/collision-detectable/collision-detectable-shape.class";
import {ControllableShape} from "../../entities/shapes/controllable/controllable.shape.class";
import {Point} from "../../entities/point.class";
import {Rectangle} from "../../entities/shapes/base/rectangle.class";
import {Dimensions} from "../../entities/dimensions.class";
import {Velocity} from "../../entities/behavior/movable/velocity.class";
import {MoveBoundary} from "../../entities/behavior/movable/strategy/move-boundary.class";

@Component({
  selector: 'app-example2',
    templateUrl: "example2.component.html",
    styleUrls: ["example2.component.css"]
})
export class Example2Component implements AfterViewInit, OnDestroy {

    @ViewChild('boardcanvaselement2') private canvas: ElementRef;

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
        this.createDragAndDropMovableShapes();
    }


    private createDragAndDropMovableShapes() {
        for (let i = 0; i <= 500; i++) {
            this.gameEngine.addShape(
                new CollisionDetectableShape(
                    new ControllableShape(
                        new Rectangle(
                            Point.new().withX(this.getRandomNumber(1250)).withY(this.getRandomNumber(1250)),
                            Dimensions.new().withWidth(6).withHeight(6),
                            "#fff",
                            Velocity.new().withX(this.getRandomNumber(15)).withY(this.getRandomNumber(15)),
                            new MoveBoundary())
                    )
                )
            );
        }
    }

    private getRandomNumber(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

}
