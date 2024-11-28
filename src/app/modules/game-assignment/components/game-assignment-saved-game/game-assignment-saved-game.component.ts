import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, tap } from 'rxjs';
import { Game } from '../../models';
import { ActivatedRoute, Params } from '@angular/router';
import { GameConnector } from '../../connectors';
import { GAME_ID_PARAM } from '../../constants';
import { DateUtils } from '../../../../shared';

@Component({
  selector: 'game-assignment-saved-game',
  templateUrl: './game-assignment-saved-game.component.html',
  styleUrls: ['./game-assignment-saved-game.component.scss']
})
export class GameAssignmentSavedGameComponent implements OnInit {

  protected game$!: Observable<Game>;
  protected readonly DateUtils = DateUtils;

  constructor(protected activatedRoute: ActivatedRoute,
              protected gameConnector: GameConnector) {
  }

  public ngOnInit(): void {
    this.game$ = this.activatedRoute
                     .params
                     .pipe(
                       map((params: Params): number => Number(params[GAME_ID_PARAM])),
                       mergeMap((gameId: number): Observable<Game> => this.gameConnector.findGameById(gameId))
                     );
  }

}
