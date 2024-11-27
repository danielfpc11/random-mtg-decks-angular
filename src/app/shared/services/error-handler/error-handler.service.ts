import { Observable } from 'rxjs';

export abstract class ErrorHandlerService {

  public abstract handleError(error: Error): Observable<never>;

}
