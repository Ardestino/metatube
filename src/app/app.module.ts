import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'

import {MetatubeModule} from "./metatube/metatube.module";
import { AuthModule } from "./auth/auth.module";
import {ApiModule} from "../api/api.module";

import { HttpClientModule } from '@angular/common/http'
import {AppRoutingModule} from './app.routing'
import {AppComponent} from './app.component'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import { Configuration, ConfigurationParameters } from "../api/index";

const configFactory = () => {
  const configParams : ConfigurationParameters = {
    basePath : environment.basePath,
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
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MetatubeModule,
    AuthModule,
    ApiModule.forRoot(configFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
