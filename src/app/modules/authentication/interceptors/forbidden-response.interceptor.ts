import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FORBIDDEN_STATUS_CODE, LOGIN_PAGE } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ForbiddenResponseInterceptor implements HttpInterceptor {

  constructor(protected router: Router) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
               .pipe(
                 catchError((httpErrorResponse: HttpErrorResponse) => {
                   this.handleForbiddenError(httpErrorResponse.status);
                   return of(httpErrorResponse);
                 })
               );
  }

  private handleForbiddenError(status: number) {
    if (status === FORBIDDEN_STATUS_CODE) {
      void this.router.navigate([LOGIN_PAGE]);
    }
  }

}