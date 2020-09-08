import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RSVPPageRoutingModule } from './rsvp-routing.module';

import { RSVPPage } from './rsvp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RSVPPageRoutingModule
  ],
  declarations: [RSVPPage]
})
export class RSVPPageModule { }
