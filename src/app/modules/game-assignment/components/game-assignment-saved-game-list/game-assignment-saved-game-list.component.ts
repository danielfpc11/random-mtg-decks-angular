import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Game,
  GAME_ASSIGNMENT_SAVED_GAME_LIST_DATE,
  GAME_ASSIGNMENT_SAVED_GAME_LIST_PLAYERS,
  GameConnector
} from '../../../../core';
import { DateUtils } from '../../../global';

@Component({
  selector: 'game-assignment-saved-game-list',
  templateUrl: './game-assignment-saved-game-list.component.html',
  styleUrls: ['./game-assignment-saved-game-list.component.scss']
})
export class GameAssignmentSavedGameListComponent implements OnInit {

  protected games$!: Observable<Game[]>;
  protected readonly DateUtils = DateUtils;
  protected readonly GAME_ASSIGNMENT_SAVED_GAME_LIST_DATE = GAME_ASSIGNMENT_SAVED_GAME_LIST_DATE;
  protected readonly GAME_ASSIGNMENT_SAVED_GAME_LIST_PLAYERS = GAME_ASSIGNMENT_SAVED_GAME_LIST_PLAYERS;

  constructor(protected gameConnector: GameConnector) {
  }

  public ngOnInit(): void {
    this.games$ = this.gameConnector.findAllGames();
  }

}
