import { Injectable } from '@angular/core';
import { GlobalMessageService } from './global-message.service';
import { Alert } from '../../models';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultGlobalMessageService implements GlobalMessageService {

  protected alertSubject: Subject<Alert> = new Subject<Alert>();

  public sendMessage(alert: Alert): void {
    this.alertSubject.next(alert);
  }

  public getMessage(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

}
