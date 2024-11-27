import { NgModule } from '@angular/core';
import { GameAssignmentFormModule } from './game-assignment-form';
import { GameAssignmentPlayerListModule } from './game-assignment-player-list';

@NgModule({
  imports: [
    GameAssignmentFormModule,
    GameAssignmentPlayerListModule
  ]
})
export class GameAssignmentComponentsModule {
}
