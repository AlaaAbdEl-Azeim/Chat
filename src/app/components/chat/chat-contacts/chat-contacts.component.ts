import { Component, OnInit } from '@angular/core';
import {contacts} from './contacts';

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit {
  public contactsDataSource: any = contacts;
  public searchText='';
  public ContactsData=contacts;
  constructor() { }

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

}
