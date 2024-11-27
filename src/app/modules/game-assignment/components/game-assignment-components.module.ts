import { NgModule } from '@angular/core';
import { GameAssignmentFormModule } from './game-assignment-form';
import { GameAssignmentPlayerListModule } from './game-assignment-player-list';
import { GameAssignmentSavedGameModule } from './game-assignment-saved-game';

@NgModule({
  imports: [
    GameAssignmentFormModule,
    GameAssignmentPlayerListModule,
    GameAssignmentSavedGameModule
  ]
})
export class GameAssignmentComponentsModule {
}
