import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfileSearch } from '../pages/profile-search/profile-search';
import { ProfileSearchResult } from '../pages/profile-search-result/profile-search-result';
import { GithubService}from '../providers/github.service';
import { SearchResultsComponent } from '../components/search-results/search-results.component';


@NgModule({
  declarations: [
    MyApp,
    ProfileSearch,
    ProfileSearchResult,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfileSearch,
    ProfileSearchResult,
    SearchResultsComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubService
  ]
})
export class AppModule {}
