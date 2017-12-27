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

@Component({
    selector: 'app-board',
    templateUrl: "board.component.html",
    styleUrls: ["board.component.css"]
})
export class BoardComponent implements AfterViewInit, OnDestroy {

    @ViewChild('boardcanvaselement') private canvas: ElementRef;

    private gameEngine: GameEngine;

    ngAfterViewInit(): void {
        this.gameEngine = new GameEngine(this.canvas);
        this.gameEngine.startGameLoop();
        this.generateSomeEntities();
    }

    ngOnDestroy(): void {
        this.gameEngine.stopGameLoop();
    }

    @HostListener('window:resize')
    onResize() {
        this.gameEngine.calibrateWindow();
    }

    private generateSomeEntities() {
        for (let i = 0; i <= 100; i++) {
            this.gameEngine.addShape(
                new MovableShape(
                    new Rectangle(
                        Point.new().withX(this.getRandomNumber(500)).withY(this.getRandomNumber(500)),
                        Dimensions.new().withWidth(5).withHeight(5),
                        "#fff"),
                    Velocity.new().withX(this.getRandomNumber(15)).withY(this.getRandomNumber(15)))
            );
        }
    }

    private getRandomNumber(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }

// private startObservingEvents(): void {
    //     Observable
    //         .fromEvent(this.canvasElement, 'mousedown')
    //         .switchMap((_) => {
    //             return Observable
    //                 .fromEvent(this.canvasElement, 'mousemove')
    //                 .takeUntil(Observable.fromEvent(this.canvasElement, 'mouseup'))
    //                 .pairwise()
    //         })
    //         .subscribe((duoEvent: [MouseEvent, MouseEvent]) => {
    //             new Rectangle(duoEvent[0], {width: 10, height: 10}, "#c4e55d").draw(this.canvasContext);
    //             new Rectangle(duoEvent[1], {width: 10, height: 10}, "#c4e55d").draw(this.canvasContext);
    //         });
    // }
}
