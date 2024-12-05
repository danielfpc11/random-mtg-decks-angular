import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { GAME_PLAYER_MIN } from '../../constants';
import { GameAssignmentValidator } from '../../validators';
import { map, merge, Observable, Subscription, switchMap, tap } from 'rxjs';
import { PlayerUtils } from '../../utils';
import { Router, UrlTree } from '@angular/router';
import {
  AlertType,
  ClipboardService,
  Deck,
  DeckConnector,
  Game,
  GAME_ASSIGNMENT_FORM_ADD,
  GAME_ASSIGNMENT_FORM_CREATE_GAME,
  GAME_ASSIGNMENT_FORM_ERROR_MAX_LENGTH_PLAYER_NAME,
  GAME_ASSIGNMENT_FORM_ERROR_PLAYER_LIMIT_REACHED,
  GAME_ASSIGNMENT_FORM_ERROR_REPEATED_PLAYER_NAME,
  GAME_ASSIGNMENT_FORM_PLAYER_NAME,
  GAME_ASSIGNMENT_FORM_PLAYER_NAME_PLACEHOLDER,
  GAME_ASSIGNMENT_FORM_SAVE_GAME,
  GAME_ASSIGNMENT_FORM_SET_DECKS,
  GameConnector,
  GLOBAL_ALERT_GAME_URL_COPIED,
  GlobalMessageService,
  SAVED_GAME_PAGE
} from '../../../../core';
import { ArrayUtils, FormUtils, UrlUtils } from '../../../global';

@Component({
  selector: 'game-assignment-form',
  templateUrl: './game-assignment-form.component.html',
  styleUrls: ['./game-assignment-form.component.scss'],
})
export class GameAssignmentFormComponent implements OnInit {

  protected game!: Game;
  protected playerForm!: FormGroup;
  protected subscription: Subscription = new Subscription();
  protected readonly GAME_ASSIGNMENT_FORM_ADD = GAME_ASSIGNMENT_FORM_ADD;
  protected readonly GAME_ASSIGNMENT_FORM_CREATE_GAME = GAME_ASSIGNMENT_FORM_CREATE_GAME;
  protected readonly GAME_ASSIGNMENT_FORM_ERROR_REPEATED_PLAYER_NAME = GAME_ASSIGNMENT_FORM_ERROR_REPEATED_PLAYER_NAME;
  protected readonly GAME_ASSIGNMENT_FORM_ERROR_PLAYER_LIMIT_REACHED = GAME_ASSIGNMENT_FORM_ERROR_PLAYER_LIMIT_REACHED;
  protected readonly GAME_ASSIGNMENT_FORM_ERROR_MAX_LENGTH_PLAYER_NAME = GAME_ASSIGNMENT_FORM_ERROR_MAX_LENGTH_PLAYER_NAME;
  protected readonly GAME_ASSIGNMENT_FORM_PLAYER_NAME = GAME_ASSIGNMENT_FORM_PLAYER_NAME;
  protected readonly GAME_ASSIGNMENT_FORM_PLAYER_NAME_PLACEHOLDER = GAME_ASSIGNMENT_FORM_PLAYER_NAME_PLACEHOLDER;
  protected readonly GAME_ASSIGNMENT_FORM_SAVE_GAME = GAME_ASSIGNMENT_FORM_SAVE_GAME;
  protected readonly GAME_ASSIGNMENT_FORM_SET_DECKS = GAME_ASSIGNMENT_FORM_SET_DECKS;

  constructor(protected deckConnector: DeckConnector,
              protected gameConnector: GameConnector,
              protected clipboardService: ClipboardService,
              protected globalMessageService: GlobalMessageService,
              protected router: Router) {
  }

  public ngOnInit(): void {
    this.game = {
      players: [],
      date: new Date()
    };
    this.playerForm = new FormGroup({
      name: new FormControl('')
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
    if (ArrayUtils.isNotEmpty(this.game.players)) {
      this.subscription.add(this.deckConnector
                                .findRandomDecks(this.game.players.length)
                                .pipe(
                                  tap((decks: Deck[]): void => PlayerUtils.setPlayersDecks(this.game.players, decks))
                                )
                                .subscribe());
    }
  }

  protected getNameFormControl(): AbstractControl<any, any> | null {
    return this.playerForm.get('name');
  }

  protected saveGame(): void {
    if (this.isValidGame()) {
      this.subscription.add(this.gameConnector
                                .saveNewGame(this.game)
                                .pipe(
                                  map((gameId: number): UrlTree => this.router.createUrlTree([SAVED_GAME_PAGE, gameId])),
                                  switchMap((savedGameUrlTree: UrlTree) => this.copyAndNavigateUrlObservable(savedGameUrlTree)),
                                  tap(() => this.globalMessageService.sendMessage({
                                    alertType: AlertType.SUCCESS,
                                    message: GLOBAL_ALERT_GAME_URL_COPIED,
                                    timeout: 5
                                  }))
                                )
                                .subscribe());
    }
  }

  protected isValidGame(): boolean {
    return this.game.players.length >= GAME_PLAYER_MIN
           && ArrayUtils.isEmpty(PlayerUtils.getPlayersWithNoDecks(this.game.players));
  }

  protected updateNameFormControlValidation(): void {
    FormUtils.updateFormControlValidation(this.getNameFormControl(),
                                          [GameAssignmentValidator.repeatedPlayerName(this.game.players),
                                           GameAssignmentValidator.playerLimit(this.game.players),
                                           Validators.maxLength(10),
                                           Validators.required]);
  }

  private copyAndNavigateUrlObservable(urlTree: UrlTree): Observable<boolean | void> {
    return merge(
      this.clipboardService.copyToClipboard(UrlUtils.createUrlWithOrigin(urlTree.toString())),
      this.router.navigateByUrl(urlTree)
    );
  }

}
