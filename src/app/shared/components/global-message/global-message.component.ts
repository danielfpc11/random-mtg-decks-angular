import { Component, OnInit } from '@angular/core';
import { GlobalMessageService } from '../../services';
import { Observable } from 'rxjs';
import { Alert } from '../../models';

@Component({
  selector: 'global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit {

  protected alert$!: Observable<Alert>;

  constructor(protected globalMessageService: GlobalMessageService) {
  }

  public ngOnInit(): void {
    this.alert$ = this.globalMessageService.getMessage();
  }

}
