import { Observable } from 'rxjs';
import { Player } from '../../models';

export abstract class PlayerService {

  public abstract findAll(): Observable<Player[]>;

  public abstract findById(id: number): Observable<Player>;

  public abstract saveNew(player: Player): Observable<void>;

  public abstract saveUpdate(id: number, player: Player): Observable<void>;

  public abstract deleteById(id: number): Observable<void>;

}
