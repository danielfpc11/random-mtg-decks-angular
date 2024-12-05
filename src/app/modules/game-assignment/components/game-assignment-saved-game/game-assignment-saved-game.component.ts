import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { GAME_ID_PARAM } from '../../constants';
import { Game, GAME_ASSIGNMENT_SAVED_GAME_GAME, GameConnector } from '../../../../core';
import { DateUtils } from '../../../global';

@Component({
  selector: 'game-assignment-saved-game',
  templateUrl: './game-assignment-saved-game.component.html',
  styleUrls: ['./game-assignment-saved-game.component.scss']
})
export class GameAssignmentSavedGameComponent implements OnInit {

  protected game$!: Observable<Game>;
  protected readonly DateUtils = DateUtils;
  protected readonly GAME_ASSIGNMENT_SAVED_GAME_GAME = GAME_ASSIGNMENT_SAVED_GAME_GAME;

  constructor(protected activatedRoute: ActivatedRoute,
              protected gameConnector: GameConnector) {
  }

  public ngOnInit(): void {
    this.game$ = this.activatedRoute
                     .params
                     .pipe(
                       map((params: Params): number => Number(params[GAME_ID_PARAM])),
                       switchMap((gameId: number): Observable<Game> => this.gameConnector.findGameById(gameId))
                     );
  }

}
