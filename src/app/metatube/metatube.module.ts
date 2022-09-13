import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoupezModule } from "../../@youpez/youpez.module";
import { LayoutModule } from "../layout/layout.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule,
    YoupezModule,
    LayoutModule
  ]
})
export class MetatubeModule { }
