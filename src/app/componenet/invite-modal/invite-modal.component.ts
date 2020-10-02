import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-invite-modal',
  templateUrl: './invite-modal.component.html',
  styleUrls: ['./invite-modal.component.scss'],
})
export class InviteModalComponent implements OnInit {

  isInitialLoad: boolean = true;
  modalClasses: string = `modal-open`;

  constructor() { }

  ngOnInit() { }

  closeModal() {
    this.modalClasses = `modal-close`;
    setTimeout(() => {
      this.isInitialLoad = false;
    }, 800);
  }

}
