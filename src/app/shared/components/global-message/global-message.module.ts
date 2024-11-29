import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalMessageComponent } from './global-message.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GlobalMessageComponent
  ],
  exports: [
    GlobalMessageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class GlobalMessageModule {
}
