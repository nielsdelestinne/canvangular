import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CanvasModule} from "./canvas/canvas.module";
import {AppRoutes} from "./app-routes";

@NgModule({
  imports: [
      RouterModule.forRoot(AppRoutes),
      CanvasModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
