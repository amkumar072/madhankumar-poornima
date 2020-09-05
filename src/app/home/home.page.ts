import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import * as momentTimezone from 'moment-timezone';
import * as moment from 'moment';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
// import { faHome } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  home = faCamera;

  outlookCalenderURL = 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2020-10-30T09%3A00%3A00&enddt=2020-10-30T10%3A30%3A00&subject=Madhankumar%20%26%20Poornima%20Marriage%20Invitation&body=Hi%20All%2C%0A%0ARequest%20the%20pleasure%20of%20your%20%20presence%20with%20family%20and%20friends%20on%20the%20auspicious%20occasion%20of%20%22MADHANKUMAR%20%26%20POORNIMA%22%20marriage.%0A%0Ainvitation%20Link%20%3A%20https%3A%2F%2Fmadhankumar-poornima.web.app%2F%20%0A%0ABy%2C%0AAnandan%20%26%20Family%0A%20%0A&location=CB%20Rd%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002%2C%20India&allday=false';

  constructor(private _actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }


  async presentActionSheet() {
    const actionSheet = await this._actionSheetCtrl.create({
      header: 'Calendar',
      buttons: [{
        text: 'Google',
        icon: 'logo-google',
        cssClass: 'logo-google',
        handler: () => {
          const fromTimeConvert = momentTimezone.tz("202010300900", "YYYYMMDDHHmm", "Asia/Kolkata").toISOString();
          // console.log('fromTimeConvert --->', fromTimeConvert);

          const fromTime = moment(fromTimeConvert).format('YYYYMMDDTHHmmss');
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
}
