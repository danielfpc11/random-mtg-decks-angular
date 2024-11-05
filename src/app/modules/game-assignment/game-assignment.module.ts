import { NgModule } from '@angular/core';
import { DeckService, DefaultDeckService, DefaultGameService, DefaultPageService, GameService, PageService } from './services';
import { GameAssignmentComponentsModule } from './components';

@NgModule({
  imports: [
    GameAssignmentComponentsModule
  ],
  providers: [
    {provide: DeckService, useClass: DefaultDeckService},
    {provide: GameService, useClass: DefaultGameService},
    {provide: PageService, useClass: DefaultPageService}
  ]
})
export class GameAssignmentModule {
}
