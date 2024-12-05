import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateCacheModule, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';
import { ENGLISH_LANGUAGE } from './core';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: ENGLISH_LANGUAGE,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: TranslateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      }
    })
  ]
})
export class AppI18nModule {
}

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}

export function TranslateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings): TranslateCacheService {
  return new TranslateCacheService(translateService, translateCacheSettings);
}
