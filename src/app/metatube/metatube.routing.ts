import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AuthGuardService } from "../auth/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuardService]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetatubeRoutingModule { }
