import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board/board.component';
import {CanvasRoutingModule} from "./canvas-routing.module";

@NgModule({
    imports: [
        CommonModule,
        CanvasRoutingModule
    ],
    providers: [],
    declarations: [BoardComponent]
})
export class CanvasModule {
}
