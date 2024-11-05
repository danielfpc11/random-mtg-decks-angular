import { NgModule } from '@angular/core';
import { DeckService, DefaultDeckService, DefaultPageService, PageService } from './services';

@NgModule({
  imports: [
    GameAssignmentComponentsModule
  ],
  providers: [
    {provide: DeckService, useClass: DefaultDeckService},
    {provide: PageService, useClass: DefaultPageService}
  ]
})
export class GameAssignmentModule {
}
