import { Component } from '@angular/core';
import { CREATE_GAME_PAGE, GLOBAL_NAVBAR_BRAND, GLOBAL_NAVBAR_CREATE_GAME, GLOBAL_NAVBAR_SAVED_GAMES, HOME_PAGE, SAVED_GAMES_PAGE } from '../../../../core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly CREATE_GAME_PAGE = CREATE_GAME_PAGE;
  protected readonly GLOBAL_NAVBAR_BRAND = GLOBAL_NAVBAR_BRAND;
  protected readonly GLOBAL_NAVBAR_CREATE_GAME = GLOBAL_NAVBAR_CREATE_GAME;
  protected readonly GLOBAL_NAVBAR_SAVED_GAMES = GLOBAL_NAVBAR_SAVED_GAMES;
  protected readonly HOME_PAGE = HOME_PAGE;
  protected readonly SAVED_GAMES_PAGE = SAVED_GAMES_PAGE;

}
