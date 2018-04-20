import { Observable, Subscription } from 'rxjs/Rx';
import { Participant } from './../../shared/model/participant.model';
import { SessionService } from './../../shared/services/session.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  participant: Participant;
  participantSubscription: Subscription;

  constructor(
    private sessionService: SessionService) { }

  ngOnInit() {
    this.participant = this.sessionService.getParticipant();
    this.participantSubscription = this.sessionService.onParticipantChanges()
      .subscribe(participant => this.participant = participant);
  }

}
