import {ControlStrategy} from "./strategy/control-strategy.interface";

export interface Controllable {

    setControlStrategy(controlStrategy:ControlStrategy): void

}