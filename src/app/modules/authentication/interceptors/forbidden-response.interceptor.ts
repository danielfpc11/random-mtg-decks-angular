import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_PAGE } from '../constants';

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
                   error: (httpErrorResponse: HttpErrorResponse): void => {
                     if (httpErrorResponse.status === 403) {
                       void this.router.navigate([LOGIN_PAGE]);
                     }
                   }
                 })
               );
  }

}
