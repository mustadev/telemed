import { Injectable } from '@angular/core';
import { User } from '../models/User';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_TYPE = 'user-type';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    //window.sessionStorage.clear();
    localStorage.clear();
  }

  
  public saveToken(token: string) {
    console.log("saving in storage " + TOKEN_KEY  + " : " + token);
    //window.sessionStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  
  public getToken(): string {
    // return window.sessionStorage.getItem(TOKEN_KEY);
    return localStorage.getItem(TOKEN_KEY);
  }

  
  public saveUserType(userType: string) {
    console.log("saving in storage " + USER_TYPE  + " : " + userType);
    // window.sessionStorage.removeItem(USER_TYPE);
    // window.sessionStorage.setItem(USER_TYPE, userType);
    localStorage.removeItem(USER_TYPE);
    localStorage.setItem(USER_TYPE, userType);
    
  }

  public getUserType(): string {
    // return sessionStorage.getItem(USER_TYPE);
    return localStorage.getItem(USER_TYPE);
  }

  

  public saveUser(user:User) {
    console.log("saving in storage " + USER_KEY  + " : " + user);
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser():User{
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}