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
  dark: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingController: LoadingController,
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
    this.dark = result;
  }

  checkDarkmode() {
    this._commonService.getDarkMode().then(res => {
      if (res) {
        this.dark = res;
      } else {
        this.dark = false;
      }
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class custom-class custom-loading',
      message: 'Loading...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
