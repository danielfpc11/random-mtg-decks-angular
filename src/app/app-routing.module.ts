import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared';
import { GameAssignmentFormComponent, GameAssignmentSavedGameComponent, GameAssignmentSavedGameListComponent } from './modules';
import { AuthenticationLoginComponent } from './modules/authentication/components';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create-game', component: GameAssignmentFormComponent},
  {path: 'login', component: AuthenticationLoginComponent},
  {path: 'saved-games', component: GameAssignmentSavedGameListComponent},
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
