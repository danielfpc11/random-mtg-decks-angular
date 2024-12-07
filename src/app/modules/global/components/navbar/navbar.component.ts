import { Component } from '@angular/core';
import { CREATE_GAME_PAGE, HOME_PAGE, SAVED_GAMES_PAGE } from '../../../../core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly CREATE_GAME_PAGE = CREATE_GAME_PAGE;
  protected readonly HOME_PAGE = HOME_PAGE;
  protected readonly SAVED_GAMES_PAGE = SAVED_GAMES_PAGE;

}
