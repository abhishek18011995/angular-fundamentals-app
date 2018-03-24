import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public isDirty = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }


  public cancel() {
    this.route.navigate(['/events']);
  }
}
