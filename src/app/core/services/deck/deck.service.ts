import { Observable } from 'rxjs';
import { Deck } from '../../models';

export abstract class DeckService {

  public abstract findAll(): Observable<Deck[]>;

  public abstract findRandomDecks(quantity: number): Observable<Deck[]>;

  public abstract findById(id: number): Observable<Deck>;

  public abstract saveNew(deck: Deck): Observable<number>;

  public abstract saveUpdate(id: number, deck: Deck): Observable<number>;

  public abstract deleteById(id: number): Observable<number>;

}
