import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar';

@NgModule({
  exports: [
    NavbarModule
  ],
  imports: [
    NavbarModule
  ]
})
export class SharedComponentsModule {
}
