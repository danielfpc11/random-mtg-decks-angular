import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentSavedGameListComponent } from './game-assignment-saved-game-list.component';

@NgModule({
  declarations: [
    GameAssignmentSavedGameListComponent
  ],
  exports: [
    GameAssignmentSavedGameListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameAssignmentSavedGameListModule {
}
