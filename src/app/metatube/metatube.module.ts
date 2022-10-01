import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Creados por mi
import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoupezModule } from "../../@youpez/youpez.module";

// Clonados de main
import {SharedModule} from "../shared/shared.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import { QuestionComponent } from "./components/question/question.component";
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TarjetaEstadisticaComponent } from './components/tarjeta-estadistica/tarjeta-estadistica.component';
import { ViralVsCautivoComponent } from './components/viral-vs-cautivo/viral-vs-cautivo.component';
import { DummyTableRichComponent } from "./components/dummy-table-rich/dummy-table-rich.component";
import { LayoutSidebarComponent } from "./components/menu/layout-sidebar/layout-sidebar.component";
import { LayoutMiniSidebarComponent } from "./components/menu/layout-mini-sidebar/layout-mini-sidebar.component";
import { HeaderMiniComponent } from "./components/header-mini/header-mini.component";

@NgModule({
  declarations: [
    MainPageComponent,
    DummyTableRichComponent,
    QuestionComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    TarjetaEstadisticaComponent,
    ViralVsCautivoComponent,
    LayoutSidebarComponent,
    LayoutMiniSidebarComponent,
    HeaderMiniComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule,
    YoupezModule,
    ChartsModule,
    AgGridModule,
    SharedModule
  ]
})
export class MetatubeModule { }
