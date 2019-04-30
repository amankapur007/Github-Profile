import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfileSearch } from '../pages/profile-search/profile-search';
import { ProfileSearchResult } from '../pages/profile-search-result/profile-search-result';
import { GithubService}from '../providers/github.service';

@NgModule({
  declarations: [
    MyApp,
    ProfileSearch,
    ProfileSearchResult
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfileSearch,
    ProfileSearchResult
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubService
  ]
})
export class AppModule {}
