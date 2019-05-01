import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResult } from '../profile-search-result/profile-search-result';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResult
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResult),
    ComponentsModule
  ],
  exports: [
    ProfileSearchResult,
  ]
})
export class ProfileSearchResultModule {}