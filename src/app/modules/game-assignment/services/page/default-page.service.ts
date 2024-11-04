import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models';
import { PageService } from './page.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultPageService implements PageService {

  constructor(protected httpClient: HttpClient) {
  }

  public getPage(page: number, pageSize: number): Observable<Page> {
    return this.httpClient
               .get<Page>(`/moxfield-api?pageNumber=${page}&pageSize=${pageSize}&fmt=commanderPrecons`);
  }

}
