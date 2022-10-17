import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthWelcomeScreenComponent } from './auth-welcome-screen/auth-welcome-screen.component';
import { AuthConfirmationComponent } from './auth-confirmation/auth-confirmation.component';
import { AuthForgotPasswordComponent } from './auth-forgot-password/auth-forgot-password.component';
import { AuthResetPasswordComponent } from './auth-reset-password/auth-reset-password.component';

import { AppLayoutDividedComponent } from './app-layout-divided/app-layout-divided.component';
import { AppLayoutDividedAltComponent } from './app-layout-divided-alt/app-layout-divided-alt.component';
import { AppLayoutDividedFullComponent } from './app-layout-divided-full/app-layout-divided-full.component';
import { AppLayoutBasicComponent } from './app-layout-basic/app-layout-basic.component';

//import {AuthBookADemoComponent} from './auth-book-a-demo/auth-book-a-demo.component'
//import {ComingSoonComponent} from "./coming-soon/coming-soon.component"

@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthSignupComponent,
    AuthConfirmationComponent,
    AuthForgotPasswordComponent,
    AuthResetPasswordComponent,
    AppLayoutDividedComponent,
    AppLayoutDividedAltComponent,
    AppLayoutDividedFullComponent,
    AppLayoutBasicComponent,
    AuthWelcomeScreenComponent
    //AuthBookADemoComponent,
    //ComingSoonComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
