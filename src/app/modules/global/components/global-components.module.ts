import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar';
import { HomeModule } from './home';
import { GlobalMessageModule } from './global-message';

@NgModule({
  exports: [
    GlobalMessageModule,
    HomeModule,
    NavbarModule
  ],
  imports: [
    GlobalMessageModule,
    HomeModule,
    NavbarModule
  ]
})
export class GlobalComponentsModule {
}
