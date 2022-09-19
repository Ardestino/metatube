import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Creados por mi
import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent, DummyTableRichComponent } from './pages/main-page/main-page.component';
import { YoupezModule } from "../../@youpez/youpez.module";

// Clonados de main
import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'


@NgModule({
  declarations: [
    MainPageComponent,
    DummyTableRichComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule,
    YoupezModule,
    LayoutModule,
    ChartsModule,
    AgGridModule,
    SharedModule
  ]
})
export class MetatubeModule { }
