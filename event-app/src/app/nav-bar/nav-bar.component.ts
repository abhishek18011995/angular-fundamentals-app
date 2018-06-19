import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../shared/index';
import { AuthService } from '../shared/auth/auth.service';
import { EventSessions } from '../models/eventSession.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  foundSessions: EventSessions[] = [];
  modalRef;
  @ViewChild('content') modalContent;

  constructor(private authService: AuthService,
    private eventService: EventService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  searchSession(searchSessionTerm) {
    this.foundSessions = this.eventService.searchSessions(searchSessionTerm);
    this.modalRef = this.modalService.open(this.modalContent);
    console.log(this.modalRef);
    // console.log(this.foundSessions);
  }

  closeModal(event) {
    // console.log(event);
    this.modalRef.close();
  }

}
