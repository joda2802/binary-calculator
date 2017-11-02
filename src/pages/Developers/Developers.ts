import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { LtoBinPage } from '../LtoBin/LtoBin';
@Component({
  selector: 'page-Developers',
  templateUrl: 'Developers.html'
})
export class DevelopersPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {

  }

  showActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
           this.navCtrl.push(LtoBinPage)
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
