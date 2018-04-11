import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventSessions } from '../../models/eventSession.model';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  public seessionForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createSessionForm();
  }


  public createSessionForm() {
    this.seessionForm = new FormGroup({
      sessionName: new FormControl('', [Validators.required]),
      presenter: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      abstract: new FormControl('', [Validators.required, this.restrictedWords(['foo', 'aaa'])]),
    });
  }


  public restrictedWords(words: string[]) {
    return (control: FormControl): { [key: string]: any } => {
      let invalidWords = [];
      if (words) {
        invalidWords = words.map(c => {
          return control.value.includes(c) ? c : null;
        });
      }

      if (control.value.includes('foo')) {
        return { 'restrictedWord': 'foo' };
      } else {
        return null;
      }
    };
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
    console.log(sessionFormvalue);
  }

}
