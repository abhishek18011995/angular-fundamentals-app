import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() events;
  @Output() clickedEventThumbnail = new EventEmitter();

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {

<<<<<<< HEAD
=======
  }

  public eventThumbnail() {
    console.log('eventThumbnail');
  }

  public onClickEventName(eventName) {
    this.toastrService.success(eventName);
>>>>>>> 7789afe7b98193cb1468a3c607967754efae8736
  }

  public onClickEventThumbnail(value) {
    this.clickedEventThumbnail.emit(value);
  }
}
