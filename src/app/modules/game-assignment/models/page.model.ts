import { Deck } from './deck.model';

export interface Page {
  totalResults: number,
  totalPages: number,
  data: Deck[]
}
