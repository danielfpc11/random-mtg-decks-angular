import { Player } from './player.model';

export interface Game {
  id?: number,
  date: Date,
  players?: Player[]
}
