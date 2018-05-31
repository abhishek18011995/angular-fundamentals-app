import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventSessions } from '../../models/eventSession.model';
import { restrictedWords } from '../../shared/index';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  public seessionForm: FormGroup;

  @Output() cancelCreateSessionEvent = new EventEmitter();
  @Output() addNewSession = new EventEmitter();

  constructor() { }
  // constructor(private eventService: EventService) { }

  ngOnInit() {
    this.createSessionForm();
  }


  public createSessionForm() {
    this.seessionForm = new FormGroup({
      sessionName: new FormControl('', [Validators.required]),
      presenter: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      abstract: new FormControl('', [Validators.required, restrictedWords(['foo', 'aaa'])]),
    });
  }


  public saveSession(value) {
    const sessionFormvalue: EventSessions = {
      id: undefined,
      name: value.sessionName,
      presenter: value.presenter,
      duration: value.duration,
      level: value.level,
      abstract: value.abstract,
      voters: []
    };
    this.addNewSession.emit(value);
    // this.eventService.addNewSessionService(1, value);
    // console.log(sessionFormvalue);
  }

  public cancelCreateSession() {
    this.cancelCreateSessionEvent.emit(true);
  }
}
