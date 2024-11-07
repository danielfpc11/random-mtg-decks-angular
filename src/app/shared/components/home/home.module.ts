import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink
  ]
})
export class HomeModule {
}
