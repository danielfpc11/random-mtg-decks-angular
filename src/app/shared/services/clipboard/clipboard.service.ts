import { Observable } from 'rxjs';

export abstract class ClipboardService {

  public abstract copyToClipboard(string: string): Observable<void>;

}
