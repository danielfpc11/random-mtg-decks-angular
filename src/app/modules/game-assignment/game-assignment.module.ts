import { NgModule } from '@angular/core';
import { GameAssignmentComponentsModule } from './components';
import {
  DeckService,
  DefaultDeckService,
  DefaultGameService,
  DefaultPlayerService,
  GameService,
  PlayerService
} from './services';

@NgModule({
  imports: [
    GameAssignmentComponentsModule
  ],
  providers: [
    {provide: DeckService, useClass: DefaultDeckService},
    {provide: GameService, useClass: DefaultGameService},
    {provide: PlayerService, useClass: DefaultPlayerService}
  ]
})
export class GameAssignmentModule {
}
