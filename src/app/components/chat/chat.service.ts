import { Injectable } from '@angular/core';
import {contacts,chat_history} from './chat-contacts/contacts';
// import { setInterval } from 'timers';

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

  createNewChat(contactId){
    let history=[];
    chat_history.push({"contactId":contactId,"history":history});
    return  history;
  }

  increaseUnreadMsg(contcts){
    if(contcts){
      setInterval (function () {
      //get random number between 0 and the length-1 of conacts 
      let randomNumer=Math.floor(Math.random() * contcts.length);
      contacts[randomNumer].unread ++;
      }, 5000);
    }
  }
}
