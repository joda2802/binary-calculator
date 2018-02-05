import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BintoDezPage } from '../pages/BintoDez/BintoDez';
import { DeztoBinPage } from '../pages/DeztoBin/DeztoBin';
import { LtoBinPage } from '../pages/LtoBin/LtoBin';
import { BintoLPage } from '../pages/BintoL/BintoL';

import { DevelopersPage } from '../pages/Developers/Developers';
import { homePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    homePage,
    BintoDezPage,
    DeztoBinPage,
    LtoBinPage,
    BintoLPage,
    DevelopersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    homePage,
    BintoDezPage,
    DeztoBinPage,
    LtoBinPage,
    BintoLPage,
    DevelopersPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
