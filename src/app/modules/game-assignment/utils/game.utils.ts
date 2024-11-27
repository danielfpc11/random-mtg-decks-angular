import { Game } from '../models';

export class GameUtils {

  public static createNewGame(): Game {
    return {players: [], date: new Date()};
  }

}
