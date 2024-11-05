import { Component, OnInit } from '@angular/core';
import { Deck, Game, Player } from '../../models';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeckService, GameService } from '../../services';
import { ArrayUtils, EMPTY_STRING, NAME_FORM_CONTROL } from '../../../../shared';
import { Observable, Subscription, tap } from 'rxjs';
import { GameAssignmentValidator } from '../../validators';
import { PlayerUtils } from '../../utils';

@Component({
  selector: 'game-assignment-form',
  templateUrl: './game-assignment-form.component.html',
  styleUrls: ['./game-assignment-form.component.scss'],
})
export class GameAssignmentFormComponent implements OnInit {

  protected game: Game = {players: []};
  protected playerForm!: FormGroup;
  protected subscription: Subscription = new Subscription();
  protected decks$!: Observable<Deck[]>;
  protected game$!: Observable<Game>;

  constructor(protected deckService: DeckService,
              protected gameService: GameService) {
  }

  public ngOnInit(): void {
    this.playerForm = new FormGroup({
      name: new FormControl(EMPTY_STRING, [Validators.required])
    });
    this.decks$ = this.deckService.getDecks();
    this.game$ = this.gameService
                     .getCurrentGame()
                     .pipe(
                       tap((game: Game): void => {
                         this.game = game;
                         this.updateNameFormControlValidation(this.game.players);
                       })
                     );
    this.subscription.add(this.game$.subscribe());
  }

  protected getRandomDeck(decks: Deck[]): Deck {
    decks = decks.filter((deck: Deck): boolean => !PlayerUtils.getPlayersDecks(this.game.players).includes(deck));
    return ArrayUtils.findAny(decks);
  }

  protected changePlayersDecks(decks: Deck[]): void {
    this.game.players.forEach((player: Player): void => {
      player.deck = {publicUrl: EMPTY_STRING};
      player.deck = this.getRandomDeck(decks);
    });
  }

  protected addPlayer(deck: Deck): void {
    if (this.playerForm.invalid) {
      return;
    }

    this.game.players.push({name: this.getNameFormControl()?.value, deck});
    this.gameService.setCurrentGame(this.game);
    this.playerForm.reset();
    this.updateNameFormControlValidation(this.game.players);
  }

  protected getNameFormControl(): AbstractControl<any, any> | null {
    return this.playerForm.get(NAME_FORM_CONTROL);
  }

  private updateNameFormControlValidation(players: Player[]): void {
    this.getNameFormControl()?.setValidators([GameAssignmentValidator.repeatedPlayerName(players),
                                              Validators.required]);
    this.getNameFormControl()?.updateValueAndValidity();
  }

}
