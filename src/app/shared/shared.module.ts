import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components';
import { ClipboardService, DefaultClipboardService } from './services';

@NgModule({
  providers: [
    {provide: ClipboardService, useClass: DefaultClipboardService}
  ],
  exports: [
    SharedComponentsModule
  ],
  imports: [
    SharedComponentsModule
  ]
})
export class SharedModule {
}
