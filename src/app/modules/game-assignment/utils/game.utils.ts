import { Game } from '../../../core';

export class GameUtils {

  public static createNewGame(): Game {
    return {players: [], date: new Date()};
  }

}
