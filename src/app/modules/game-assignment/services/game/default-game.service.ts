import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Game } from '../../models';
import { GameUtils } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements GameService {

  protected currentGameSubject: Subject<Game> = new BehaviorSubject<Game>(GameUtils.createNewGame());

  public getCurrentGame(): Observable<Game> {
    return this.currentGameSubject.asObservable();
  }

  public setCurrentGame(game: Game): void {
    this.currentGameSubject.next(game);
  }

}
