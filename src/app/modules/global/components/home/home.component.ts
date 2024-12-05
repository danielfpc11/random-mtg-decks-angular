import { Component } from '@angular/core';
import { GLOBAL_HOME_START_NEW_GAME } from '../../../../core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly GLOBAL_HOME_START_NEW_GAME = GLOBAL_HOME_START_NEW_GAME;

}
