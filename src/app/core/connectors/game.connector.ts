import { Injectable } from '@angular/core';
import { ErrorHandlerService, GameService } from '../services';
import { catchError, map, Observable } from 'rxjs';
import { Game } from '../models';
import { GameAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class GameConnector {

  constructor(protected gameService: GameService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  findAllGames(): Observable<Game[]> {
    return this.gameService
               .findAll()
               .pipe(
                 map((gamePojos: any): Game[] => gamePojos.map((gamePojo: any): Game => GameAdapter.adaptResponseBody(gamePojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  findGameById(id: number): Observable<Game> {
    return this.gameService
               .findById(id)
               .pipe(
                 map((gamePojo: any): Game => GameAdapter.adaptResponseBody(gamePojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveNewGame(game: Game): Observable<number> {
    return this.gameService
               .saveNew(GameAdapter.adaptRequestBody(game))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveUpdateGame(id: number, game: Game): Observable<number> {
    return this.gameService
               .saveUpdate(id, GameAdapter.adaptRequestBody(game))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  deleteGameById(id: number): Observable<number> {
    return this.gameService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}
