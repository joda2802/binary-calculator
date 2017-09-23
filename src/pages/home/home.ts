import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rii = "";
  get score(){
    const bam = this.rii
    let sum=0;
    let x=1;
    let check= 0;

    while (x<bam.length+1)
	{
    check =(( parseInt(bam)% Math.pow(10,x))-(parseInt(bam) % Math.pow(10,x-1)))/ (Math.pow(10,x-1))

	  if(check==1 || check ==0)sum += ((parseInt(bam) % (Math.pow(10,x)))-(parseInt(bam) % (Math.pow(10,x-1))))/ (Math.pow(10,x-1))* Math.pow(2,x-1);
    else return "Only use one and zero!";

	  x++;


	}
  return sum
  }
  constructor(public navCtrl: NavController) {

  }

}
