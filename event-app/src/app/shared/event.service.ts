import { Injectable } from '@angular/core';
import { events } from '../shared/events';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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

      // events.find(event => {
      //   if (event.id === id) {
      //     return event.sessions.push(session);
      //   }
      // });
  }

}
