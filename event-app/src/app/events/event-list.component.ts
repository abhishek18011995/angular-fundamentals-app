import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {



  public events;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEventService();
  }
  public handleClickedEventThumbnail(event){
    console.log(event);
  }

}
