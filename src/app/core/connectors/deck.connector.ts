import { Injectable } from '@angular/core';
import { DeckService, ErrorHandlerService } from '../services';
import { catchError, map, Observable } from 'rxjs';
import { Deck } from '../models';
import { DeckAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class DeckConnector {

  constructor(protected deckService: DeckService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  public findAllDecks(): Observable<Deck[]> {
    return this.deckService
               .findAll()
               .pipe(
                 map((deckPojos: any): Deck[] => deckPojos.map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public findRandomDecks(quantity: number): Observable<Deck[]> {
    return this.deckService
               .findRandomDecks(quantity)
               .pipe(
                 map((deckPojos: any): Deck[] => deckPojos.map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public findDeckById(id: number): Observable<Deck> {
    return this.deckService
               .findById(id)
               .pipe(
                 map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveNewDeck(deck: Deck): Observable<number> {
    return this.deckService
               .saveNew(DeckAdapter.adaptRequestBody(deck))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public saveUpdateDeck(id: number, deck: Deck): Observable<number> {
    return this.deckService
               .saveUpdate(id, DeckAdapter.adaptRequestBody(deck))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public deleteDeckById(id: number): Observable<number> {
    return this.deckService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}
