import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.scss'],
})
export class SliderImagesComponent implements OnInit {

  slideOpts = {
    autoplay: true,
    speed: 1500
  };

  constructor() { }

  ngOnInit() { }

}
