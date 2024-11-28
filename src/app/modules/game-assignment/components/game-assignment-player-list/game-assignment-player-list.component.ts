import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Game } from '../../models';
import { ClipboardService } from '../../../../shared';
import { Subscription } from 'rxjs';
import { PlayerUtils } from '../../utils';

@Component({
  selector: 'game-assignment-player-list',
  templateUrl: './game-assignment-player-list.component.html',
  styleUrls: ['./game-assignment-player-list.component.scss']
})
export class GameAssignmentPlayerListComponent implements OnInit, OnDestroy {

  @Input() public game!: Game;
  @Input() public deleteButton!: boolean;
  @Output() public deletePlayerEventEmitter = new EventEmitter<string>();
  protected subscription: Subscription = new Subscription();

  constructor(protected clipboardService: ClipboardService) {
  }

  public ngOnInit(): void {
    this.forcePlayerLimit();
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
    this.deletePlayerEventEmitter.emit(name);
  }

  private forcePlayerLimit(): void {
    this.game.players = PlayerUtils.forcePlayerLimit(this.game.players);
  }

}
