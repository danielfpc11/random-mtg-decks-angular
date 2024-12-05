import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateUtils } from '../../../../shared';
import { Game, GameConnector } from '../../../../core';

@Component({
  selector: 'game-assignment-saved-game-list',
  templateUrl: './game-assignment-saved-game-list.component.html',
  styleUrls: ['./game-assignment-saved-game-list.component.scss']
})
export class GameAssignmentSavedGameListComponent implements OnInit {

  protected games$!: Observable<Game[]>;
  protected readonly DateUtils = DateUtils;

  constructor(protected gameConnector: GameConnector) {
  }

  public ngOnInit(): void {
    this.games$ = this.gameConnector.findAllGames();
  }

}
