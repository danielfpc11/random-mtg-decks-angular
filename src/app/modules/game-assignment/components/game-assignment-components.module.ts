import { NgModule } from '@angular/core';
import { GameAssignmentFormModule } from './game-assignment-form';
import { GameAssignmentPlayerListModule } from './game-assignment-player-list';
import { GameAssignmentSavedGameModule } from './game-assignment-saved-game';
import { GameAssignmentSavedGameListModule } from './game-assignment-saved-game-list';

@NgModule({
  imports: [
    GameAssignmentFormModule,
    GameAssignmentPlayerListModule,
    GameAssignmentSavedGameModule,
    GameAssignmentSavedGameListModule
  ]
})
export class GameAssignmentComponentsModule {
}
