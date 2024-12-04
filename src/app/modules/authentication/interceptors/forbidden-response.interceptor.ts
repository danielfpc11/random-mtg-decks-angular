import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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
                 tap({
                   error: (httpErrorResponse: HttpErrorResponse): void => this.handleForbiddenErrorResponse(httpErrorResponse.status)
                 })
               );
  }

  private handleForbiddenErrorResponse(status: number) {
    if (status === FORBIDDEN_STATUS_CODE) {
      void this.router.navigate([LOGIN_PAGE]);
    }
  }

}
