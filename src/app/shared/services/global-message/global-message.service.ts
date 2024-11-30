import { Alert } from '../../models';
import { Observable } from 'rxjs';

export abstract class GlobalMessageService {

  public abstract sendMessage(alert: Alert): void;

  public abstract getMessage(): Observable<Alert>;

}
