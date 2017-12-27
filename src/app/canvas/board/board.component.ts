import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {GameEngine} from "../engine/game-engine";
import {Rectangle} from "../shapes/rectangle";
import {Point} from "../shapes/point";
import {Dimensions} from "../shapes/dimensions";
import {Velocity} from "../shapes/move/velocity";

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
        this.gameEngine.callibrateWindow();
    }

    private generateSomeEntities() {
        for (let i = 0; i <= 100; i++) {
            this.gameEngine.addEntity(new Rectangle(
                Point.new().withX(Math.floor(Math.random() * 500) + 1).withY(Math.floor(Math.random() * 500) + 1),
                Dimensions.new().withWidth(5).withHeight(5),
                "#fff",
                Velocity.new().withX(Math.floor(Math.random() * 15) + 1).withY(Math.floor(Math.random() * 15) + 1))
            );
        }
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
