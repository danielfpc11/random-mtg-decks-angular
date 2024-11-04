import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppI18nModule } from './app-i18n.module';
import { SharedModule } from './shared';
import { GameAssignmentModule } from './modules';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppI18nModule,
    HttpClientModule,
    SharedModule,
    GameAssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
