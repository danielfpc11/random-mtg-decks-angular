import { Observable } from 'rxjs';
import { Page } from '../../models';

export abstract class PageService {

  public abstract getPage(page: number, pageSize: number): Observable<Page>;

}
