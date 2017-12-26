import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {GameEngine} from "../engine/game-engine";
import {Rectangle} from "../shapes/rectangle";

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
        for(let i = 0; i <= 100; i++) {
            this.gameEngine.addEntity(new Rectangle(
                {x: Math.floor(Math.random()*500) + 1, y: Math.floor(Math.random()*500) + 1},
                {width: 5, height: 5},
                "#fff",
                {xVelocity:Math.floor(Math.random()*15) + 1,yVelocity:Math.floor(Math.random()*15) + 1})
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
