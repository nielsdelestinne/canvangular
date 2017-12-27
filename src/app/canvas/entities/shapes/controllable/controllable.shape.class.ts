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
import {Dimensions} from "../../dimensions.class";

export class ControllableShape implements BaseShape, Controllable{

    constructor(private decoratedShape: BaseShape,
                private controlStrategy: ControlStrategy = new ControlDragDrop()) {
        this.controlStrategy.startObservingControlEvents(this, decoratedShape);
    }

    getPosition(): Point {
        return this.decoratedShape.getPosition();
    }

    setPosition(position: Point): void {
        return this.decoratedShape.setPosition(position);
    }

    getDimensions(): Dimensions {
        return this.decoratedShape.getDimensions();
    }

    getColor(): string {
        return this.decoratedShape.getColor()
    }

    setColor(color: string) {
        this.decoratedShape.setColor(color);
    }

    setControlStrategy(controlStrategy: ControlStrategy): void {
       this.controlStrategy = controlStrategy;
    }

    draw(context: CanvasRenderingContext2D): void {
        this.decoratedShape.draw(context);
    }

    isCollisionDetected(otherShape: BaseShape): boolean {
        return this.decoratedShape.isCollisionDetected(otherShape);
    }
}