import {BaseShape} from "../entities/shapes/base/shape.abstract";
import {CollisionDetectableShape} from "../entities/shapes/collision-detectable/collision-detectable-shape.class";

export class CollisionEngine {

    detectCollisions(shapes: BaseShape[]): void {
        const collisionDetectableShapes: BaseShape[] = shapes
            .filter(shape => shape instanceof CollisionDetectableShape);
        collisionDetectableShapes.forEach((shape: CollisionDetectableShape) => {
            for (let index = 0; index < shapes.length; index++) {
                if(!Object.is(shape, shapes[index])) {
                    shape.collisionDetection(shapes[index]);
                }
            }
        });

    }

}