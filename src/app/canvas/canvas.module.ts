import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Example1Component} from './examples/example1/example1.component';
import {CanvasRoutingModule} from "./canvas-routing.module";
import {Example2Component} from './examples/example2/example2.component';
import {Example3Component} from './examples/example3/example3.component';

@NgModule({
    imports: [
        CommonModule,
        CanvasRoutingModule
    ],
    providers: [],
    declarations: [
        Example1Component,
        Example2Component,
        Example3Component]
})
export class CanvasModule {
}
