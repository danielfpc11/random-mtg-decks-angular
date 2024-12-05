import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { filter, Observable, of, Subscription, tap } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { adminEndpoints, AUTHORIZATION_HEADER, TOKEN_KEY, TOKEN_PREFIX } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor, OnDestroy {

  protected subscription: Subscription = new Subscription();

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isAuthenticatedUrl(req.url)) {
      this.subscription.add(of(localStorage.getItem(TOKEN_KEY)).pipe(
                                                                 filter(token => !!token),
                                                                 tap(token => req = this.addAuthorizationHeader(req, token!)),
                                                               )
                                                               .subscribe());
    }

    return next.handle(req);
  }

  private isAuthenticatedUrl(url: string): boolean {
    return adminEndpoints().some((authenticatedUrl: string): boolean => new RegExp(authenticatedUrl).test(url));
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({headers: request.headers.set(AUTHORIZATION_HEADER, `${TOKEN_PREFIX} ${token}`)});
  }

}
