import {ControlStrategy} from "./control-strategy.interface";
import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Velocity} from "../../movable/velocity.class";

export class ControlWASD implements ControlStrategy{

    startObservingControlEvents(shape: ControllableShape): void {
        Observable
            .fromEvent(window, "keydown")
            .map((e: KeyboardEvent) => e.keyCode)
            .subscribe((keyCode: number) => {
                switch (keyCode) {
                    case 87: //w
                        this.moveExtraY(shape, -1);
                        break;
                    case 65: //a
                        this.moveExtraX(shape, -1);
                        break;
                    case 83: //s
                        this.moveExtraY(shape, 1);
                        break;
                    case 68: //d
                        this.moveExtraX(shape, 1);
                        break;
                }
            });
    }

    private moveExtraX(shape: ControllableShape, amount: number) {
        shape.setVelocity(Velocity.new()
            .withX(shape.getVelocity().xVelocity + amount)
            .withY(shape.getVelocity().yVelocity));
    }

    private moveExtraY(shape: ControllableShape, amount: number) {
        shape.setVelocity(Velocity.new()
            .withX(shape.getVelocity().xVelocity)
            .withY(shape.getVelocity().yVelocity + amount));
    }
}