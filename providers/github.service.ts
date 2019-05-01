import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

import { User } from '../models/user';
import { Repository } from '../models/repository';
import { USER_LIST } from '../mocks/user.mock';
import { REPOSITORY_LIST } from '../mocks/repository.mock';

@Injectable()
export class GithubService {

  constructor() { }

getMockRepositoryInformation(username:string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo=>username==repo["name"]));
  }

  getMockInformation(username:string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>username==user["name"])[0]);
  }



}