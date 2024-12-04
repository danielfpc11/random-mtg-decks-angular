import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationLoginComponent } from './authentication-login.component';

@NgModule({
  declarations: [
    AuthenticationLoginComponent
  ],
  exports: [
    AuthenticationLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationLoginModule {
}
