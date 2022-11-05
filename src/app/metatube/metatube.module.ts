import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Creados por mi
import { MetatubeRoutingModule } from "./metatube.routing";
import { MainPageComponent } from './components/pages/main-page/main-page.component';

// Clonados de main
import { SharedModule } from "../shared/shared.module"
import { AgGridModule } from '@ag-grid-community/angular'
import { ChartsModule } from '../../app/charts/charts.module'
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TarjetaEstadisticaComponent } from './components/tarjetas/tarjeta-estadistica/tarjeta-estadistica.component';
import { ViralVsCautivoComponent } from './components/herramientas/viral-vs-cautivo/viral-vs-cautivo.component';
import { DummyTableRichComponent } from "./components/herramientas/dummy-table-rich/dummy-table-rich.component";
import { LayoutSidebarComponent } from "./components/layout/layout-sidebar/layout-sidebar.component";
import { LayoutMiniSidebarComponent } from "./components/layout/layout-mini-sidebar/layout-mini-sidebar.component";
import { HeaderMiniComponent } from "./components/layout/header-mini/header-mini.component";
import { MiniSidebarItemComponent } from './components/layout/layout-mini-sidebar-item/mini-sidebar-item.component';
import { AppSearchComponent } from "./components/layout/app-search/app-search.component";

// Reducer
import { StoreModule } from '@ngrx/store';
import { metaReducer, metaFeatureKey, AppEffects } from './store';
import { CounterComponent } from './components/herramientas/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { ContenedorTarjetasComponent } from './components/tarjetas/contenedor-tarjetas/contenedor-tarjetas.component';
import { TarjetaComponent } from './components/tarjetas/tarjeta/tarjeta.component';
import { TarjetaHeaderComponent } from './components/tarjetas/tarjeta-header/tarjeta-header.component';
import { TarjetaHeaderToolComponent } from './components/tarjetas/tarjeta-header-tool/tarjeta-header-tool.component';
import { TarjetaContenidoComponent } from './components/tarjetas/tarjeta-contenido/tarjeta-contenido.component';
import { MejorDiaSemanaComponent } from './components/herramientas/mejor-dia-semana/mejor-dia-semana.component';
import { TopVideosComponent } from './components/herramientas/top-videos/top-videos.component';
import { TitulosSimilaresComponent } from './components/herramientas/titulos-similares/titulos-similares.component';
import { GrafoDirigidoComponent } from './components/herramientas/grafo-dirigido/grafo-dirigido.component'

// Echarts
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    MainPageComponent,
    DummyTableRichComponent,
    DashboardComponent,
    HeaderComponent,
    TarjetaEstadisticaComponent,
    ViralVsCautivoComponent,
    LayoutSidebarComponent,
    LayoutMiniSidebarComponent,
    HeaderMiniComponent,
    MiniSidebarItemComponent,
    CounterComponent,
    ContenedorTarjetasComponent,
    TarjetaComponent,
    TarjetaHeaderComponent,
    TarjetaHeaderToolComponent,
    TarjetaContenidoComponent,
    MejorDiaSemanaComponent,
    TopVideosComponent,
    TitulosSimilaresComponent,
    GrafoDirigidoComponent,
    AppSearchComponent
  ],
  imports: [
    CommonModule,
    MetatubeRoutingModule,
    StoreModule.forRoot(metaReducer),
    EffectsModule.forRoot(AppEffects),
    ChartsModule,
    AgGridModule,
    SharedModule, // SideNav
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class MetatubeModule { }
