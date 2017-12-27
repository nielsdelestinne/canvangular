import {ControlStrategy} from "./control-strategy.interface";
import {Observable} from "rxjs/Observable";
import {GameEngine} from "../../../../engine/game-engine";
import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {Point} from "../../../point.class";
import {WindowService} from "../../../../shared/window/window.service";
import {BaseShape} from "../../../shapes/base/shape.abstract";

export class ControlDragDrop implements ControlStrategy {

    startObservingControlEvents(shape: ControllableShape, decoratedShape: BaseShape): void {
        Observable
            .fromEvent(GameEngine.CANVAS_ELEMENT, 'mousedown')
            .switchMap((_) => {
                return Observable
                    .fromEvent(GameEngine.CANVAS_ELEMENT, 'mousemove')
                    .takeUntil(Observable.fromEvent(GameEngine.CANVAS_ELEMENT, 'mouseup'))
                    .pairwise()
            })
            .subscribe((duoEvent: [MouseEvent, MouseEvent]) => {
            decoratedShape.position = Point.new().withX(duoEvent[1].x).withY(WindowService.getCalibratedYPosition(duoEvent[1].y));
            shape.position = Point.new().withX(duoEvent[1].x).withY(WindowService.getCalibratedYPosition(duoEvent[1].y));
        });
    }


}