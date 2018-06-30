import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../shared/index';
import { AuthService } from '../shared/auth/auth.service';
import { EventSessions } from '../models/eventSession.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  foundSessions: EventSessions[] = [];
  modalRef;
  @ViewChild('modalContent') modalContent;

  constructor(private authService: AuthService,
    private eventService: EventService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
  }

  searchSession(searchSessionTerm) {
    this.foundSessions = this.eventService.searchSessions(searchSessionTerm);
    if (Array.isArray(this.foundSessions) && this.foundSessions.length > 0) {
      this.modalRef = this.modalService.open(this.modalContent);
    }
    // console.log(this.foundSessions);
  }

  closeModal(sessionId) {
    //   // console.log(event);
    this.modalRef.close();
    this.router.navigate(['/events', sessionId]);
  }


}





