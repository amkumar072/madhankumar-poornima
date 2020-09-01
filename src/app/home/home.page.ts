import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  googleCalenderURL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Madhankumar%20%26%20Poornima%20Marriage%20Invitation&details=Hi%20All%2C%0A%0ARequest%20the%20pleasure%20of%20your%20estimated%20presence%20with%20family%20and%20friends%20on%20the%20auspicious%20occasion%20of%20%22MAHDANKUMAR%20%26%20POORNIMA%22%20marriage.%0A%0AIniviation%20Link%20%3A%20https%3A%2F%2Fmadhankumar-poornima.web.app%2F%20%0A%0ABy%2C%0AAnandan%20%26%20Family%0A%20%0A&location=CB%20Rd%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002%2C%20India&dates=20201030T090000%2F20201030T103000';
  outlookCalenderURL = 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2020-10-30T09%3A00%3A00&enddt=2020-10-30T10%3A30%3A00&subject=Madhankumar%20%26%20Poornima%20Marriage%20Invitation&body=Hi%20All%2C%0A%0ARequest%20the%20pleasure%20of%20your%20estimated%20presence%20with%20family%20and%20friends%20on%20the%20auspicious%20occasion%20of%20%22MAHDANKUMAR%20%26%20POORNIMA%22%20marriage.%0A%0AIniviation%20Link%20%3A%20https%3A%2F%2Fmadhankumar-poornima.web.app%2F%20%0A%0ABy%2C%0AAnandan%20%26%20Family%0A%20%0A&location=CB%20Rd%2C%20Greamspet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517002%2C%20India&allday=false';

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
          this.windowOpen(this.googleCalenderURL);
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

  windowOpen(url) {
    window.open(
      url,
      '_blank' // <- This is what makes it open in a new window.
    );
  }
}
