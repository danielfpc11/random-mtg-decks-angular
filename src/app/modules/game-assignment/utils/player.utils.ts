import { Deck, Player } from '../models';

export class PlayerUtils {

  public static deletePlayer(name: string, players: Player[]): Player[] {
    return players.filter((player: Player): boolean => player.name !== name);
  }

  public static getPlayersDecks(players: Player[]): Deck[]  {
    return players.map((player: Player): Deck => player.deck);
  }

  public static getPlayersNames(players: Player[]): string[] {
    return players.map((player: Player): string => player.name);
  }

}
