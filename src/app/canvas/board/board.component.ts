import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {WindowService} from "../shared/window/window.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import {Rectangle} from "../shapes/rectangle";
import {Shape} from "../shapes/shape";

@Component({
    selector: 'app-scrumboard',
    templateUrl: "board.component.html",
    styleUrls: ["board.component.css"]
})
export class BoardComponent implements AfterViewInit {

    @ViewChild('boardcanvaselement') private canvas: ElementRef;
    private canvasContext: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    private shape: Shape;

    constructor() {
    }

    ngAfterViewInit(): void {
        this.initCanvas();
        this.setCanvasDimensions();
        // this.startObservingEvents();
        this.shape = new Rectangle({x: 350, y: 350}, {width: 10, height: 10}, "#c4e55d");
        window.setInterval(() => {
            this.gameLoop()
        }, 25);
    }

    @HostListener('window:resize')
    onResize() {
        this.setCanvasDimensions();
    }

    private gameLoop() {
        this.shape.draw(this.canvasContext);
        this.shape.move(3, 3);
    }

    private initCanvas(): void {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasContext = this.canvasElement.getContext('2d');
    }

    private setCanvasDimensions(): void {
        [this.canvasElement.width, this.canvasElement.height] = WindowService.getCanvasDimensions();
    }

    private startObservingEvents(): void {
        Observable
            .fromEvent(this.canvasElement, 'mousedown')
            .switchMap((_) => {
                return Observable
                    .fromEvent(this.canvasElement, 'mousemove')
                    .takeUntil(Observable.fromEvent(this.canvasElement, 'mouseup'))
                    .pairwise()
            })
            .subscribe((duoEvent: [MouseEvent, MouseEvent]) => {
                new Rectangle(duoEvent[0], {width: 10, height: 10}, "#c4e55d").draw(this.canvasContext);
                new Rectangle(duoEvent[1], {width: 10, height: 10}, "#c4e55d").draw(this.canvasContext);
            });
    }
}
