import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
@Component({
  selector: 'page-BintoL',
  templateUrl: 'BintoL.html'
})
export class BintoLPage {

  rii = "";
  cop="";
 get score() {
    const bam = this.rii
    let fin = ""




    if (bam == "01000001") {this.cop="A";
      return "A";
  }
    else if (bam == "01100001") {this.cop="a";
      return "a";
  }

    else if (bam == "01000010") {this.cop="B";
      return "B";
  }

    else if (bam == "01100010") {this.cop="b";
      return "b";
  }

    else if (bam == "01000011") {this.cop="C";
      return "C";
  }

    else if (bam == "01100011") {this.cop="c";
      return "c";
  }

    else if (bam == "01000100") {this.cop="D";
      return "D";
  }

    else if (bam == "01100100") {this.cop="d";
      return "d";
  }

    else if (bam == "01000101") {this.cop="E";
      return "E";
  }

    else if (bam == "01100101") {this.cop="e";
      return "e";
  }

    else if (bam == "01000110") {this.cop="F";
      return "F";
  }

    else if (bam == "01100110") {this.cop="f";
      return "f";
  }

    else if (bam == "01000111") {this.cop="G";
      return "G";
  }

    else if (bam == "01100111") {this.cop="g";
      return "g";
  }

    else if (bam == "01001000") {this.cop="H";
      return "H";
  }

    else if (bam == "01101000") {this.cop="h";
      return "h";
  }

    else if (bam == "01001001") {this.cop="I";
      return "I";
  }

    else if (bam == "01101001") {this.cop="i";
      return "i";
  }

    else if (bam == "01001010") {this.cop="J";
      return "J";
  }

    else if (bam == "01101010") {this.cop="j";
      return "j";
  }

    else if (bam == "01001011") {this.cop="K";
      return "K";
  }

    else if (bam == "01101011") {this.cop="k";
      return "k";
  }

    else if (bam == "01001100") {this.cop="L";
      return "L";
  }

    else if (bam == "01101100") {this.cop="l";
      return "l";
  }

    else if (bam == "01001101") {this.cop="M";
      return "M";
  }

    else if (bam == "01101101") {this.cop="m";
      return "m";
  }

    else if (bam == "01001110") {this.cop="N";
      return "N";
  }

    else if (bam == "01101110") {this.cop="n";
      return "n";
  }

    else if (bam == "01001111") {this.cop="O";
      return "O";
  }

    else if (bam == "01001111") {this.cop="o";
      return "o";
  }

    else if (bam == "01010000") {this.cop="P";
      return "P";
  }

    else if (bam == "01110000") {this.cop="p";
      return "p";
  }

    else if (bam == "01010001") {this.cop="Q";
      return "Q";
  }

    else if (bam == "01110001") {this.cop="q";
      return "q";
  }

    else if (bam == "01010010") {this.cop="R";
      return "R";
  }

    else if (bam == "01110010") {this.cop="r";
      return "r";
  }

    else if (bam == "01010011") {this.cop="S";
      return "S";
  }

    else if (bam == "01110011") {this.cop="s";
      return "s";
  }

    else if (bam == "01010100") {this.cop="T";
      return "T";
  }

    else if (bam == "01110100") {this.cop="t";
      return "t";
  }

    else if (bam == "01010101") {this.cop="U";
      return "U";
  }

    else if (bam == "01110101") {this.cop="u";
      return "u";
  }

    else if (bam == "01010110") {this.cop="V";
      return "V";
  }

    else if (bam == "01110110") {this.cop="v";
      return "v";
  }

    else if (bam == "01010111") {this.cop="W";
      return "W";
  }

    else if (bam == "01110111") {this.cop="w";
      return "w";
  }

    else if (bam == "01011000") {this.cop="X";
      return "X";
  }

    else if (bam == "01111000") {this.cop="x";
      return "x";
  }

    else if (bam == "01011001") {this.cop="Y";
      return "Y";
  }

    else if (bam == "01111001") {this.cop="y";
      return "y";
  }

    else if (bam == "01011010") {this.cop="Z";
      return "Z";
  }

    else if (bam == "01111010") {this.cop="z";
      return "z";
  }


  }
  constructor(public navCtrl: NavController,private clipboard: Clipboard) {

  }
  copy(){
  this.clipboard.copy(this.cop);




  }
}
