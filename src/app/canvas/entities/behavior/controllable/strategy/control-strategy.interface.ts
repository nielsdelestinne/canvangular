import {ControllableShape} from "../../../shapes/controllable/controllable.shape.class";
import {BaseShape} from "../../../shapes/base/shape.abstract";

export interface ControlStrategy {

    startObservingControlEvents(shape: ControllableShape, decoratedShape: BaseShape): void

}