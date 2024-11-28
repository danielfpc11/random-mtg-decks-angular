import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentSavedGameComponent } from './game-assignment-saved-game.component';
import { GameAssignmentPlayerListModule } from '../game-assignment-player-list';
import { GameAssignmentFormModule } from '../game-assignment-form';

@NgModule({
  declarations: [
    GameAssignmentSavedGameComponent
  ],
  exports: [
    GameAssignmentSavedGameComponent
  ],
  imports: [
    CommonModule,
    GameAssignmentPlayerListModule,
    GameAssignmentFormModule
  ]
})
export class GameAssignmentSavedGameModule {
}
