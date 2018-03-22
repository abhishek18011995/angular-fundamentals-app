import { Injectable } from '@angular/core';
import { events } from '../shared/events';

@Injectable()
export class EventService {

  constructor() { }

  public getEventService() {
    return events;
  }

  public getEventServiceById(id) {
    return events.find(event => event.id === id);
  }

}
