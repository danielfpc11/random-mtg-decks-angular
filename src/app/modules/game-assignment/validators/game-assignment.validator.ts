import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Player } from '../models';
import { PlayerUtils } from '../utils';
import { GAME_PLAYER_LIMIT } from '../constants';

export class GameAssignmentValidator {

  public static repeatedPlayerName(players: Player[]): ValidatorFn {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      const isRepeatedPlayerName: boolean = PlayerUtils.getPlayersNames(players)
                                                       .includes(abstractControl.value);
      return isRepeatedPlayerName ? {repeatedPlayerName: {value: abstractControl.value}} : null;
    };
  }

  public static playerLimit(players: Player[]): ValidatorFn {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      const isPlayerLimit: boolean = players.length == GAME_PLAYER_LIMIT;
      return isPlayerLimit ? {playerLimitReached: {value: abstractControl.value}} : null;
    };
  }

}
