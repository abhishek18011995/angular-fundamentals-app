import { Injectable } from '@angular/core';
import { events } from '../shared/events';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventSessions } from '../models/eventSession.model';

@Injectable()
export class EventService {

  // public events:Event[] = events;
  constructor() { }

  public getEventService() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(events);
      subject.complete();
    }, 100);
    return subject;
  }

  public getEventServiceById(id) {
    return events.find(event => event.id === id);
  }

  public newEvent(event) {
    // console.log(event);
    event.id = 999;
    events.push(event);
  }

  public addNewSessionService(id, session) {
    events.find(event => event.id === id).sessions.push(session);
  }

  public searchSessions(_sesssionTerm: string): EventSessions[] {

    if (_sesssionTerm) {
      const sesssionTerm = _sesssionTerm.toLocaleLowerCase();
      let searchResult = [];

      events.forEach(event => {
        const matchingSessions = event.sessions.filter(session => {
          return (session.name.toLocaleLowerCase().indexOf(sesssionTerm) > -1);
        });
        if (matchingSessions.length > 0) {
          matchingSessions.map((session: any) => {
            session.eventId = event.id;
            return session;
          });
        }
        searchResult = searchResult.concat(matchingSessions);
        // if (matchingSessions.length > 0) {
        //   searchResult.push(matchingSessions);
        // }
      });

      return searchResult;
    }
  }

}
