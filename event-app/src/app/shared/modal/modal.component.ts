import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('content') modalcontent;

  @Output() closeModalEvent = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.closeModalEvent.emit('closed');
  }

}
