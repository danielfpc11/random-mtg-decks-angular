import { Observable } from 'rxjs/internal/Observable';
import { Authentication } from '../models';
import { User } from '../../../shared';

export abstract class AuthenticationService {

  public abstract login(user: User): Observable<Authentication>;

  public abstract register(user: User): Observable<Authentication>;

}
