import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-amazon-login',
  templateUrl: './amazon-login.component.html',
  styleUrls: ['./amazon-login.component.css']
})
export class AmazonLoginComponent {
public username:string='';
public password:string='';
constructor(private serv:AuthService){}


CheckLogin(){
this.serv.isAuthenticated(this.username,this.password)
}
}
