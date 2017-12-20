import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CanvasRoutes} from "./canvas-routes";

@NgModule({
imports: [RouterModule.forChild(CanvasRoutes)]
})
export class CanvasRoutingModule {

}