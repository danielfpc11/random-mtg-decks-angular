import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap, tap, timer } from 'rxjs';
import { DateUtils } from '../../utils';
import { Alert, GlobalMessageService } from '../../../core';

export const DEFAULT_ALERT_TIMEOUT: number = 10;

@Component({
  selector: 'global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit, OnDestroy {

  protected alert: Alert | undefined;
  protected subscription: Subscription = new Subscription();

  constructor(protected globalMessageService: GlobalMessageService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.globalMessageService
                              .getMessage()
                              .pipe(
                                tap((alert: Alert): void => {this.alert = alert;}),
                                switchMap((alert: Alert): Observable<number> => timer(this.getTimeout(alert.timeout))),
                                tap(() => {this.alert = undefined;})
                              )
                              .subscribe());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeout(timeout: number | undefined) {
    return DateUtils.secondsToMilliseconds(timeout ?? DEFAULT_ALERT_TIMEOUT);
  }

}
