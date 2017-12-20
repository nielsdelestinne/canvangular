import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrumboardComponent} from './scrumboard/scrumboard.component';
import {CanvasRoutingModule} from "./canvas-routing.module";
import {WindowService} from "./shared/window/window.service";

@NgModule({
    imports: [
        CommonModule,
        CanvasRoutingModule
    ],
    providers: [
        WindowService
    ],
    declarations: [ScrumboardComponent]
})
export class CanvasModule {
}
