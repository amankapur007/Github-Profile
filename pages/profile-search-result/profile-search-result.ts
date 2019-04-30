import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { GithubService } from '../../providers/github.service';

@IonicPage()
@Component({
  selector: 'page.rofile-search-result',
  templateUrl: './profile-search-result.html',
})
export class ProfileSearchResult{

  constructor(public navCtrl: NavController, private navParams: NavParams,
  private githubService:GithubService) {

  }

getUserInformation(username:string):void{
  this.githubService.getMockInformation(username).subscribe(data=>{
    console.log(data);
  })
}
  ionViewDidLoad(){
    var username = this.navParams.get("username");
    this.getUserInformation(username);
  }

}