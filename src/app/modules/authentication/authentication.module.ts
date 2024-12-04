import { NgModule } from '@angular/core';
import { AuthenticationService, DefaultAuthenticationService } from './services';
import { AuthenticationInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForbiddenResponseInterceptor } from './interceptors/forbidden-response.interceptor';

@NgModule({
  providers: [
    {provide: AuthenticationService, useClass: DefaultAuthenticationService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ForbiddenResponseInterceptor, multi: true},
  ]
})
export class AuthenticationModule {
}
