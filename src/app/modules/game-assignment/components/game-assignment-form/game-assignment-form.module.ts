import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAssignmentFormComponent } from './game-assignment-form.component';
import { GameAssignmentPlayerListModule } from '../game-assignment-player-list';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameAssignmentFormComponent
  ],
  imports: [
    CommonModule,
    GameAssignmentPlayerListModule,
    TranslateModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class GameAssignmentFormModule {
}
