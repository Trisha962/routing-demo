import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
  constructor(private service: AuthenticationService){}
  submit(){

    if(this.username=='tri'&& this.password=='123'){
      this.service.loggedIn();
      this.clear();
      
    }

  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
  logout(){
    this.service.loggedOut();
  }
}
