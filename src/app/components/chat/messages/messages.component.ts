import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  newMessage="";
  user={
    'id' : '1',
    'img': 'assets/images/contacts/contact2.jpg',
    'name' : 'Hassan',
  };
    contact={
      'id' : '1',
      'img': 'assets/images/contacts/contact.jpg',
      'name' : 'Hassan',
      'unread' : null,
      'lastMessageDate': '12:00 am',
      'lastMessage':'I tried to call you yesterday',
      'online':true,
      'status':'No pain .. No gain'
  };
    public history =  [
    {
        'userId'    : '1',
        'message': 'Quickly come to the meeting room 1B, we have a big server issue',
        'time'   : '2017-03-22T08:54:28.299Z'
    },
    {
        'userId'    : '2',
        'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
        'time'   : '2017-03-22T08:55:28.299Z'
    },
    {
        'userId'    : '1',
        'message': 'We are losing money! Quick!',
        'time'   : '2017-03-22T09:00:28.299Z'
    }
    
];
  constructor() { }

  ngOnInit() {
  }

  addNewMsg(event) {
    this.history.push({"userId":this.user.id,
                       "message":this.newMessage,
                      "time":(new Date()).toString()});
                      this.newMessage="";
    return false;
  }

}
