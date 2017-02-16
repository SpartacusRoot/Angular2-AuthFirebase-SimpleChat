import { RouterModule, Routes } from '@angular/router';

import { AfService } from './af.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';


export const firebaseConfig = {
    apiKey: "AIzaSyDXit4uq0_kxvP0FrkgbC_r_SQ9rgkMG4k",
    authDomain: "crud-v1-firebase-prog-blog.firebaseapp.com",
    databaseURL: "https://crud-v1-firebase-prog-blog.firebaseio.com",
    storageBucket: "crud-v1-firebase-prog-blog.appspot.com",
    messagingSenderId: "717915930389"
  };

  const routes:Routes = [
    {path:'', component: HomePageComponent},
    {path:'login', component: LoginPageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
