import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-LtoBin',
  templateUrl: 'LtoBin.html'
})
export class LtoBinPage {

  rii = "";
  cop ="";
  get score() {
    const bam = this.rii
    let fin = ""
    let i=0;
    let char ="";
while(i<bam.length){
     char = bam.charAt(i);





    if (char == "A") fin += "01000001";

    else if (char == "a") fin += "01100001";
    else if (char == "B") fin += "01000010";

    else if (char == "b") fin += "01100010";

    else if (char == "C") fin += "01000011";

    else if (char == "c") fin += "01100011";

    else if (char == "D") fin += "01000100";

    else if (char == "d") fin += "01100100";

    else if (char == "E") fin += "01000101";

    else if (char == "e") fin += "01100101";

    else if (char == "F") fin += "01000110";

    else if (char == "f") fin += "01100110";

    else if (char == "G") fin += "01000111";

    else if (char == "g") fin += "01100111";

    else if (char == "H") fin += "01001000";

    else if (char == "h") fin += "01101000";

    else if (char == "I") fin += "01001001";

    else if (char == "i") fin += "01101001";

    else if (char == "J") fin += "01001010";

    else if (char == "j") fin += "01101010";

    else if (char == "K") fin += "01001011";

    else if (char == "k") fin += "01101011";

    else if (char == "L") fin += "01001100";

    else if (char == "l") fin += "01101100";

    else if (char == "M") fin += "01001101";

    else if (char == "m") fin += "01101101";

    else if (char == "N") fin += "01001110";

    else if (char == "n") fin += "01101110";

    else if (char == "O") fin += "01001111";

    else if (char == "o") fin += "01001111";

    else if (char == "P") fin += "01010000";

    else if (char == "p") fin += "01110000";

    else if (char == "Q") fin += "01010001";

    else if (char == "q") fin += "01110001";

    else if (char == "R") fin += "01010010";

    else if (char == "r") fin += "01110010";

    else if (char == "S") fin += "01010011";

    else if (char == "s") fin += "01110011";

    else if (char == "T") fin += "01010100";

    else if (char == "t") fin += "01110100";

    else if (char == "U") fin += "01010101";

    else if (char == "u") fin += "01110101";

    else if (char == "V") fin += "01010110";

    else if (char == "v") fin += "01110110";

    else if (char == "W") fin += "01010111";

    else if (char == "w") fin += "01110111";

    else if (char == "X") fin += "01011000";

    else if (char == "x") fin += "01111000";

    else if (char == "Y") fin += "01011001";

    else if (char == "y") fin += "01111001";

    else if (char == "Z") fin += "01011010";

    else if (char == "z") fin += "01111010";

    else if(char== " ") fin += " ";

    else return "invalid"
i++
}
this.cop = fin;
return fin;

  }
  constructor(public navCtrl: NavController,private clipboard: Clipboard) {

  }

  copy(){
  this.clipboard.copy(this.cop);




  }

}
