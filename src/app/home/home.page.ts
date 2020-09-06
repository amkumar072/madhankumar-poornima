import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import * as momentTimezone from 'moment-timezone';
import * as moment from 'moment';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CommonService } from '../services/common.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { error } from 'protractor';
// import { faHome } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  formdata: FormGroup;
  home = faCamera;
  commentMessage;
  // dateFuture = new Date(2020, 9, 30, 9, 0o0, 0o0);
  marriageDate = momentTimezone.tz("202010300900", "YYYYMMDDHHmm", "Asia/Kolkata").toISOString();
  days = 0;
  hours = 0;
  mins = 0;
  secs = 0;

  commentResponse = [];

  outlookCalenderURL = 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2020-10-30T09%3A00%3A00&enddt=2020-10-30T10%3A30%3A00&subject=Madhankumar%20%26%20Poornima%20Marriage%20Invitation&body=Hi%20All%2C%0A%0ARequest%20the%20pleasure%20of%20your%20%20presence%20with%20family%20and%20friends%20on%20the%20auspicious%20occasion%20of%20%22MADHANKUMAR%20%26%20POORNIMA%22%20marriage.%0A%0Ainvitation%20Link%20%3A%20https%3A%2F%2Fmadhankumar-poornima.web.app%2F%20%0A%0ABy%2C%0AAnandan%20%26%20Family%0A%20%0A&location=CB%20Rd%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002%2C%20India&allday=false';

  constructor(private _actionSheetCtrl: ActionSheetController,
    private _commonService: CommonService,
    private _loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getCount();

    this.formControll();

    setTimeout(() => {
      this.getCommentsResponse();
    }, 3000);

  }

  formControll() {
    this.formdata =
      new FormGroup({
        name: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
        email: new FormControl('', {
          updateOn: 'change'
        }),
        comments: new FormControl('', {
          updateOn: 'change',
          validators: [Validators.required]
        }),
      });

  }


  async presentActionSheet() {
    const actionSheet = await this._actionSheetCtrl.create({
      header: 'Calendar',
      buttons: [{
        text: 'Google',
        icon: 'logo-google',
        cssClass: 'logo-google',
        handler: () => {
          // const fromTimeConvert = momentTimezone.tz("202010300900", "YYYYMMDDHHmm", "Asia/Kolkata").toISOString();
          // console.log('fromTimeConvert --->', fromTimeConvert);

          const fromTime = moment(this.marriageDate).format('YYYYMMDDTHHmmss');
          // console.log('fromTime --->', fromTime);

          const toTimeConvert = momentTimezone.tz("202010301030", "YYYYMMDDHHmm", "Asia/Kolkata").toISOString();
          // console.log('toTimeConvert --->', toTimeConvert);

          const toTime = moment(toTimeConvert).format('YYYYMMDDTHHmmss');
          // console.log('toTime --->', toTime);
          const googleCalenderURLLocal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Madhankumar%20%26%20Poornima%20Marriage%20Invitation&details=Hi%20All%2C%0A%0ARequest%20the%20pleasure%20of%20your%20%20presence%20with%20family%20and%20friends%20on%20the%20auspicious%20occasion%20of%20%22MADHANKUMAR%20%26%20POORNIMA%22%20marriage.%0A%0Ainvitation%20Link%20%3A%20https%3A%2F%2Fmadhankumar-poornima.web.app%2F%20%0A%0ABy%2C%0AAnandan%20%26%20Family%0A%20%0A&location=CB%20Rd%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002%2C%20India&dates=${fromTime}/${toTime}`;

          this.windowOpen(googleCalenderURLLocal);
        }
      }, {
        text: 'Outlook',
        icon: 'calendar',
        cssClass: 'logo-outlook',
        handler: () => {
          this.windowOpen(this.outlookCalenderURL);
        }
      },
      {
        text: 'Close',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getCount() {
    const dateNow = new Date();                                                                        //grab current date
    let amount = new Date(this.marriageDate).getTime() - dateNow.getTime();                //calc milliseconds between dates
    // delete dateNow;

    // time is already past
    if (amount < 0) {
      document.getElementById('countbox').innerHTML = "Now!";
    } else {

      let out = "";

      amount = Math.floor(amount / 1000);//kill the "milliseconds" so just secs

      this.days = Math.floor(amount / 86400);//days
      amount = amount % 86400;

      this.hours = Math.floor(amount / 3600);//hours
      amount = amount % 3600;

      this.mins = Math.floor(amount / 60);//minutes
      amount = amount % 60;

      this.secs = Math.floor(amount);//seconds

      // if (days != 0) { out += days + " day" + ((days != 1) ? "s" : "") + ", "; }
      // if (days != 0 || hours != 0) { out += hours + " hour" + ((hours != 1) ? "s" : "") + ", "; }
      // if (days != 0 || hours != 0 || mins != 0) { out += mins + " minute" + ((mins != 1) ? "s" : "") + ", "; }
      // out += secs + " seconds";
      // document.getElementById('countbox').innerHTML = out;

      setTimeout(() => {
        this.getCount();
      }, 1000);
    }



  }

  location() {
    this.windowOpen('https://goo.gl/maps/JNo1admJwQitp3Eu6');
  }

  gysiteLink() {
    this.windowOpen('https://gysite.in');
  }

  windowOpen(url) {
    window.open(
      url,
      '_blank' // <- This is what makes it open in a new window.
    );
  }



  async formResponse() {

    if (this.formdata.invalid) {
      this.formdata.markAllAsTouched();
      return;
    } else {
      const formValue = this.formdata.value;


      const loadingResult = await this._loadingCtrl.create({ keyboardClose: true, message: 'Posting...' });
      loadingResult.present();

      this._commonService.postComments(
        { ...formValue }
      ).subscribe(res => {
        this.formdata.reset();
        loadingResult.dismiss();
        this.getCommentsResponse();
        this.commentMessageMethod('Comments posted successfully...');
      }, (error) => {
        console.log('error -->', error);
        loadingResult.dismiss();
        // this.commentMessageMethod('Error posting comments...');
      });
    }

  }

  getCommentsResponse() {
    this._commonService.getComments().subscribe(res => {
      this.commentResponse = JSON.parse(res);
      console.log('res-->', this.commentResponse);

    }, (error) => {
      console.log('error-->', error);

    });
  }

  commentMessageMethod(message) {
    this.commentMessage = message;
    setTimeout(() => {
      this.commentMessage = null;
    }, 5000);
  }

}
