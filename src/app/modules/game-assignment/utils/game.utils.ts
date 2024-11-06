import { HYPHEN_STRING } from '../../../shared';
import { Game } from '../models';
import { GAME_ID_MARK } from '../constants';

export class GameUtils {

  public static getGameId(id: number): string {
    return GAME_ID_MARK + HYPHEN_STRING + id;
  }

  public static createNewGame(): Game {
    return {id: new Date().getTime(), players: []};
  }

}
