import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';
import { ENGLISH_LANGUAGE, SPANISH_LANGUAGE } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(protected translateService: TranslateService,
              protected translateCacheService: TranslateCacheService) {
    this.translateCacheService.init();
    this.translateService.addLangs([ENGLISH_LANGUAGE, SPANISH_LANGUAGE]);
    this.translateService.setDefaultLang(ENGLISH_LANGUAGE);
    this.translateService.use(this.translateCacheService.getCachedLanguage() || ENGLISH_LANGUAGE);
  }

}
