import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventDetailsRouteActivatorService implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  canActivate(activeRoute: ActivatedRouteSnapshot) {
    const id = +activeRoute.params['id'];
    const eventExists = !!this.eventService.getEventServiceById(id);

    if (!eventExists) {
      this.router.navigate(['404']);
    }

    return eventExists;
  }


}
