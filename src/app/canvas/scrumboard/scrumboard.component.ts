import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {WindowService} from "../shared/window/window.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-scrumboard',
    templateUrl: "scrumboard.component.html",
    styleUrls: ["scrumboard.component.css"]
})
export class ScrumboardComponent implements AfterViewInit {

    @ViewChild('scrumboardcanvaselement') private canvas: ElementRef;
    private canvasContext: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(private windowService: WindowService) {
    }

    ngAfterViewInit(): void {
        this.initCanvas();
        this.setCanvasDimensions();
        this.startObservingEvents();
    }

    @HostListener('window:resize')
    onResize() {
        this.setCanvasDimensions();
    }

    private initCanvas(): void {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasContext = this.canvasElement.getContext('2d');
    }

    private setCanvasDimensions(): void {
        [this.canvasElement.width, this.canvasElement.height] = this.windowService.getCanvasDimensions();
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
                this.drawSquare(duoEvent[0], "#c4e55d");
                this.drawSquare(duoEvent[1], "#86a045");
            });
    }

    private drawSquare(event: MouseEvent, color: string) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(event.clientX,
            this.windowService.getCalibratedYPosition(event.y),
            10,
            10);
    }
}
