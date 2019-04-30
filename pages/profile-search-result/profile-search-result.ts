import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page.rofile-search-result',
  templateUrl: './profile-search-result.html',
})
export class ProfileSearchResult{

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  ionViewDidLoad(){
    var username = this.navParams.get("username");
    console.log(username)
  }

}