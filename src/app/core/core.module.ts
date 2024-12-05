import { NgModule } from '@angular/core';
import {
  AuthenticationService,
  ClipboardService,
  DeckService,
  DefaultAuthenticationService,
  DefaultClipboardService,
  DefaultDeckService,
  DefaultErrorHandlerService,
  DefaultGameService,
  DefaultGlobalMessageService,
  DefaultPlayerService,
  ErrorHandlerService,
  GameService,
  GlobalMessageService,
  PlayerService
} from './services';

@NgModule({
  providers: [
    {provide: AuthenticationService, useClass: DefaultAuthenticationService},
    {provide: ClipboardService, useClass: DefaultClipboardService},
    {provide: ErrorHandlerService, useClass: DefaultErrorHandlerService},
    {provide: GlobalMessageService, useClass: DefaultGlobalMessageService},
    {provide: DeckService, useClass: DefaultDeckService},
    {provide: GameService, useClass: DefaultGameService},
    {provide: PlayerService, useClass: DefaultPlayerService}
  ]
})
export class CoreModule {
}
