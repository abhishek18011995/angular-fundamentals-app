import { Component, OnInit, Input } from '@angular/core';
import { EventSessions } from '../../../models/eventSession.model';
import { DurationPipe } from '../../../shared/pipes/duration.pipe';

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
  constructor() { }

  ngOnInit() {
  }

  public currentSort(sort) {
    if (sort === 'name') {
      this.visibleSessions.sort(this.sortByNameAsc);
    } else if (sort === 'voters') {
      this.visibleSessions.sort(this.sortByVoterDesc);
    }
  }

  public sortByNameAsc(a: EventSessions, b: EventSessions) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
  }
  public sortByVoterDesc(a: EventSessions, b: EventSessions) {
    return b.voters.length - a.voters.length;
  }

  public currentFilter(filter) {
    console.log(filter);
    if (filter === 'all') {
      this.visibleSessions = this.sessions;
    } else {
      // this.visibleSessions = this.sessions.map(session => session.level.toLowerCase);
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter);
    }
  }

}
