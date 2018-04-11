import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EventService } from '../../shared/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public isDirty = true;
  constructor(private route: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  public saveEvent(newEventForm) {
    // console.log(value);
    if (newEventForm.valid) {
      this.isDirty = false;
      this.eventService.newEvent(newEventForm.value);
      this.route.navigate(['/events']);
    }
  }

  public cancel() {
    this.route.navigate(['/events']);
  }
}
