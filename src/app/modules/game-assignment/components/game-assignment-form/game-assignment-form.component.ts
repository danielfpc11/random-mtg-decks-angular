import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY_STRING, FormUtils, ZERO_NUMBER } from '../../../../shared';
import { Deck, Game } from '../../models';
import { GAME_PLAYER_MIN, NAME_FORM_CONTROL, PLAYER_NAME_LIMIT } from '../../constants';
import { GameAssignmentValidator } from '../../validators';
import { Subscription, tap } from 'rxjs';
import { GameUtils, PlayerUtils } from '../../utils';
import { DeckConnector, GameConnector } from '../../connectors';

@Component({
  selector: 'game-assignment-form',
  templateUrl: './game-assignment-form.component.html',
  styleUrls: ['./game-assignment-form.component.scss'],
})
export class GameAssignmentFormComponent implements OnInit {

  protected game!: Game;
  protected playerForm!: FormGroup;
  protected subscription: Subscription = new Subscription();

  constructor(protected deckConnector: DeckConnector,
              protected gameConnector: GameConnector) {
  }

  public ngOnInit(): void {
    this.game = GameUtils.createNewGame();
    this.playerForm = new FormGroup({
      name: new FormControl(EMPTY_STRING)
    });
    this.updateNameFormControlValidation();
  }

  protected addPlayer(): void {
    if (this.playerForm.valid) {
      this.game.players.push({name: this.getNameFormControl()?.value});
      this.updateNameFormControlValidation();
      this.playerForm.reset();
    }
  }

  protected setDecks(): void {
    if (this.game.players.length > ZERO_NUMBER) {
      this.subscription.add(this.deckConnector
                                .findRandomDecks(this.game.players.length)
                                .pipe(
                                  tap((decks: Deck[]): void => PlayerUtils.setPlayersDecks(this.game.players, decks))
                                )
                                .subscribe());
    }
  }

  protected getNameFormControl(): AbstractControl<any, any> | null {
    return this.playerForm.get(NAME_FORM_CONTROL);
  }

  protected saveGame(): void {
    if (this.isValidGame()) {
      this.subscription.add(this.gameConnector
                                .saveNewGame(this.game)
                                .subscribe());
    }
  }

  protected isValidGame(): boolean {
    return this.game.players.length >= GAME_PLAYER_MIN
           && PlayerUtils.getPlayersWithNoDecks(this.game.players).length == ZERO_NUMBER;
  }

  protected updateNameFormControlValidation(): void {
    FormUtils.updateFormControlValidation(this.getNameFormControl(),
                                          [GameAssignmentValidator.repeatedPlayerName(this.game.players),
                                           GameAssignmentValidator.playerLimit(this.game.players),
                                           Validators.maxLength(PLAYER_NAME_LIMIT),
                                           Validators.required]);
  }

}
