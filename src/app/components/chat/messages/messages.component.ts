import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  newMessage="";
  @Input() contact;
  @Input() history;
  
  user={
    'id' : '4',
    'img': 'assets/images/contacts/contact2.jpg',
    'name' : 'Hassan',
  };


  
  constructor(private chatService:ChatService) { }

  ngOnInit() {
    //this.history = this.chatService.getChatHistory(this.contact.id);
  }

  addNewMsg(event) {
    this.history.push({"userId":this.user.id,
                       "message":this.newMessage,
                      "time":(new Date()).toString()});
                      this.newMessage="";
    return false;
  }

}
