import { Deck } from './deck.model';

export interface Page {
  pageNumber: number,
  pageSize: number,
  totalResults: number,
  totalPages: number,
  data: Deck[]
}
