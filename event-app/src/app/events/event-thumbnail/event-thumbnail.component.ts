import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() events;

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {

  }

  public eventThumbnail() {
    console.log('eventThumbnail');
  }

  public onClickEventName(eventName) {
    this.toastrService.success(eventName);
  }

}
