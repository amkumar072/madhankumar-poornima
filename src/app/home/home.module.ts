import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { NgTickerModule } from 'ng-ticker';
import { InviteModalComponent } from '../componenet/invite-modal/invite-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgTickerModule
  ],
  declarations: [HomePage, InviteModalComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomePageModule {

}
