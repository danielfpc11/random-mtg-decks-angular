import { Component, Input, OnDestroy } from '@angular/core';
import { Player } from '../../models';
import { ClipboardService } from '../../../../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'game-assignment-player-list',
  templateUrl: './game-assignment-player-list.component.html',
  styleUrls: ['./game-assignment-player-list.component.scss']
})
export class GameAssignmentPlayerListComponent implements OnDestroy {

  @Input() players!: Player[];
  protected subscription: Subscription = new Subscription();

  constructor(protected clipboardService: ClipboardService) {
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
    this.players = this.players.filter((player: Player): boolean => player.name !== name);
  }

}
