import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('content') modalcontent;

  @Input('modalRef') modalRef: NgbModalRef;

  @Output() closeModalEvent = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  closeModal() {
    // this.closeModalEvent.emit('closed');
    this.modalRef.dismiss();
  }

}
