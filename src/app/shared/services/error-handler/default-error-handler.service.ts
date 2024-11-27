import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultErrorHandlerService implements ErrorHandlerService {

  public handleError(error: Error): Observable<never> {
    console.error(`Error fetching data: ${error.message}`);
    return throwError(() => new Error(error.message));
  }

}
