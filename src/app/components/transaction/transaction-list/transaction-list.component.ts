
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../shared/model/participant.model';
import { RaspberryService } from './../../../shared/services/raspberry.service';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {

  constructor(
    private raspberryService: RaspberryService) { }

  private toggleRele () {
    this.raspberryService.toggleRele().subscribe(data => console.log(data));
  }

}
