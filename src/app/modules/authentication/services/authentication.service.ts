import { Observable } from 'rxjs/internal/Observable';
import { Authentication, User } from '../models';

// TODO: abstract this with connector and adaptor layers
export abstract class AuthenticationService {

  public abstract login(user: User): Observable<Authentication>;

  public abstract register(user: User): Observable<Authentication>;

}
