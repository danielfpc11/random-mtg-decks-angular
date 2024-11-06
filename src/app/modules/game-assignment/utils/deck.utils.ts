import { Deck, Player } from '../models';
import { PlayerUtils } from './player.utils';
import { ArrayUtils, EMPTY_STRING } from '../../../shared';

export class DeckUtils {

  public static createEmptyDeck(): Deck {
    return {publicUrl: EMPTY_STRING};
  }

  public static getRandomDeck(players: Player[], decks: Deck[]): Deck {
    decks = decks.filter((deck: Deck): boolean => !PlayerUtils.getPlayersDecks(players).includes(deck));
    return ArrayUtils.findAny(decks);
  }

}
