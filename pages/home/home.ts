import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name:"home-page"
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  constructor(public navCtrl: NavController) {

  }

  search=function(){
    console.log(this.username);
  }
}
