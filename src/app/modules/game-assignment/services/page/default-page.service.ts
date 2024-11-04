import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../models';
import { PageService } from './page.service';
import { HttpClient } from '@angular/common/http';
import {
  ApiUtils,
  API_PARAM_MARK,
  CATEGORY_PARAM,
  MOXFIELD_API,
  PAGE_NUMBER_PARAM,
  PAGE_SIZE_PARAM
} from '../../../../shared';

@Injectable({
  providedIn: 'root'
})
export class DefaultPageService implements PageService {

  constructor(protected httpClient: HttpClient) {
  }

  public getPage(page: number, pageSize: number, category: string): Observable<Page> {
    return this.httpClient
               .get<Page>(MOXFIELD_API +
                          API_PARAM_MARK +
                          ApiUtils.apiParam(PAGE_NUMBER_PARAM, page) +
                          ApiUtils.apiParam(PAGE_SIZE_PARAM, pageSize) +
                          ApiUtils.apiParam(CATEGORY_PARAM, category));
  }

}
