import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-invite-modal',
  templateUrl: './invite-modal.component.html',
  styleUrls: ['./invite-modal.component.scss'],
})
export class InviteModalComponent implements OnInit {

  constructor(
    private _modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  onCancel() {
    this._modalCtrl.dismiss(null, 'cancel');
  }

}
