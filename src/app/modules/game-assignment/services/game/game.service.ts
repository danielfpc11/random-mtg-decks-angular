import { Observable } from 'rxjs';
import { Game } from '../../models';

export abstract class GameService {

  public abstract findAll(): Observable<Game[]>;

  public abstract findById(id: number): Observable<Game>;

  public abstract saveNew(game: Game): Observable<void>;

  public abstract saveUpdate(id: number, game: Game): Observable<void>;

  public abstract deleteById(id: number): Observable<void>;

}
