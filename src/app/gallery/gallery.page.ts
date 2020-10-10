import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  imageLocation = ' ../../assets/gallery/0.jpg';

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;

  sliderOne: any;
  sliderTwo: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    centeredSlides: true
  };
  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    spaceBetween: 2,
    autoplay: true,
  };

  constructor() {
    this.sliderFunction();

  }

  ngOnInit() {
  }

  sliderFunction() {

    const count = 12;
    let slideCountArray = [];
    for (let i = 0; i <= count; i++) {
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
    // this.slideWithNav2.lockSwipes(true);
  }

  changeTopImage(id) {
    this.imageLocation = `../../assets/gallery/${id}.jpg`;
  }

  //Move to Next slide
  slideNext(object, slideView) {
    // this.slideLockSwipes(false);

    // this.slideWithNav.slideNext(500);
    console.log(object, slideView);

    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    // this.slideLockSwipes(true);

  }

  //Move to previous slide
  slidePrev(object, slideView) {
    // this.slideLockSwipes(false);

    // this.slideWithNav.slidePrev(500);

    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    // this.slideLockSwipes(true);
  }

  slideLockSwipes(value) {
    // this.slideWithNav.lockSwipes(value);
    // this.slideWithNav2.lockSwipes(value);
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
