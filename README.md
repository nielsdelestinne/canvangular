# Canvangular
 
HTML5 Canvas + Angular 5.x Experiment
- A work in progress
 
## Installation
 
1. Run `npm install`
2. Run `ng serve`
    - Application is served on `localhost:4200`
    
    
## My Todo List
- Implement a physics engine
- Circle / Rectangle issues:
    - Rectangle uses Dimensions (width - height). 
    Circle (for now) uses Dimensions as well, how to fit in Radius?
    - Boundary detection is based on Dimensions: works well for Rectangle, 
    glitches for Circles (upper boundary doesn't really work well)