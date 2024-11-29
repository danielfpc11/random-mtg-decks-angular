import { Injectable } from '@angular/core';
import { GlobalMessageService } from './global-message.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultGlobalMessageService implements GlobalMessageService {

  public sendMessage(string): void {
  }

}
