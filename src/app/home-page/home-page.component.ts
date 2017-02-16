import { FirebaseListObservable } from 'angularfire2';
import { AfService } from './../af.service';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
   ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }

public newMessage:string;
public messages: FirebaseListObservable<any>;
  constructor(public afService: AfService) { 
    this.messages = this.afService.messages;
    this.newMessage = ''; 
  }
  sendMessage() {
console.log('new message: ', this.newMessage);
this.afService.sendMessage(this.newMessage);
}

isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

  ngOnInit() {
  }

}
