import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { DeztoBinPage } from '../DeztoBin/DeztoBin';
import { LtoBinPage } from '../LtoBin/LtoBin';
import { BintoDezPage } from '../BintoDez/BintoDez';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class homePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {

  }
  pushPage() {
      this.navCtrl.push(BintoDezPage);
  }
  pushPage2() {
    this.navCtrl.push(DeztoBinPage);
  }
  pushPage3() {
    this.navCtrl.push(LtoBinPage);
  }
  pushPage4() {
    this.navCtrl.push(BintoDezPage);
  }
}
