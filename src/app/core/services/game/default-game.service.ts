import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { Observable } from 'rxjs';
import { Game } from '../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export const GAME_URL: string = `${environment.serverUrl}/game`;

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

  public saveNew(game: Game): Observable<number> {
    return this.httpClient
               .post<number>(`${GAME_URL}/new`, game);
  }

  public saveUpdate(id: number, game: Game): Observable<number> {
    return this.httpClient
               .put<number>(`${GAME_URL}/update/${id}`, game);
  }

  public deleteById(id: number): Observable<number> {
    return this.httpClient
               .delete<number>(`${GAME_URL}/delete/${id}`);
  }

}
