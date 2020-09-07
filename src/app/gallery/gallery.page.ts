import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;

  sliderOne: any;
  sliderTwo: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: false,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: false,
  };

  constructor() {
    this.sliderFunction();

  }

  ngOnInit() {
  }

  sliderFunction() {

    const count = 4;
    let slideCountArray = [];
    for (let i = 0; i < count; i++) {
      slideCountArray.push({
        id: i
      });
    }

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: slideCountArray
    };
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: slideCountArray
    };

  }

  ionViewDidEnter() {
    // this.slideWithNav.lockSwipes(true);
    this.slideWithNav2.lockSwipes(true);
  }


  //Move to Next slide
  slideNext(object, slideView) {
    this.slideWithNav.slideNext(500);

    this.slideWithNav2.lockSwipes(false);
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    this.slideWithNav2.lockSwipes(true);

  }

  //Move to previous slide
  slidePrev(object, slideView) {

    this.slideWithNav.slidePrev(500);

    this.slideWithNav2.lockSwipes(false);

    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    this.slideWithNav2.lockSwipes(true);
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
