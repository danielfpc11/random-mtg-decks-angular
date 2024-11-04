import { Observable } from 'rxjs';
import { Deck } from '../../models';

export abstract class DeckService {

  public abstract getDecks(): Observable<Deck[]>;

}
