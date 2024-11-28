import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentSavedGameListComponent } from './game-assignment-saved-game-list.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GameAssignmentSavedGameListComponent
  ],
  exports: [
    GameAssignmentSavedGameListComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule
  ]
})
export class GameAssignmentSavedGameListModule {
}
