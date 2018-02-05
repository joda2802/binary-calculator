import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { DeztoBinPage } from '../DeztoBin/DeztoBin';
import { LtoBinPage } from '../LtoBin/LtoBin';
import { DevelopersPage } from '../Developers/Developers';
import { BintoLPage } from '../BintoL/BintoL';

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
  showActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Developers',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
           this.navCtrl.push(DevelopersPage)
         }
       },{
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();
 }
}
