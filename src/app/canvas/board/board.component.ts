import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {GameEngine} from "../engine/game-engine";
import {Point} from "../entities/point.class";
import {Dimensions} from "../entities/dimensions.class";
import {Velocity} from "../entities/behavior/movable/velocity.class";
import {Rectangle} from "../entities/shapes/base/rectangle.class";
import {MovableShape} from "../entities/shapes/movable/movable.shape.class";
import {ControllableShape} from "../entities/shapes/controllable/controllable.shape.class";
import {Circle} from "../entities/shapes/base/circle.class";
import {ControlWASD} from "../entities/behavior/controllable/strategy/control-wasd.class";
import {ControlDragDrop} from "../entities/behavior/controllable/strategy/control-drag-drop.class";

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
        this.createBigMovableBall();
        this.createBigWASDBall();
    }

    private createBigMovableBall() {
        this.gameEngine.addShape(
            new MovableShape(
                new Circle(
                    Point.new().withX(this.getRandomNumber(500)).withY(this.getRandomNumber(500)),
                    Dimensions.new().withWidth(25).withHeight(25),
                    "#000"),
                Velocity.new().withX(15).withY(1)
            )
        );
    }

    private createBigWASDBall() {
        this.gameEngine.addShape(
            new ControllableShape(
                new Circle(
                    Point.new().withX(this.getRandomNumber(500)).withY(this.getRandomNumber(500)),
                    Dimensions.new().withWidth(25).withHeight(25),
                    "#000"
                ),
                new ControlWASD()
            )
        );
    }

    private createDragAndDropMovableShapes() {
        for (let i = 0; i <= 100; i++) {
            this.gameEngine.addShape(
                new ControllableShape(
                    new MovableShape(
                        new Rectangle(
                            Point.new().withX(this.getRandomNumber(500)).withY(this.getRandomNumber(500)),
                            Dimensions.new().withWidth(5).withHeight(5),
                            "#fff"),
                        Velocity.new().withX(this.getRandomNumber(15)).withY(this.getRandomNumber(15))
                    )
                )
            );
        }
    }

    private getRandomNumber(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }
}
