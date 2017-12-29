import {ControlStrategy} from "./control-strategy.interface";
import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {Observable} from "rxjs/Observable";
import {Point} from "../../../point.class";
import "rxjs/add/operator/map";

export class ControlWASD implements ControlStrategy{

    startObservingControlEvents(shape: ControllableShape): void {
        Observable
            .fromEvent(window, "keydown")
            .map((e: KeyboardEvent) => e.keyCode)
            .subscribe((keyCode: number) => {
                switch (keyCode) {
                    case 87: //w
                        this.moveExtraY(shape, -10);
                        break;
                    case 65: //a
                        this.moveExtraX(shape, -10);
                        break;
                    case 83: //s
                        this.moveExtraY(shape, 10);
                        break;
                    case 68: //d
                        this.moveExtraX(shape, 10);
                        break;
                }
            });
    }

    private moveExtraX(shape: ControllableShape, amount: number) {
        shape.setPosition(Point.new().withX(shape.getPosition().x + amount).withY(shape.getPosition().y));
    }

    private moveExtraY(shape: ControllableShape, amount: number) {
        shape.setPosition(Point.new().withX(shape.getPosition().x).withY(shape.getPosition().y + amount));
    }
}