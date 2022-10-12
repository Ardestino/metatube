import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Creados por mi
import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent } from './components/pages/main-page/main-page.component';
//import { YoupezModule } from "../../@youpez/youpez.module";

// Clonados de main
import {SharedModule} from "../shared/shared.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import { QuestionComponent } from "./components/herramientas/question/question.component";
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TarjetaEstadisticaComponent } from './components/herramientas/tarjeta-estadistica/tarjeta-estadistica.component';
import { ViralVsCautivoComponent } from './components/herramientas/viral-vs-cautivo/viral-vs-cautivo.component';
import { DummyTableRichComponent } from "./components/herramientas/dummy-table-rich/dummy-table-rich.component";
import { LayoutSidebarComponent } from "./components/layout/layout-sidebar/layout-sidebar.component";
import { LayoutMiniSidebarComponent } from "./components/layout/layout-mini-sidebar/layout-mini-sidebar.component";
import { HeaderMiniComponent } from "./components/layout/header-mini/header-mini.component";
import { MiniSidebarItemComponent } from './components/layout/layout-mini-sidebar-item/mini-sidebar-item.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DummyTableRichComponent,
    QuestionComponent,
    DashboardComponent,
    HeaderComponent,
    TarjetaEstadisticaComponent,
    ViralVsCautivoComponent,
    LayoutSidebarComponent,
    LayoutMiniSidebarComponent,
    HeaderMiniComponent,
    MiniSidebarItemComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule,
    //YoupezModule,
    ChartsModule,
    AgGridModule,
    SharedModule // SideNav
  ]
})
export class MetatubeModule { }
