import {ControlStrategy} from "./control-strategy.interface";
import {Observable} from "rxjs/Observable";
import {GameEngine} from "../../../../engine/game-engine";
import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {Point} from "../../../point.class";
import {WindowService} from "../../../../shared/window/window.service";
import {Velocity} from "../../movable/velocity.class";

export class ControlClick implements ControlStrategy {

    startObservingControlEvents(shape: ControllableShape): void {
        Observable
            .fromEvent(GameEngine.CANVAS_ELEMENT, 'mousedown')
            .subscribe((duoEvent: MouseEvent) => {
                shape.setPosition(Point.new()
                    .withX(duoEvent.x + this.getRandomMargin())
                    .withY(WindowService.getCalibratedYPosition(duoEvent.y) + this.getRandomMargin()));
                shape.setVelocity(Velocity.new()
                    .withX(this.getRandomSpeed())
                    .withY(this.getRandomSpeed()));
            });
    }

    private getRandomMargin(): number{
        return Math.random() >= 0.5 ? Math.random() * -100 : Math.random() * 100;
    }

    private getRandomSpeed(): number {
        return Math.random() >= 0.5 ? Math.random() * 25 : Math.random() * -25;
    }


}