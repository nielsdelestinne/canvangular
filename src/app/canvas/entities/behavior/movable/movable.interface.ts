import {MoveStrategy} from "./strategy/move-strategy.interface";

export interface Movable {
    setMoveStrategy(moveStrategy: MoveStrategy): void;
}

