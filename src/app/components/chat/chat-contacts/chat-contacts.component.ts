import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {ChatService} from '../chat.service';
@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit {
  public contactsDataSource: any = this.chatService.getContacts();
  public searchText='';
  public ContactsData=this.contactsDataSource;
  constructor(private chatService:ChatService) { }
  
  @Input() contactId;
  @Output()  selectContact = new EventEmitter<string>();
  ngOnInit() {
    //sort contacts by unreaded number of messages
    this.ContactsData.sort((firstObj, secondObj) =>  secondObj.unread - firstObj.unread);
    this.simulateNotifications();
  }

  simulateNotifications(){
    let chatComp=this;
    if(chatComp.ContactsData){
      setInterval (function () {
      //get random number between 0 and the length-1 of conacts 
        let randomNumer=Math.floor(Math.random() * chatComp.ContactsData.length);
        let selectedContact = chatComp.chatService.getContactById(chatComp.contactId);
        if(selectedContact == chatComp.ContactsData[randomNumer]) return;
        chatComp.chatService.increaseUnreadMsg(randomNumer);
      }, 5000);
    }
  }

  searchContacts()
    {
      //search in contacts by name or last message
        let searchText=this.searchText.trim().toLowerCase();
        if ( searchText === '' )
        {
          this.ContactsData = this.contactsDataSource;
        }else{
          this.ContactsData=this.contactsDataSource.filter(obj => 
              obj.name.toLowerCase().indexOf(searchText) !== -1 || obj.lastMessage.toLowerCase().indexOf(searchText) !== -1
             );
        }
    }

    openContactChat(id){
      this.selectContact.emit(id);
    }

}
