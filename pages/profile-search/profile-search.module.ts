import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearch } from '../profile-search/profile-search';

@NgModule({
  declarations: [
    ProfileSearch
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearch)
  ],
  entryComponents: [
    ProfileSearchModule
  ]
})
export class ProfileSearchModule {}