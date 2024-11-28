import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentSavedGameComponent } from './game-assignment-saved-game.component';
import { GameAssignmentPlayerListModule } from '../game-assignment-player-list';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule
  ]
})
export class GameAssignmentSavedGameModule {
}
