import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event;
  public isAddMode = false;
  public filterBy = 'all';
  public sortBy = 'name';

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('----Inside Event Details----');
    this.getEventDetails();
  }

  public getActiveRouteId(): number {
    return Number.parseInt(this.activeRoute.snapshot.params['id']);
  }

  public getEventDetails() {
    this.activeRoute.params.subscribe(param => {
      if (param.id) {
        const id = Number.parseInt(param.id);
        this.event = this.eventService.getEventServiceById(id);
        this.isAddMode = false;
      }
    });
  }

  public addNewSession(newSession) {
    const id = this.getActiveRouteId();
    this.eventService.addNewSessionService(id, newSession);
    this.isAddMode = false;
  }

  public addMode() {
    this.isAddMode = true;
  }

  public cancelCreateSessionEvent(event) {
    this.isAddMode = false;
  }

  public changeFilter(value) {
    // console.log(value);
  }

}
