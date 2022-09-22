import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxMdModule} from "ngx-md"

import {CoreModule} from "./core/core.module"
import {SharedModule} from './shared/shared.module'
import {MetatubeModule} from "./metatube/metatube.module";
import { AuthModule } from "./auth/auth.module";
import {ApiModule} from "../api/api.module";

import {
  HttpClientModule,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http'

import {AppRoutingModule} from './app.routing'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {reducers, metaReducers} from './store/app.reducers'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {AppEffects} from './store/app.effects'
import { Configuration, ConfigurationParameters } from "../api/index";


const configFactory = () => {
  const configParams : ConfigurationParameters = {
    basePath : "http://localhost:8000",
    username : "admin",
    password : "admin"
  }
  return new Configuration(configParams);
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    NgxMdModule.forRoot(),
    MetatubeModule,
    AuthModule,
    ApiModule.forRoot(configFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
