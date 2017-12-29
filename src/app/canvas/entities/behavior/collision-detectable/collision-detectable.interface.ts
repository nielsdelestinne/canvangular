import {BaseShape} from "../../shapes/base/shape.abstract";

export interface CollisionDetectable {

    isCollisionDetected(otherShape: BaseShape): boolean;

}