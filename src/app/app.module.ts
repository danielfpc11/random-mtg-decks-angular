import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppI18nModule } from './app-i18n.module';
import { AuthenticationModule, GameAssignmentModule, GlobalModule } from './modules';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppI18nModule,
    HttpClientModule,
    CoreModule,
    GlobalModule,
    AuthenticationModule,
    GameAssignmentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
