import {Router } from '@angular/router';
import { AfService } from './af.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor( public afService:AfService, private router:Router){
    this.afService.af.auth.subscribe(
      (auth) =>{
        if(auth == null){
          console.log("Not logged in");
        this.router.navigate(["login"]);
        this.isLoggedIn = false;
      }
      else {
        console.log("You are logged");
        this.isLoggedIn = true;
        this.afService.displayName = auth.google.displayName;
        this.afService.email = auth.google.email;
      }
      }
    );
  }
  
  logout(){
    this.afService.logout();
  }


}
