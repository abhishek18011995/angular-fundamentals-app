import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {

  @Input() count = 0;
  @Input() isUserVoted = false;

  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclickVote() {
    this.vote.emit();
  }

}
