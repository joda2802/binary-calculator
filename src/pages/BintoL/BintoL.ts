import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Clipboard
} from '@ionic-native/clipboard';
@Component({
  selector: 'page-BintoL',
  templateUrl: 'BintoL.html'
})
export class BintoLPage {
  constructor(public navCtrl: NavController, private clipboard: Clipboard) {

  }
  copy() {
    this.clipboard.copy("lol");


  }
  rii = "";
  cop = "";
  get score() {
    let calc = parseInt(this.rii);
    let calc2 = this.rii.length / 8
    let calc3 = 0;
    let calc4 = "";
    let fin = "";
    let check = this.rii.length;
    let i = 1;
    if (check % 8 == 0) {


      while(i<=calc2){

      calc3 = (calc % Math.pow(10, i * 8) - calc % Math.pow(10, (i - 1) * 8)) / Math.pow(10, (i-1) * 8);
      calc4 = calc3.toString();
      if (calc4.length==7){

        calc4= "0"+calc4
      }
      else if(calc4.length==6){
        calc4="00"+calc4

      }





          if (calc4 == "01000001") fin = "A"+fin;

            else if (calc4 == "01100001") fin = "a"+fin;

            else if (calc4 == "01000010") fin = "B"+fin;

            else if (calc4 == "01100010") fin = "b"+fin;

            else if (calc4 == "01000011") fin = "C"+fin;

            else if (calc4 == "01100011") fin = "c"+fin;

            else if (calc4 == "01000100") fin = "D"+fin;

            else if (calc4 == "01100100") fin = "d"+fin;

            else if (calc4 == "01000101") fin = "E"+fin;

            else if (calc4 == "01100101") fin = "e"+fin;

            else if (calc4 == "01000110") fin = "F"+fin;

            else if (calc4 == "01100110") fin = "f"+fin;

            else if (calc4 == "01000111") fin = "G"+fin;

            else if (calc4 == "01100111") fin = "g"+fin;

            else if (calc4 == "01001000") fin = "H"+fin;

            else if (calc4 == "01101000") fin = "h"+fin;

            else if (calc4 == "01001001") fin = "I"+fin;

            else if (calc4 == "01101001") fin = "i"+fin;

            else if (calc4 == "01001010") fin = "J"+fin;

            else if (calc4 == "01101010") fin = "j"+fin;

            else if (calc4 == "01001011") fin = "K"+fin;

            else if (calc4 == "01101011") fin = "k"+fin;

            else if (calc4 == "01001100") fin = "L"+fin;

            else if (calc4 == "01101100") fin = "l"+fin;

            else if (calc4 == "01001101") fin = "M"+fin;

            else if (calc4 == "01101101") fin = "m"+fin;

            else if (calc4 == "01001110") fin = "N"+fin;

            else if (calc4 == "01101110") fin = "n"+fin;

            else if (calc4 == "01001111") fin = "O"+fin;

            else if (calc4 == "01001111") fin = "o"+fin;

            else if (calc4 == "01010000") fin = "P"+fin;

            else if (calc4 == "01110000") fin = "p"+fin;

            else if (calc4 == "01010001") fin = "Q"+fin;

            else if (calc4 == "01110001") fin = "q"+fin;

            else if (calc4 == "01010010") fin = "R"+fin;

            else if (calc4 == "01110010") fin = "r"+fin;

            else if (calc4 == "01010011") fin = "S"+fin;

            else if (calc4 == "01110011") fin = "s"+fin;

            else if (calc4 == "01010100") fin = "T"+fin;

            else if (calc4 == "01110100") fin = "t"+fin;

            else if (calc4 == "01010101") fin = "U"+fin;

            else if (calc4 == "01110101") fin = "u"+fin;

            else if (calc4 == "01010110") fin = "V"+fin;

            else if (calc4 == "01110110") fin = "v"+fin;

            else if (calc4 == "01010111") fin = "W"+fin;

            else if (calc4 == "01110111") fin = "w"+fin;

            else if (calc4 == "01011000") fin = "X"+fin;

            else if (calc4 == "01111000") fin = "x"+fin;

            else if (calc4 == "01011001") fin = "Y"+fin;

            else if (calc4 == "01111001") fin = "y"+fin;

            else if (calc4 == "01011010") fin = "Z"+fin;

            else if (calc4 == "01111010") fin = "z"+fin;

            else if (calc4 == "00100000") fin = " "+fin;

            else return "invalid"
            i++




    }







  return fin
}
else return "schlecht"

}
}
