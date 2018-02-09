import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  ActionSheetController
} from 'ionic-angular';
import {
  LtoBinPage
} from '../LtoBin/LtoBin';
import {
  homePage
} from '../home/home';
@Component({
  selector: 'page-Developers',
  templateUrl: 'Developers.html'
})
export class DevelopersPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {

  }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Quick menu',
      buttons: [{
        text: 'Explanation',
        handler: () => {
          console.log('Archive clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }
}
