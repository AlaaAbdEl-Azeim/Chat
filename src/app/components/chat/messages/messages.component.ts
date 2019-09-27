import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  newMessage="";
  @Input() contact;
  @Input() history;
  @Input() events: Observable<void>;
  @ViewChild('message_content',null) msgContent: ElementRef;
  private eventsSubscription: any

  user={
    'id' : '4',
    'img': 'assets/images/contacts/contact4.jpg',
    'name' : 'Hassan',
  };



  constructor(private chatService:ChatService) { }
  ngOnInit(){
    this.eventsSubscription = this.events.subscribe(() => {
      this.scrollContentToBottom();
    });
  }

  ngOnDestroy (){
    this.eventsSubscription.unsubscribe();
  }
  
  addNewMsg(event) {
    this.newMessage = this.newMessage.trim();//prevent add empty message
    if(this.newMessage){
      this.history.push({"userId":this.user.id,
                        "message":this.newMessage,
                        "time":(new Date()).toString()});
                        this.newMessage="";
      this.scrollContentToBottom();
    }
    return false;
  }
  scrollContentToBottom(){
    setTimeout(() =>{
      this.msgContent.nativeElement.scrollTop = this.msgContent.nativeElement.scrollHeight
     });
  }

}
