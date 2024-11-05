import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAssignmentFormComponent } from './modules/game-assignment/components';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: GameAssignmentFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
