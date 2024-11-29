import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMessageComponent } from './global-message.component';

@NgModule({
  declarations: [
    GlobalMessageComponent
  ],
  exports: [
    GlobalMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GlobalMessageModule {
}
