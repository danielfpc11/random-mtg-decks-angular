import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { Observable } from 'rxjs';
import { Player } from '../../models';
import { HttpClient } from '@angular/common/http';
import { PLAYER_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements PlayerService {

  constructor(protected httpClient: HttpClient) {
  }

  public findAll(): Observable<Player[]> {
    return this.httpClient
               .get<Player[]>(`${PLAYER_URL}/all`);
  }

  public findById(id: number): Observable<Player> {
    return this.httpClient
               .get<Player>(`${PLAYER_URL}/get/${id}`);
  }

  public saveNew(player: Player): Observable<void> {
    return this.httpClient
               .post<void>(`${PLAYER_URL}/new`, player);
  }

  public saveUpdate(id: number, player: Player): Observable<void> {
    return this.httpClient
               .put<void>(`${PLAYER_URL}/update/${id}`, player);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient
               .delete<void>(`${PLAYER_URL}/delete/${id}`);
  }

}
