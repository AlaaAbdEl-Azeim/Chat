import { Injectable } from '@angular/core';
import {contacts,chat_history} from './chat-contacts/contacts';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  contactsData= contacts;
  history= chat_history;
  constructor() { }


  getContacts(){
    return this.contactsData;
  }

  getContactById(contactId){
    return this.contactsData.find((contact) => {
      return contact.id === contactId;
    });

  }

  getChatHistory(contactId){
    const chatContact = chat_history.find((contact) => {
      return contact.contactId === contactId;
    });
    if(chatContact) return chatContact.history;
  }
}
