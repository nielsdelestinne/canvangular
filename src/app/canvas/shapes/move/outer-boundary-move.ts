import {MoveStrategy} from "./move-strategy";
import {Point} from "../point";
import {Entity} from "../entity";
import {WindowService} from "../../shared/window/window.service";

export class OuterBoundaryMove implements MoveStrategy{

    move(entity: Entity): Point {
        this.AdjustVelocity(entity);
        return {
            x: entity.getPosition().x + entity.getVelocity().xVelocity,
            y: entity.getPosition().y + entity.getVelocity().yVelocity
        };
    }

    private AdjustVelocity(entity: Entity) {
        entity.setVelocity({xVelocity: this.calculateXVelocity(entity), yVelocity: this.calculateYVelocity(entity)});
    }

    private calculateXVelocity(entity: Entity): number {
        const newX = entity.getPosition().x + entity.getVelocity().xVelocity;
        if(this.isLeftBoundaryCrossed(newX) || this.isRightBoundaryCrossed(newX, entity)) {
            return entity.getVelocity().xVelocity * -1;
        } return entity.getVelocity().xVelocity;
    }

    private isRightBoundaryCrossed(newX: number, entity: Entity) {
        return newX + entity.getDimensions().width >= WindowService.getCanvasDimensions()[0];
    }

    private isLeftBoundaryCrossed(newX: number) {
        return newX <= 0;
    }

    private calculateYVelocity(entity: Entity): number {
        const newY =  entity.getPosition().y + entity.getVelocity().yVelocity;
        if(this.isUpperBoundaryCrossed(newY) || this.isLowerBoundaryCrossed(newY, entity)) {
            return entity.getVelocity().yVelocity * -1;
        } return entity.getVelocity().yVelocity;
    }

    private isLowerBoundaryCrossed(newY: number, entity: Entity) {
        return newY + entity.getDimensions().height >= WindowService.getCanvasDimensions()[1];
    }

    private isUpperBoundaryCrossed(newY: number) {
        return newY <= 0;
    }
}