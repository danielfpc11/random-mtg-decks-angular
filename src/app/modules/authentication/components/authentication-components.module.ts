import { NgModule } from '@angular/core';
import { AuthenticationLoginModule } from './authentication-login';

@NgModule({
  exports: [
    AuthenticationLoginModule
  ],
  imports: [
    AuthenticationLoginModule
  ]
})
export class AuthenticationComponentsModule {
}
