import { NgModule } from '@angular/core';
import { AuthenticationService, DefaultAuthenticationService } from './services';
import { AuthenticationInterceptor, ForbiddenResponseInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  providers: [
    {provide: AuthenticationService, useClass: DefaultAuthenticationService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ForbiddenResponseInterceptor, multi: true},
  ]
})
export class AuthenticationModule {
}
