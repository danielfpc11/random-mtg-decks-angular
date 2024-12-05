import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { TOKEN_KEY } from '../../constants';
import { Router } from '@angular/router';
import { AlertType, Authentication, AuthenticationConnector, GlobalMessageService, HOME_PAGE } from '../../../../core';
import { AUTHENTICATION_FORM_LOGIN, AUTHENTICATION_FORM_PASSWORD, AUTHENTICATION_FORM_USERNAME, GLOBAL_ALERT_AUTHENTICATION_LOGIN } from '../../../../core';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
  styleUrls: ['./authentication-login.component.scss']
})
export class AuthenticationLoginComponent implements OnInit, OnDestroy {

  protected userForm!: FormGroup;
  protected subscription: Subscription = new Subscription();
  protected readonly AUTHENTICATION_FORM_PASSWORD = AUTHENTICATION_FORM_PASSWORD;
  protected readonly AUTHENTICATION_FORM_USERNAME = AUTHENTICATION_FORM_USERNAME;
  protected readonly AUTHENTICATION_FORM_LOGIN = AUTHENTICATION_FORM_LOGIN;

  constructor(protected authenticationConnector: AuthenticationConnector,
              protected globalMessageService: GlobalMessageService,
              protected router: Router) {
  }

  public ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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
    return this.userForm.get('username');
  }

  protected getPasswordFormControl(): AbstractControl<any, any> | null {
    return this.userForm.get('password');
  }

  private storeTokenAndRedirectHome(authentication: Authentication): void {
    localStorage.setItem(TOKEN_KEY, authentication.token);
    this.globalMessageService.sendMessage({
      alertType: AlertType.SUCCESS,
      message: GLOBAL_ALERT_AUTHENTICATION_LOGIN,
      value: authentication.username
    });
    void this.router.navigate([HOME_PAGE]);
  }

}
