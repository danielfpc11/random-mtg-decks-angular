import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { TOKEN_KEY } from '../../constants';
import { Router } from '@angular/router';
import { AlertType, Authentication, AuthenticationConnector, GlobalMessageService, HOME_PAGE } from '../../../../core';

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
      message: 'global.globalMessage.authentication.login',
      timeout: 5,
      value: authentication.username
    });
    void this.router.navigate([HOME_PAGE]);
  }

}
