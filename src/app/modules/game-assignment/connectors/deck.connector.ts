import { Injectable } from '@angular/core';
import { DeckService } from '../services';
import { catchError, map, Observable } from 'rxjs';
import { Deck } from '../models';
import { DeckAdapter } from '../adapters';
import { ErrorHandlerService } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class DeckConnector {

  constructor(protected deckService: DeckService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  findAllDecks(): Observable<Deck[]> {
    return this.deckService
               .findAll()
               .pipe(
                 map((deckPojos: any): Deck[] => deckPojos.map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  findRandomDecks(quantity: number): Observable<Deck[]> {
    return this.deckService
               .findRandomDecks(quantity)
               .pipe(
                 map((deckPojos: any): Deck[] => deckPojos.map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo))),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  findDeckById(id: number): Observable<Deck> {
    return this.deckService
               .findById(id)
               .pipe(
                 map((deckPojo: any): Deck => DeckAdapter.adaptResponseBody(deckPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveNewDeck(deck: Deck): Observable<void> {
    return this.deckService
               .saveNew(DeckAdapter.adaptRequestBody(deck))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  saveUpdateDeck(id: number, deck: Deck): Observable<void> {
    return this.deckService
               .saveUpdate(id, DeckAdapter.adaptRequestBody(deck))
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  deleteDeckById(id: number): Observable<void> {
    return this.deckService
               .deleteById(id)
               .pipe(
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}
