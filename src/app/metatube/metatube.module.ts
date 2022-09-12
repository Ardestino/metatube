import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule
  ]
})
export class MetatubeModule { }
