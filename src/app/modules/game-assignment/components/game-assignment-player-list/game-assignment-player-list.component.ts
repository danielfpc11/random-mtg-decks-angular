import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../models';
import { ClipboardService } from '../../../../shared';
import { Subscription, tap } from 'rxjs';
import { PlayerUtils } from '../../utils';
import { GameService } from '../../services';

@Component({
  selector: 'game-assignment-player-list',
  templateUrl: './game-assignment-player-list.component.html',
  styleUrls: ['./game-assignment-player-list.component.scss']
})
export class GameAssignmentPlayerListComponent implements OnInit, OnDestroy {

  protected game!: Game;
  protected subscription: Subscription = new Subscription();

  constructor(protected clipboardService: ClipboardService,
              protected gameService: GameService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.gameService
                              .getCurrentGame()
                              .pipe(
                                tap((game: Game): void => {
                                  game.players = PlayerUtils.forcePlayerLimit(game.players);
                                  this.game = game;
                                })
                              )
                              .subscribe());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected copyPublicUrl(publicUrl: string): void {
    this.subscription.add(this.clipboardService
                              .copyToClipboard(publicUrl)
                              .subscribe());
  }

  protected deletePlayer(name: string): void {
    this.game.players = PlayerUtils.deletePlayer(name, this.game.players);
    this.gameService.setCurrentGame(this.game);
  }

}
