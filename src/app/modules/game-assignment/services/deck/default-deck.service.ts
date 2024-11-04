import { Injectable } from '@angular/core';
import { DeckService } from './deck.service';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { Deck, Page } from '../../models';
import { PageService } from '../page';

const PAGE_SIZE: number = 100;

@Injectable({
  providedIn: 'root'
})
export class DefaultDeckService implements DeckService {

  imageUrl = 'https://assets.moxfield.net/cards/card-<mainCardId>-art_crop.webp'

  constructor(protected pageService: PageService) {
  }

  public getDecks(): Observable<Deck[]> {
    return this.pageService
               .getPage(0, 0)
               .pipe(
                 mergeMap((page: Page): Observable<Deck[]> => {
                   let maximumPages: number = Math.trunc(page.totalResults / PAGE_SIZE);
                   return this.getDecksFromPages(page.totalResults % PAGE_SIZE == 0 ? maximumPages : ++maximumPages);
                 })
               );
  }

  private getDecksFromPages(pages: number): Observable<Deck[]> {
    const pageRequests: Observable<Deck[]>[] = [];
    for (let i: number = 1; i <= pages; i++) {
      pageRequests.push(this.pageService
                            .getPage(i, PAGE_SIZE)
                            .pipe(map((page: Page): Deck[] => page.data)));
    }

    return forkJoin(pageRequests).pipe(map((results: Deck[][]): Deck[] => results.flat()));
  }

}
