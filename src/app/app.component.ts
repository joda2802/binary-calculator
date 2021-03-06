import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BintoDezPage } from '../pages/BintoDez/BintoDez';
import { DeztoBinPage } from '../pages/DeztoBin/DeztoBin';
import { LtoBinPage } from '../pages/LtoBin/LtoBin';
import { BintoLPage } from '../pages/BintoL/BintoL';

import { DevelopersPage } from '../pages/Developers/Developers';
import { homePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = homePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: homePage },
      { title: 'Binary to Decimal', component: BintoDezPage },
      { title: 'Decimal to Binary', component: DeztoBinPage},
      { title: 'Letters to Binary', component: LtoBinPage},
      { title: 'Binary to Letters', component: BintoLPage},
      { title: 'Developers', component: DevelopersPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
