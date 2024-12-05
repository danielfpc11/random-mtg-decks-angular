import { Injectable } from '@angular/core';
import { AuthenticationService, ErrorHandlerService } from '../services';
import { Authentication, User } from '../models';
import { Observable } from 'rxjs/internal/Observable';
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
