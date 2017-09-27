import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-BintoDez',
  templateUrl: 'DeztoBin.html'
})
export class DeztoBinPage {

  rii = "";
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
      calc = (calc - 1 * num) / 2
    }
    while (y < sum.length + 1) {

      fin += ((parseInt(sum) % Math.pow(10, y)) - (parseInt(sum) % Math.pow(10, y - 1))) / (Math.pow(10, y - 1))

      y++
    }

    return fin









  }
  constructor(public navCtrl: NavController) {

  }

}
