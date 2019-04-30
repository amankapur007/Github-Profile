import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

import { User } from '../models/user';
import { USER_LIST } from '../mocks/user.mock';

@Injectable()
export class GithubService {

  constructor() { }

  getMockInformation(username:string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>username==user["name"])[0]);
  }



}