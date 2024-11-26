import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { Observable } from 'rxjs';
import { Game } from '../../models';
import { HttpClient } from '@angular/common/http';
import { GAME_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements GameService {

  constructor(protected httpClient: HttpClient) {
  }

  public findAll(): Observable<Game[]> {
    return this.httpClient
               .get<Game[]>(`${GAME_URL}/all`);
  }

  public findById(id: number): Observable<Game> {
    return this.httpClient
               .get<Game>(`${GAME_URL}/get/${id}`);
  }

  public saveNew(game: Game): Observable<void> {
    // Connector y adapter
    let gameany: any = {
      playerDatas: game.players
    }
    return this.httpClient
               .post<void>(`${GAME_URL}/new`, gameany);
  }

  public saveUpdate(id: number, game: Game): Observable<void> {
    return this.httpClient
               .put<void>(`${GAME_URL}/update/${id}`, game);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient
               .delete<void>(`${GAME_URL}/delete/${id}`);
  }

}
