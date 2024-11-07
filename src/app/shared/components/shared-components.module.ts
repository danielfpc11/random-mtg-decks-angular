import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar';
import { HomeModule } from './home';

@NgModule({
  exports: [
    HomeModule,
    NavbarModule
  ],
  imports: [
    HomeModule,
    NavbarModule
  ]
})
export class SharedComponentsModule {
}
