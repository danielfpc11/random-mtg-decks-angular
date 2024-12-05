import { Component } from '@angular/core';
import { GLOBAL_NAVBAR_BRAND, GLOBAL_NAVBAR_CREATE_GAME, GLOBAL_NAVBAR_SAVED_GAMES } from '../../../../core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly GLOBAL_NAVBAR_BRAND = GLOBAL_NAVBAR_BRAND;
  protected readonly GLOBAL_NAVBAR_CREATE_GAME = GLOBAL_NAVBAR_CREATE_GAME;
  protected readonly GLOBAL_NAVBAR_SAVED_GAMES = GLOBAL_NAVBAR_SAVED_GAMES;

}
