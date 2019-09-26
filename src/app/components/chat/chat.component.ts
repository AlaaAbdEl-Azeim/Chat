import { Component, OnInit } from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 
  selectedContact;
  selectedHistory;

  constructor(private chatService:ChatService) { 

  }

  ngOnInit() {
    let firstContact=this.chatService.getContacts()[0];
    firstContact? this.openContactChat(firstContact.id):"";
  }
  

  openContactChat(id){
      let history=this.chatService.getChatHistory(id);
      this.selectedContact = this.chatService.getContactById(id);
      this.selectedHistory =  history? history : this.chatService.createNewChat(id);
  }
  
}
