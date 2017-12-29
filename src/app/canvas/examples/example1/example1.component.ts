import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {GameEngine} from "../../engine/game-engine";
import {Point} from "../../entities/point.class";
import {Dimensions} from "../../entities/dimensions.class";
import {ControllableShape} from "../../entities/shapes/controllable/controllable.shape.class";
import {CollisionDetectableShape} from "../../entities/shapes/collision-detectable/collision-detectable-shape.class";
import {Velocity} from "../../entities/behavior/movable/velocity.class";
import {MoveBoundary} from "../../entities/behavior/movable/strategy/move-boundary.class";
import {Rectangle} from "../../entities/shapes/base/rectangle.class";
import {ControlWASD} from "../../entities/behavior/controllable/strategy/control-wasd.class";

@Component({
    selector: 'app-example1',
    templateUrl: "example1.component.html",
    styleUrls: ["example1.component.css"]
})
export class Example1Component implements AfterViewInit, OnDestroy {

    @ViewChild('boardcanvaselement1') private canvas: ElementRef;

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
                ,new ControlWASD())
            )
        );
    }

}
