import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthenticationLoginComponent,
  GameAssignmentFormComponent,
  GameAssignmentSavedGameComponent,
  GameAssignmentSavedGameListComponent,
  HomeComponent
} from './modules';
import { CREATE_GAME_PAGE, HOME_PAGE, LOGIN_PAGE, SAVED_GAME_PAGE_GAME_ID, SAVED_GAMES_PAGE } from './core';

const routes: Routes = [
  {path: '', redirectTo: HOME_PAGE, pathMatch: 'full'},
  {path: HOME_PAGE, component: HomeComponent},
  {path: CREATE_GAME_PAGE, component: GameAssignmentFormComponent},
  {path: LOGIN_PAGE, component: AuthenticationLoginComponent},
  {path: SAVED_GAMES_PAGE, component: GameAssignmentSavedGameListComponent},
  {path: SAVED_GAME_PAGE_GAME_ID, component: GameAssignmentSavedGameComponent}
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
