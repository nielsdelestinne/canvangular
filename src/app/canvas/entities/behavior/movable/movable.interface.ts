import {MoveStrategy} from "./strategy/move-strategy.interface";
import {Velocity} from "./velocity.class";

export interface Movable {

    setMoveStrategy(moveStrategy: MoveStrategy): void;
    getVelocity(): Velocity;
    setVelocity(velocity: Velocity): void;



}

