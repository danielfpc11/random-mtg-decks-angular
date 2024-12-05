import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components';
import {
  ClipboardService,
  DefaultClipboardService,
  DefaultErrorHandlerService,
  DefaultGlobalMessageService,
  ErrorHandlerService,
  GlobalMessageService
} from '../core';

@NgModule({
  providers: [
    {provide: ClipboardService, useClass: DefaultClipboardService},
    {provide: ErrorHandlerService, useClass: DefaultErrorHandlerService},
    {provide: GlobalMessageService, useClass: DefaultGlobalMessageService}
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
