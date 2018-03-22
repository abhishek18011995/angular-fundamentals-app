import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event;

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.event = this.eventService.getEventServiceById(1);
  }

}
