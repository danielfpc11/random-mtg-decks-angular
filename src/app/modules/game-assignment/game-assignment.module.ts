import { NgModule } from '@angular/core';
import { GameAssignmentComponentsModule } from './components';

@NgModule({
  exports: [
    GameAssignmentComponentsModule
  ],
  imports: [
    GameAssignmentComponentsModule
  ]
})
export class GameAssignmentModule {
}
