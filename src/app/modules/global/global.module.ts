import { NgModule } from '@angular/core';
import { GlobalComponentsModule } from './components';

@NgModule({
  exports: [
    GlobalComponentsModule
  ],
  imports: [
    GlobalComponentsModule
  ]
})
export class GlobalModule {
}
