import {BaseShape} from "../base/shape.abstract";
import {Velocity} from "../../behavior/movable/velocity.class";
import {Movable} from "../../behavior/movable/movable.interface";
import {MoveStrategy} from "../../behavior/movable/strategy/move-strategy.interface";
import {MoveBoundary} from "../../behavior/movable/strategy/move-boundary.class";
import {Observable} from "rxjs/Observable";
import {GameEngine} from "../../../engine/game-engine";
import {Point} from "../../point.class";
import {WindowService} from "../../../shared/window/window.service";
import {Controllable} from "../../behavior/controllable/controllable.interface";
import {ControlStrategy} from "../../behavior/controllable/strategy/control-strategy.interface";
import {ControlDragDrop} from "../../behavior/controllable/strategy/control-drag-drop.class";

export class ControllableShape extends BaseShape implements Controllable{

    constructor(private decoratedShape: BaseShape,
                private controlStrategy: ControlStrategy = new ControlDragDrop()) {
        super(decoratedShape.position,
            decoratedShape.dimensions,
            decoratedShape.color);
        this.controlStrategy.startObservingControlEvents(this, decoratedShape);
    }

    setControlStrategy(controlStrategy: ControlStrategy): void {
       this.controlStrategy = controlStrategy;
    }

    draw(context: CanvasRenderingContext2D): void {
        this.decoratedShape.draw(context);
    }
}