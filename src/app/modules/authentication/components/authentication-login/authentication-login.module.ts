import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationLoginComponent } from './authentication-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AuthenticationLoginComponent
  ],
  exports: [
    AuthenticationLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthenticationLoginModule {
}
