import { Injectable } from '@angular/core';
import { PlayerService } from '../services';
import { ErrorHandlerService } from '../../../shared';
import { catchError, map, Observable } from 'rxjs';
import { Player } from '../models';
import { PlayerAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class PlayerConnector {

  constructor(protected playerService: PlayerService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  findAllPlayers(): Observable<Player[]> {
    return this.playerService
               .findAll()
               .pipe(
                 map((playerPojos: any): Player[] => playerPojos.map((playerPojo: any): Player => PlayerAdapter.adaptResponseBody(playerPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  findPlayerById(id: number): Observable<Player> {
    return this.playerService
               .findById(id)
               .pipe(
                 map((playerPojo: any): Player => PlayerAdapter.adaptResponseBody(playerPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveNewPlayer(player: Player): Observable<number> {
    return this.playerService
               .saveNew(PlayerAdapter.adaptRequestBody(player))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveUpdatePlayer(id: number, player: Player): Observable<number> {
    return this.playerService
               .saveUpdate(id, PlayerAdapter.adaptRequestBody(player))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  deletePlayerById(id: number): Observable<number> {
    return this.playerService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}
