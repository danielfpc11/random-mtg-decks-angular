import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from '../../models';
import { HttpClient } from '@angular/common/http';
import { DeckService } from './deck.service';
import { DECK_URL } from '../../constants';

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

  public saveNew(deck: Deck): Observable<void> {
    return this.httpClient
               .post<void>(`${DECK_URL}/new`, deck);
  }

  public saveUpdate(id: number, deck: Deck): Observable<void> {
    return this.httpClient
               .put<void>(`${DECK_URL}/update/${id}`, deck);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient
               .delete<void>(`${DECK_URL}/delete/${id}`);
  }

}
