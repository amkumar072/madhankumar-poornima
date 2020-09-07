import { Component, OnInit } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './services/common.service';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

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
    private loadingController: LoadingController,
    private _commonService: CommonService,
    private _lottieSplashScreen :LottieSplashScreen,
  ) {
    this.checkDarkmode();

    this.initializeApp();
  }

  initializeApp() {
    this.splashScreen.show();
    this._lottieSplashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      setTimeout(() => {
        this._lottieSplashScreen.hide();
      }, 4000);
      
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.splashScreen.hide();
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
