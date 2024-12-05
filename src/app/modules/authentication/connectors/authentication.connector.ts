import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services';
import { Authentication } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { ErrorHandlerService, User } from '../../../shared';
import { catchError, map } from 'rxjs';
import { AuthenticationAdapter, UserAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationConnector {

  constructor(protected authenticationService: AuthenticationService,
              protected errorHandlerService: ErrorHandlerService) {
  }

  public login(user: User): Observable<Authentication> {
    return this.authenticationService
               .login(UserAdapter.adaptRequestBody(user))
               .pipe(
                 map((authenticationPojo: any): Authentication => AuthenticationAdapter.adaptResponseBody(authenticationPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

  public register(user: User): Observable<Authentication> {
    return this.authenticationService
               .register(UserAdapter.adaptRequestBody(user))
               .pipe(
                 map((authenticationPojo: any): Authentication => AuthenticationAdapter.adaptResponseBody(authenticationPojo)),
                 catchError((error: Error) => this.errorHandlerService.handleError(error))
               );
  }

}
