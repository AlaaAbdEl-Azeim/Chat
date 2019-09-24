import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
  }


  public searchContacts()
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
      let contact = this.chatService.getContactById(id);
    }

}
