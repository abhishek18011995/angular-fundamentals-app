import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class ResolvedEventDataService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//  console.log(route);
//  console.log(state);
    return this.eventService.getEventService();
  }

  constructor(private eventService: EventService) { }

}
