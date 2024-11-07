import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components';

@NgModule({
  exports: [
    SharedComponentsModule
  ],
  imports: [
    SharedComponentsModule
  ]
})
export class SharedModule {
}
