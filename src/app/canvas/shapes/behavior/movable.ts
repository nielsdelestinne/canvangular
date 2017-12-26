import {MoveStrategy} from "../move/move-strategy";
import {Velocity} from "../move/velocity";

export interface Movable {

    setMoveStrategy(moveStrategy: MoveStrategy): void;
    getVelocity(): Velocity;
    setVelocity(velocity: Velocity): void;



}

