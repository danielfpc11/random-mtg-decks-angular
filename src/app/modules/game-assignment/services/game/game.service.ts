import { Observable } from 'rxjs';
import { Game } from '../../models';

export abstract class GameService {

  public abstract getCurrentGame(): Observable<Game>;

  public abstract setCurrentGame(game: Game): void;

}
