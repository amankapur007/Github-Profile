import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

import { User } from '../models/user';
import { Repository } from '../models/repository';
import { USER_LIST } from '../mocks/user.mock';
import { REPOSITORY_LIST } from '../mocks/repository.mock';

@Injectable()
export class GithubService {

  api="https://api.github.com/users";
  constructor(private http:Http) { }

getUserInformation(username:string):Observable<User>{
    return this.http.get(`${this.api}/users/${username}`)
    .do(data=>console.log(data.json()))
    .map((data:Response)=>data.json())
    .do(data=>console.log(data.json()))
    .catch(error=>error.json() || 'Server Error')
  }
  
getMockRepositoryInformation(username:string):Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo=>username==repo["name"]));
  }

  getMockInformation(username:string):Observable<User>{
    return Observable.of(USER_LIST.filter(user=>username==user["name"])[0]);
  }



}