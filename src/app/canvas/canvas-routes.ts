import {Routes} from "@angular/router";
import {Example1Component} from "./examples/example1/example1.component";
import {Example2Component} from "./examples/example2/example2.component";
import {Example3Component} from "./examples/example3/example3.component";

export const CanvasRoutes: Routes = [
    {path: "examples/example1", component: Example1Component},
    {path: "examples/example2", component: Example2Component},
    {path: "examples/example3", component: Example3Component}
];