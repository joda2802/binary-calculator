import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  Clipboard
} from '@ionic-native/clipboard';

@Component({
  selector: 'page-BintoDez',
  templateUrl: 'DeztoBin.html'
})
export class DeztoBinPage {

  rii = "";
  cop = "";
  get score() {
    const bam = this.rii
    let between = 0;
    let num = 0;
    let sum = "";
    let calc = 0;
    let fin = "";
    let y = 1;

    calc = parseInt(bam)

    while (calc >= 1) {
      sum += calc % 2
      num = calc % 2
      calc = (calc - num) / 2
    }
    while (y <= sum.length ) {

      fin += ((parseInt(sum) % Math.pow(10, y)) - (parseInt(sum) % Math.pow(10, y - 1))) / (Math.pow(10, y - 1))

      y++
    }
    this.cop = fin;
    return fin









  }
  constructor(public navCtrl: NavController, private clipboard: Clipboard) {

  }
  copy() {
    this.clipboard.copy(this.cop);




  }
}
