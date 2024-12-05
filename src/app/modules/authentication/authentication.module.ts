import { NgModule } from '@angular/core';
import { AuthenticationInterceptor, ForbiddenResponseInterceptor } from './interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationComponentsModule } from './components';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ForbiddenResponseInterceptor, multi: true},
  ],
  exports: [
    AuthenticationComponentsModule
  ],
  imports: [
    AuthenticationComponentsModule
  ]
})
export class AuthenticationModule {
}
