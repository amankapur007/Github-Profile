 import { Repository } from '../models/repository';
 import { User } from '../models/user';
 import { USER_LIST } from './user.mock';

 const repositoryList:Repository[] =[{
   name:'Ionic Camera',
   description:'Ionic Camera',
   owner:USER_LIST[0]
 },
 {
   name:'Ionic Sms',
   description:'Ionic Sms',
   owner:USER_LIST[0]
 },
 {
   name:'Ionic Geo',
   description:'Ionic Geo',
   owner:USER_LIST[1]
 },
 {
   name:'Ionic Call',
   description:'Ionic Call',
   owner:USER_LIST[2]
 }]

 export const REPOSITORY_LIST = repositoryList;
 