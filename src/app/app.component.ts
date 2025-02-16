import { Component, OnInit } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  darkMode = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _commonService: CommonService
  ) {
    this.checkDarkmode();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  changeDarkmode(event: CustomEvent) {
    const result = event.detail.checked;
    this._commonService.setDarkMode(result);
    this.darkMode = result;
  }

  checkDarkmode() {
    this._commonService.getDarkMode().then(res => {
      if (res) {
        this.darkMode = res;
      } else {
        this.darkMode = false;
      }
    });
  }


}
