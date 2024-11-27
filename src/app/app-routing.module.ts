import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared';
import { GameAssignmentFormComponent, GameAssignmentSavedGameComponent } from './modules';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create-game', component: GameAssignmentFormComponent},
  {path: 'saved-game/:gameId', component: GameAssignmentSavedGameComponent}
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
