import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-LtoBin',
  templateUrl: 'LtoBin.html'
})
export class LtoBinPage {

  rii = "";
 get score() {
    const bam = this.rii
    let fin = ""




    if (bam == "01000001") return "A";

    else if (bam == "01100001") return "a";

    else if (bam == "01000010") return "B";

    else if (bam == "01100010") return "b";

    else if (bam == "01000011") return "C";

    else if (bam == "01100011") return "c";

    else if (bam == "01000100") return "D";

    else if (bam == "01100100") return "d";

    else if (bam == "01000101") return "E";

    else if (bam == "01100101") return "e";

    else if (bam == "01000110") return "F";

    else if (bam == "01100110") return "f";

    else if (bam == "01000111") return "G";

    else if (bam == "01100111") return "g";

    else if (bam == "01001000") return "H";

    else if (bam == "01101000") return "h";

    else if (bam == "01001001") return "I";

    else if (bam == "01101001") return "i";

    else if (bam == "01001010") return "J";

    else if (bam == "01101010") return "j";

    else if (bam == "01001011") return "K";

    else if (bam == "01101011") return "k";

    else if (bam == "01001100") return "L";

    else if (bam == "01101100") return "l";

    else if (bam == "01001101") return "M";

    else if (bam == "01101101") return "m";

    else if (bam == "01001110") return "N";

    else if (bam == "01101110") return "n";

    else if (bam == "01001111") return "O";

    else if (bam == "01001111") return "o";

    else if (bam == "01010000") return "P";

    else if (bam == "01110000") return "p";

    else if (bam == "01010001") return "Q";

    else if (bam == "01110001") return "q";

    else if (bam == "01010010") return "R";

    else if (bam == "01110010") return "r";

    else if (bam == "01010011") return "S";

    else if (bam == "01110011") return "s";

    else if (bam == "01010100") return "T";

    else if (bam == "01110100") return "t";

    else if (bam == "01010101") return "U";

    else if (bam == "01110101") return "u";

    else if (bam == "01010110") return "V";

    else if (bam == "01110110") return "v";

    else if (bam == "01010111") return "W";

    else if (bam == "01110111") return "w";

    else if (bam == "01011000") return "X";

    else if (bam == "01111000") return "x";

    else if (bam == "01011001") return "Y";

    else if (bam == "01111001") return "y";

    else if (bam == "01011010") return "Z";

    else if (bam == "01111010") return "z";


  }
  constructor(public navCtrl: NavController) {

  }

}
