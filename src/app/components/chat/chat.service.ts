import { Injectable } from '@angular/core';
import {contacts,chat_history} from './contacts';
import { Subject } from 'rxjs';
// import { setInterval } from 'timers';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  contactsData= contacts;
  history;
  scrollChatContent= new Subject();


  constructor() {
    let saved=sessionStorage.getItem('chat-history');
    if(!saved){
      this.history= chat_history;
      sessionStorage.setItem('chat-history',JSON.stringify(this.history));
    }else{
      this.history = JSON.parse(sessionStorage.getItem('chat-history'));
    }
  }

  setHistorySession(){
    sessionStorage.setItem('chat-history',JSON.stringify(this.history));
  }

  getContacts(){
    return this.contactsData;
  }

  getContactById(contactId){
    return this.contactsData.find((contact) => {
      return contact.id === contactId;
    });

  }

  getChatHistory(contactId){
    const chatContact = this.history.find((contact) => {
      return contact.contactId === contactId;
    });
    this.scrollChatContent.next();

    if(chatContact) return chatContact.history;
  }

  addSessionStorage(key,value){
    sessionStorage.setItem(key,JSON.stringify(value));
  }

  createNewChat(contactId){
    let history=[];
    this.history.push({"contactId":contactId,"history":history});
    return  history;
  }

  increaseUnreadMsg(contctId){
    this.contactsData[contctId].unread++;
  }
}
