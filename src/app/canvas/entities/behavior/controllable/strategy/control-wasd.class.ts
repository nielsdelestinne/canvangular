import {ControlStrategy} from "./control-strategy.interface";
import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {BaseShape} from "../../../shapes/base/shape.abstract";
import {Observable} from "rxjs/Observable";
import {Point} from "../../../point.class";
import "rxjs/add/operator/map";

export class ControlWASD implements ControlStrategy{

    startObservingControlEvents(shape: ControllableShape, decoratedShape: BaseShape): void {
        Observable
            .fromEvent(window, "keydown")
            .map((e: KeyboardEvent) => e.keyCode)
            .subscribe((keyCode: number) => {
                switch (keyCode) {
                    case 87: //w
                        this.moveExtraY(decoratedShape, shape, -10);
                        break;
                    case 65: //a
                        this.moveExtraX(decoratedShape, shape, -10);
                        break;
                    case 83: //s
                        this.moveExtraY(decoratedShape, shape, 10);
                        break;
                    case 68: //d
                        this.moveExtraX(decoratedShape, shape, 10);
                        break;
                }
            });
    }

    private moveExtraX(decoratedShape: BaseShape, shape: ControllableShape, amount: number) {
        decoratedShape.position = Point.new().withX(decoratedShape.position.x + amount).withY(decoratedShape.position.y);
        shape.position = Point.new().withX(shape.position.x + amount).withY(shape.position.y);
    }

    private moveExtraY(decoratedShape: BaseShape, shape: ControllableShape, amount: number) {
        decoratedShape.position = Point.new().withX(decoratedShape.position.x).withY(decoratedShape.position.y + amount);
        shape.position = Point.new().withX(shape.position.x).withY(shape.position.y + amount);
    }
}