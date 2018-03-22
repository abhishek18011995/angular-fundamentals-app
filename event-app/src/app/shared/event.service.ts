import { Injectable } from '@angular/core';
import { events } from '../shared/events';

@Injectable()
export class EventService {

  constructor() { }

  public getEventService() {
    return events;
  }
}
