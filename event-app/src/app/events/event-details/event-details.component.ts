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

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number.parseInt(this.activeRoute.snapshot.params['id']);
    // console.log(typeof Number.parseInt(id));
      this.event = this.eventService.getEventServiceById(id);
      }

}
