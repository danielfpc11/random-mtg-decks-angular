import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentPlayerListComponent } from './game-assignment-player-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GameAssignmentPlayerListComponent
  ],
  exports: [
    GameAssignmentPlayerListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class GameAssignmentPlayerListModule {
}
