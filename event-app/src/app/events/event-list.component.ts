import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public event = {
    name: 'Angular Connect', date: '3/1/2025', time: '8am', price: '122',
    location: { address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA' }
  };

  constructor() { }

  ngOnInit() {
  }
  public handleClickedEventThumbnail(event){
    console.log(event);
  }

}
