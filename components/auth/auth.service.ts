import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }
isAuthenticated(uname:string,pwd:string){
  if(uname=='admin'&& pwd=='admin'){
    this.isLoggedIn=true;
    return this.isLoggedIn;
  }
    return this.isLoggedIn;
  }
}