import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Player } from '../models';
import { PlayerUtils } from '../utils';

export class GameAssignmentValidator {

  public static repeatedPlayerName(players: Player[]): ValidatorFn {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      const isRepeatedPlayerName: boolean = PlayerUtils.getPlayersNames(players)
                                                       .includes(abstractControl.value);
      return isRepeatedPlayerName ? {repeatedPlayerName: {value: abstractControl.value}} : null;
    };
  }

}
