import { Component, OnInit } from '@angular/core';
import { Deck, Game, Player } from '../../models';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeckService, GameService } from '../../services';
import { Observable, Subscription, tap } from 'rxjs';
import { GameAssignmentValidator } from '../../validators';
import { DeckUtils, PlayerUtils } from '../../utils';
import { EMPTY_STRING, FormUtils, ZERO_NUMBER } from '../../../../shared';
import { GAME_PLAYER_MIN, NAME_FORM_CONTROL } from '../../constants';

@Component({
  selector: 'game-assignment-form',
  templateUrl: './game-assignment-form.component.html',
  styleUrls: ['./game-assignment-form.component.scss'],
})
export class GameAssignmentFormComponent implements OnInit {

  protected game!: Game;
  protected playerForm!: FormGroup;
  protected isPlayersEmpty!: boolean;
  protected isEnoughPlayers!: boolean;
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
                         this.isPlayersEmpty = this.game.players.length == ZERO_NUMBER;
                         this.isEnoughPlayers = this.game.players.length >= GAME_PLAYER_MIN;
                         this.updateNameFormControlValidation(this.game.players);
                       })
                     );
    this.subscription.add(this.game$.subscribe());
  }

  protected addPlayer(deck: Deck): void {
    if (this.playerForm.invalid) {
      return;
    }

    this.game.players.push({name: this.getNameFormControl()?.value, deck});
    this.gameService.setCurrentGame(this.game);
    this.updateNameFormControlValidation(this.game.players);
    this.playerForm.reset();
  }

  protected changePlayersDecks(decks: Deck[]): void {
    if (this.isPlayersEmpty) {
      return;
    }

    PlayerUtils.changePlayersDecks(this.game.players, decks);
  }

  protected getNameFormControl(): AbstractControl<any, any> | null {
    return this.playerForm.get(NAME_FORM_CONTROL);
  }

  protected getRandomDeck(decks: Deck[]): Deck {
    return DeckUtils.getRandomDeck(this.game.players, decks);
  }

  protected saveGame(): void {
    if (this.isPlayersEmpty) {
      return;
    }

    this.subscription.add(this.gameService
                              .save(this.game)
                              .subscribe());
  }

  private updateNameFormControlValidation(players: Player[]): void {
    FormUtils.updateFormControlValidation(this.getNameFormControl(),
                                          [GameAssignmentValidator.repeatedPlayerName(players),
                                           GameAssignmentValidator.playersLimit(players),
                                           Validators.required]);
  }

}
