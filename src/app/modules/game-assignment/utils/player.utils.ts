import { GAME_PLAYER_LIMIT } from '../constants';
import { Deck, Player } from '../../../core';

export class PlayerUtils {

  public static deletePlayer(name: string, players: Player[]): Player[] {
    return players.filter((player: Player): boolean => player.name !== name);
  }

  public static getPlayersWithNoDecks(players: Player[]): Player[] {
    return players.filter((player: Player): boolean => player.deck === undefined);
  }

  public static getPlayersNames(players: Player[]): string[] {
    return players.map((player: Player): string => player.name);
  }

  public static setPlayersDecks(players: Player[], decks: Deck[]): void {
    if (players.length == decks.length) {
      players.forEach((player: Player): void => {
        player.deck = decks.pop();
      });
    }
  }

  public static forcePlayerLimit(players: Player[]): Player[] {
    return players.length > GAME_PLAYER_LIMIT
           ? players.slice(0, GAME_PLAYER_LIMIT)
           : players;
  }

}
