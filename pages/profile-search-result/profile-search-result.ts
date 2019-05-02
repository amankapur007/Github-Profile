import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { GithubService } from '../../providers/github.service';
import { User } from '../../models/user';
import { Repository } from '../../models/repository';

@IonicPage()
@Component({
  selector: 'page.rofile-search-result',
  templateUrl: './profile-search-result.html',
})
export class ProfileSearchResult{

  user:User;
  repositories:Repository[];

  constructor(public navCtrl: NavController, private navParams: NavParams,
  private githubService:GithubService) {

  }
  
getUserInformation(username:string):void{
  this.githubService.getUserInformation(username).subscribe((data:User)=>{
    this.user=data;
  });
  this.githubService.getMockRepositoryInformation(username).subscribe((data:Repository[])=>{
    this.repositories=data;
  });
}
  ionViewDidLoad(){
    var username = this.navParams.get("username");
    this.getUserInformation(username);
  }

}