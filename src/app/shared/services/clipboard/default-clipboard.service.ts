import { Injectable } from '@angular/core';
import { ClipboardService } from './clipboard.service';
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultClipboardService implements ClipboardService {

    public copyToClipboard(string: string): Observable<void> {
        return defer((): Promise<void> => navigator.clipboard.writeText(string));
    }

}
