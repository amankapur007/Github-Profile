import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResult } from '../profile-search-result/profile-search-result';

@NgModule({
  declarations: [
    ProfileSearchResult
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResult)
  ],
  entryComponents: [
    ProfileSearchResultModule
  ]
})
export class ProfileSearchResultModule {}