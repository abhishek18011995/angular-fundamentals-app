import { Component, OnInit, Input } from '@angular/core';
import { EventSessions } from '../../../models/eventSession.model';
import { VoterService } from '../upvote/voter.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: EventSessions[];
  @Input()
  set filterBy(value) {
    this.currentFilter(value);
  }
  @Input()
  set sortBy(value) {
    this.currentSort(value);
  }

  public visibleSessions: EventSessions[];
  constructor(private voterService: VoterService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  public currentSort(sort) {
    // if (this.visibleSessions) {
    if (sort === 'name') {
      this.visibleSessions.sort(this.sortByNameAsc);
    } else if (sort === 'voters') {
      this.visibleSessions.sort(this.sortByVoterDesc);
    }
    // }
  }

  public sortByNameAsc(a: EventSessions, b: EventSessions) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
  }
  public sortByVoterDesc(a: EventSessions, b: EventSessions) {
    return b.voters.length - a.voters.length;
  }

  public currentFilter(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions;
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter);
    }
  }

  public isUserVoted(session) {
    return this.voterService.isUserVoted(session, this.authService.currentUser.userName);
  }

  public togglevote(session) {
    if (this.isUserVoted(session) === false) {
      this.voterService.addVote(session, this.authService.currentUser.userName);
    } else if (this.isUserVoted(session) === true) {
      this.voterService.deleteVote(session, this.authService.currentUser.userName);
    }
    console.log(this.isUserVoted(session));
    console.log(session.voters);
  }

}
