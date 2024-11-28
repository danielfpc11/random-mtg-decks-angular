import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Game } from '../../models';
import { ActivatedRoute, Params } from '@angular/router';
import { GameConnector } from '../../connectors';
import { GAME_ID_PARAM } from '../../constants';

@Component({
  selector: 'game-assignment-saved-game',
  templateUrl: './game-assignment-saved-game.component.html',
  styleUrls: ['./game-assignment-saved-game.component.scss']
})
export class GameAssignmentSavedGameComponent implements OnInit {

  protected game$!: Observable<Game>;

  constructor(protected activatedRoute: ActivatedRoute,
              protected gameConnector: GameConnector) {
    this.game$ = this.activatedRoute
                     .params
                     .pipe(
                       map((params: Params): number => Number(params[GAME_ID_PARAM])),
                       mergeMap((gameId: number): Observable<Game> => this.gameConnector.findGameById(gameId))
                     );
  }

  public ngOnInit(): void {
    // this.game$ = this.activatedRoute
    //                  .params
    //                  .pipe(
    //                    map((params: Params): number => Number(params[GAME_ID_PARAM])),
    //                    mergeMap((gameId: number): Observable<Game> => this.gameConnector.findGameById(gameId))
    //                  );
  }


}
