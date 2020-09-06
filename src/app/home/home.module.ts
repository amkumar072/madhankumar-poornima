import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterPageModule } from '../footer/footer.module';
import { SliderImagesComponent } from '../componenet/slider-images/slider-images.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterPageModule,
    FontAwesomeModule
  ],
  declarations: [HomePage, SliderImagesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomePageModule {

}
