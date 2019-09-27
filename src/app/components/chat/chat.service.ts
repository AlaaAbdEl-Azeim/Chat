import { Injectable } from '@angular/core';
import {contacts,chat_history} from './contacts';
import { Subject } from 'rxjs';
// import { setInterval } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  contactsData= contacts;
  history= chat_history;
  scrollChatContent= new Subject();


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
    this.scrollChatContent.next();

    if(chatContact) return chatContact.history;
  }

  createNewChat(contactId){
    let history=[];
    chat_history.push({"contactId":contactId,"history":history});
    return  history;
  }

  increaseUnreadMsg(contctId){
    this.contactsData[contctId].unread++;
  }
}
