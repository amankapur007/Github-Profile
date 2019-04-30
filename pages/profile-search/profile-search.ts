import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ProfileSearchResult } from '../profile-search-result/profile-search-result';

@IonicPage()
@Component({
  selector: 'page.profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearch {

  username:string;
  constructor(public navCtrl: NavController) {

  }

  search=function(){
    this.navCtrl.push(ProfileSearchResult,{
      username:this.username
    });
  }
}
