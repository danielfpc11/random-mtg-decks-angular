import { Game, Player } from '../models';
import { PlayerAdapter } from './player.adapter';

export class GameAdapter {

  public static adaptResponseBody(data: any): Game {
    return {
      id: data.id,
      date: data.date,
      players: data.playerPojos.map((playerPojo: any): Player => PlayerAdapter.adaptResponseBody(playerPojo))
    };
  }

  public static adaptRequestBody(game: Game): any {
    return {
      id: game.id,
      date: game.date,
      playerPojos: game.players?.map((player: Player): any => PlayerAdapter.adaptRequestBody(player))
    };
  }

}
