import {Injectable} from "@angular/core";

@Injectable()
export class WindowService {

    private static readonly WINDOW_MARGIN = 25;
    private static readonly WINDOW_EXTRA_TOP_MARGIN = 75;

    getCanvasDimensions(): [number, number] {
        return [this.getAvailableWindowWidth(), this.getAvailableWindowHeight()];
    }

    getAvailableWindowWidth(): number {
        return window.innerWidth - WindowService.WINDOW_MARGIN;
    }

    getAvailableWindowHeight(): number {
        return window.innerHeight - WindowService.WINDOW_MARGIN - WindowService.WINDOW_EXTRA_TOP_MARGIN;
    }

    getCalibratedYPosition(yPosition: number) : number {
        return yPosition - WindowService.WINDOW_EXTRA_TOP_MARGIN;
    }

}