import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Deck, Page } from '../../models';
import { PageService } from '../page';
import { COMMANDER_CATEGORY, FIRST_PAGE_INDEX, PAGE_SIZE, ZERO_NUMBER } from '../../../../shared';

@Injectable({
  providedIn: 'root'
})
export class DefaultDeckService implements DeckService {

  constructor(protected pageService: PageService) {
  }

  public getDecks(): Observable<Deck[]> {
    return this.getPageMetadataObservable()
               .pipe(
                 mergeMap((page: Page): Observable<Deck[]> => {
                   return this.getDecksFromPages(this.getPageLimit(page.totalResults));
                 })
               );
  }

  private getPageMetadataObservable(): Observable<Page> {
    return this.pageService
               .getPage(ZERO_NUMBER, ZERO_NUMBER, COMMANDER_CATEGORY);
  }

  private getPageLimit(totalResults: number): number {
    let pageLimit: number = Math.trunc(totalResults / PAGE_SIZE)
    return totalResults % PAGE_SIZE == ZERO_NUMBER ? pageLimit : ++pageLimit;
  }

  private getDecksFromPages(pages: number): Observable<Deck[]> {
    const pageRequests: Observable<Deck[]>[] = [];
    for (let i: number = FIRST_PAGE_INDEX; i <= pages; i++) {
      pageRequests.push(this.pageService
                            .getPage(i, PAGE_SIZE, COMMANDER_CATEGORY)
                            .pipe(map((page: Page): Deck[] => page.data)));
    }

    return forkJoin(pageRequests).pipe(map((results: Deck[][]): Deck[] => results.flat()));
  }

}
