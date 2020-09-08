import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.page.html',
  styleUrls: ['./rsvp.page.scss'],
})
export class RSVPPage implements OnInit {
  pdfSrc = '../../assets/pdf/madhankumar-poornima.pdf';

  constructor() { }

  ngOnInit() {
  }

}
