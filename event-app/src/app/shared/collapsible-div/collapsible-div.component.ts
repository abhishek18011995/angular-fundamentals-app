import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-div',
  templateUrl: './collapsible-div.component.html',
  styleUrls: ['./collapsible-div.component.scss']
})
export class CollapsibleDivComponent implements OnInit {

  // @Input() title;
  public isVisible = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleVisible() {
    this.isVisible = !this.isVisible;
  }

}
