import { Injectable } from '@angular/core';
import { events } from '../shared/events';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  // public events:Event[] = events;
  constructor() { }

  public getEventService() {
    return events;
  }

  public getEventServiceById(id) {
    return events.find(event => event.id === id);
  }

}
