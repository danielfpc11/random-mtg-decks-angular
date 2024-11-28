import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentSavedGameListComponent } from './game-assignment-saved-game-list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    GameAssignmentSavedGameListComponent
  ],
  exports: [
    GameAssignmentSavedGameListComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class GameAssignmentSavedGameListModule {
}
