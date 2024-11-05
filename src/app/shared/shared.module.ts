import { NgModule } from '@angular/core';
import { ClipboardService, DefaultClipboardService } from './services';

@NgModule({
  providers: [
    {provide: ClipboardService, useClass: DefaultClipboardService}
  ]
})
export class SharedModule {
}
