import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() events;
  @Output() clickedEventThumbnail = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public onClickEventThumbnail(value) {
    this.clickedEventThumbnail.emit(value);
  }
}
