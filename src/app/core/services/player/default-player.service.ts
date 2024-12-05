import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { Observable } from 'rxjs';
import { Player } from '../../models';
import { HttpClient } from '@angular/common/http';
import { PLAYER_URL } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class DefaultPlayerService implements PlayerService {

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

  public saveNew(player: Player): Observable<number> {
    return this.httpClient
               .post<number>(`${PLAYER_URL}/new`, player);
  }

  public saveUpdate(id: number, player: Player): Observable<number> {
    return this.httpClient
               .put<number>(`${PLAYER_URL}/update/${id}`, player);
  }

  public deleteById(id: number): Observable<number> {
    return this.httpClient
               .delete<number>(`${PLAYER_URL}/delete/${id}`);
  }

}
