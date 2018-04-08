import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {



  public events: Event;

  constructor(
    private eventService: EventService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.events = this.eventService.getEventService();
    // this.eventService.getEventService().subscribe(response => {
    //   console.log(response);
    //   this.events = response;
    // });
    this.events = this.activeRoute.snapshot.data.events;
    console.log(this.activeRoute.snapshot.data.events);

  }

  // public handleClickedEventThumbnail(event){
  //   console.log(event);
  // }

}
