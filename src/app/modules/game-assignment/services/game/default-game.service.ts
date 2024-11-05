import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Game } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class DefaultGameService implements GameService {

  protected currentGameSubject: Subject<Game> = new BehaviorSubject<Game>({players: []});

  public getCurrentGame(): Observable<Game> {
    return this.currentGameSubject.asObservable();
  }

  public setCurrentGame(game: Game): void {
    this.currentGameSubject.next(game);
  }

}
