import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { HOME_PAGE, LOGIN_SUCCESSFUL_ALERT, PASSWORD_FORM_CONTROL, TOKEN_KEY, USERNAME_FORM_CONTROL } from '../../constants';
import { Router } from '@angular/router';
import { AuthenticationConnector } from '../../../../core/connectors';
import { GlobalMessageService } from '../../../../core/services';
import { EMPTY_STRING } from '../../../../shared';
import { Authentication } from '../../../../core/models';
import { AlertType } from '../../../../core/enums';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrls: ['./authentication-login.component.scss']
})
export class AuthenticationLoginComponent implements OnInit, OnDestroy {

  protected userForm!: FormGroup;
  protected subscription: Subscription = new Subscription();

  constructor(protected authenticationConnector: AuthenticationConnector,
              protected globalMessageService: GlobalMessageService,
              protected router: Router) {
  }

  public ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(EMPTY_STRING, [Validators.required]),
      password: new FormControl(EMPTY_STRING, [Validators.required])
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected login(): void {
    if (this.userForm.valid) {
      this.subscription.add(this.authenticationConnector
                                .login({
                                  username: this.getUsernameFormControl()?.value,
                                  password: this.getPasswordFormControl()?.value
                                })
                                .pipe(
                                  tap((authentication: Authentication): void => this.storeTokenAndRedirectHome(authentication))
                                )
                                .subscribe());
    }
  }

  protected getUsernameFormControl(): AbstractControl<any, any> | null {
    return this.userForm.get(USERNAME_FORM_CONTROL);
  }

  protected getPasswordFormControl(): AbstractControl<any, any> | null {
    return this.userForm.get(PASSWORD_FORM_CONTROL);
  }

  private storeTokenAndRedirectHome(authentication: Authentication): void {
    localStorage.setItem(TOKEN_KEY, authentication.token);
    this.globalMessageService.sendMessage({
      alertType: AlertType.SUCCESS,
      message: LOGIN_SUCCESSFUL_ALERT,
      value: authentication.username
    });
    void this.router.navigate([HOME_PAGE]);
  }

}
