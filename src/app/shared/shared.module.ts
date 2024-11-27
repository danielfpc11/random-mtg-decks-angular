import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components';
import {
  ClipboardService,
  DefaultClipboardService,
  DefaultErrorHandlerService,
  ErrorHandlerService
} from './services';

@NgModule({
  providers: [
    {provide: ClipboardService, useClass: DefaultClipboardService},
    {provide: ErrorHandlerService, useClass: DefaultErrorHandlerService},
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
