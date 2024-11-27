import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GameAssignmentSavedGameComponent } from './game-assignment-saved-game.component';
import { GameAssignmentPlayerListModule } from '../game-assignment-player-list';

@NgModule({
  declarations: [
    GameAssignmentSavedGameComponent
  ],
  exports: [
    GameAssignmentSavedGameComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    GameAssignmentPlayerListModule
  ]
})
export class GameAssignmentSavedGameModule {
}
