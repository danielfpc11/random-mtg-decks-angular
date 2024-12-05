import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from '../../models';
import { HttpClient } from '@angular/common/http';
import { DeckService } from './deck.service';
import { environment } from '../../../../environments/environment';

export const DECK_URL: string = `${environment.serverUrl}/deck`;

@Injectable({
  providedIn: 'root'
})
export class DefaultDeckService implements DeckService {

  constructor(protected httpClient: HttpClient) {
  }

  public findAll(): Observable<Deck[]> {
    return this.httpClient
               .get<Deck[]>(`${DECK_URL}/all`);
  }

  public findRandomDecks(quantity: number): Observable<Deck[]> {
    return this.httpClient
               .get<Deck[]>(`${DECK_URL}/random/${quantity}`);
  }

  public findById(id: number): Observable<Deck> {
    return this.httpClient
               .get<Deck>(`${DECK_URL}/get/${id}`);
  }

  public saveNew(deck: Deck): Observable<number> {
    return this.httpClient
               .post<number>(`${DECK_URL}/new`, deck);
  }

  public saveUpdate(id: number, deck: Deck): Observable<number> {
    return this.httpClient
               .put<number>(`${DECK_URL}/update/${id}`, deck);
  }

  public deleteById(id: number): Observable<number> {
    return this.httpClient
               .delete<number>(`${DECK_URL}/delete/${id}`);
  }

}
