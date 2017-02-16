import { AfService } from './../af.service';
import { Router } from '@angular/router';
import { Component} from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent  {

  constructor(public afService: AfService, private router:Router) { }

 login() {
   this.afService.loginWithGoogle().then((data) =>{
     this.router.navigate(['']);
   })
 }

}
