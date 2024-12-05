import { Deck } from './deck.model';

export interface Player {
  id?: number,
  name: string,
  deck?: Deck,
  gameId?: number
}
