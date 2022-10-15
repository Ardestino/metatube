import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AuthRoutingModule} from './auth-routing.module'
import {AuthLoginComponent} from './auth-login/auth-login.component'
import {AuthSignupComponent} from './auth-signup/auth-signup.component'
import {AuthConfirmationComponent} from './auth-confirmation/auth-confirmation.component'
import {AuthForgotPasswordComponent} from './auth-forgot-password/auth-forgot-password.component'
import {AuthResetPasswordComponent} from './auth-reset-password/auth-reset-password.component'

// FIXME: Delete youpez module
import {YoupezModule} from "../../@youpez/youpez.module"

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthSignupComponent,
    AuthConfirmationComponent,
    AuthForgotPasswordComponent,
    AuthResetPasswordComponent,
    //AuthBookADemoComponent,
    //ComingSoonComponent,
  ],
  imports: [
    CommonModule,
    YoupezModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
