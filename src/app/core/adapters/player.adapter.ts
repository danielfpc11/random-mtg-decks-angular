import { Player } from '../models';
import { DeckAdapter } from './deck.adapter';

export class PlayerAdapter {

  public static adaptResponseBody(data: any): Player {
    return {
      id: data.id,
      name: data.name,
      deck: DeckAdapter.adaptResponseBody(data.deckPojo),
      gameId: data.gameId
    };
  }

  public static adaptRequestBody(player: Player): any {
    return {
      id: player.id,
      name: player.name,
      deckPojo: DeckAdapter.adaptRequestBody(player.deck!),
      gameId: player.gameId
    };
  }

}
