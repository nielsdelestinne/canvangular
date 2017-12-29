import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {GameEngine} from "../engine/game-engine";
import {Point} from "../entities/point.class";
import {Dimensions} from "../entities/dimensions.class";
import {ControllableShape} from "../entities/shapes/controllable/controllable.shape.class";
import {CollisionDetectableShape} from "../entities/shapes/collision-detectable/collision-detectable-shape.class";
import {Velocity} from "../entities/behavior/movable/velocity.class";
import {MoveBoundary} from "../entities/behavior/movable/strategy/move-boundary.class";
import {Circle} from "../entities/shapes/base/circle.class";
import {Rectangle} from "../entities/shapes/base/rectangle.class";

@Component({
    selector: 'app-board',
    templateUrl: "board.component.html",
    styleUrls: ["board.component.css"]
})
export class BoardComponent implements AfterViewInit, OnDestroy {

    @ViewChild('boardcanvaselement') private canvas: ElementRef;

    private gameEngine: GameEngine;

    ngAfterViewInit(): void {
        this.gameEngine = GameEngine.getInstance(this.canvas);
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
        // this.createNonMovingCollisionShapes();
    }


    private createNonMovingCollisionShapes() {
        for (let i = 0; i <= 5; i++) {
            this.gameEngine.addShape(
                new CollisionDetectableShape(
                    new Rectangle(
                        Point.new().withX(this.getRandomNumber(1250)).withY(this.getRandomNumber(1250)),
                        Dimensions.new().withWidth(100).withHeight(100),
                        "#fff")
                )
            );
        }
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
