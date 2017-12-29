import {MoveStrategy} from "./strategy/move-strategy.interface";
import {Velocity} from "./velocity.class";

export interface Movable {
    getVelocity(): Velocity;
    setVelocity(velocity: Velocity): void;
    getMoveStrategy(): MoveStrategy;
    setMoveStrategy(moveStrategy: MoveStrategy): void;
}

