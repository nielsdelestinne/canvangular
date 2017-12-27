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
        decoratedShape.setPosition(Point.new().withX(decoratedShape.getPosition().x + amount).withY(decoratedShape.getPosition().y));
        shape.setPosition(Point.new().withX(shape.getPosition().x + amount).withY(shape.getPosition().y));
    }

    private moveExtraY(decoratedShape: BaseShape, shape: ControllableShape, amount: number) {
        decoratedShape.setPosition(Point.new().withX(decoratedShape.getPosition().x).withY(decoratedShape.getPosition().y + amount));
        shape.setPosition(Point.new().withX(shape.getPosition().x).withY(shape.getPosition().y + amount));
    }
}