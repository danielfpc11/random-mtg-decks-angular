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
  DefaultRoleService,
  DefaultUserService,
  ErrorHandlerService,
  GameService,
  GlobalMessageService,
  PlayerService,
  RoleService,
  UserService
} from './services';

@NgModule({
  providers: [
    {provide: AuthenticationService, useClass: DefaultAuthenticationService},
    {provide: ClipboardService, useClass: DefaultClipboardService},
    {provide: ErrorHandlerService, useClass: DefaultErrorHandlerService},
    {provide: GlobalMessageService, useClass: DefaultGlobalMessageService},
    {provide: DeckService, useClass: DefaultDeckService},
    {provide: GameService, useClass: DefaultGameService},
    {provide: PlayerService, useClass: DefaultPlayerService},
    {provide: RoleService, useClass: DefaultRoleService},
    {provide: UserService, useClass: DefaultUserService}
  ]
})
export class CoreModule {
}
