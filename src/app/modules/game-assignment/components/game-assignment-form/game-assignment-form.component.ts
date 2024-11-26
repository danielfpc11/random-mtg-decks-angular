import { Component, OnInit } from '@angular/core';
import { DeckService, GameService } from '../../services';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY_STRING, ZERO_NUMBER } from '../../../../shared';
import { Deck, Game } from '../../models';
import { GAME_PLAYER_MIN, NAME_FORM_CONTROL } from '../../constants';
import { GameAssignmentValidator } from '../../validators';
import { Subscription, tap } from 'rxjs';
import { GameUtils, PlayerUtils } from '../../utils';

@Component({
  selector: 'game-assignment-form',
  templateUrl: './game-assignment-form.component.html',
  styleUrls: ['./game-assignment-form.component.scss'],
})
export class GameAssignmentFormComponent implements OnInit {

  protected game!: Game;
  protected playerForm!: FormGroup;
  protected subscription: Subscription = new Subscription();

  constructor(protected deckService: DeckService,
              protected gameService: GameService) {
  }

  public ngOnInit(): void {
    this.game = GameUtils.createNewGame();
    this.playerForm = new FormGroup({
      name: new FormControl(EMPTY_STRING, [GameAssignmentValidator.repeatedPlayerName(this.game.players),
                                           GameAssignmentValidator.playerLimit(this.game.players),
                                           Validators.required])
    });
  }

  protected addPlayer(): void {
    if (this.playerForm.valid) {
      this.game.players.push({name: this.getNameFormControl()?.value});
      this.playerForm.reset();
    }
  }

  protected setDecks(): void {
    if (this.game.players.length > ZERO_NUMBER) {
      this.subscription.add(this.deckService
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
      this.subscription.add(this.gameService
                                .saveNew(this.game)
                                .subscribe());
    }
  }

  protected isValidGame(): boolean {
    return this.game.players.length >= GAME_PLAYER_MIN
           && PlayerUtils.getPlayersWithNoDecks(this.game.players).length == ZERO_NUMBER
  }

}
