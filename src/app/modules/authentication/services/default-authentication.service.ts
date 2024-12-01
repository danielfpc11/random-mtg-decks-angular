import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationType } from '../enums';
import { Authentication, User } from '../models';
import { AUTHENTICATION_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DefaultAuthenticationService implements AuthenticationService {

  constructor(protected httpClient: HttpClient) {
  }

  public login(user: User): Observable<Authentication> {
    return this.sendRequest(user, AuthenticationType.LOGIN);
  }

  public register(user: User): Observable<Authentication> {
    return this.sendRequest(user, AuthenticationType.REGISTER);
  }

  private sendRequest(user: User, authenticationType: AuthenticationType): Observable<Authentication> {
    return this.httpClient.post<Authentication>(`${AUTHENTICATION_URL}/${authenticationType}`, user);
  }

}
