import { Component, OnInit } from '@angular/core';
import {contacts} from './contacts';

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent implements OnInit {
  public contactsData: any = contacts;

  constructor() { }

  ngOnInit() {
  }

}
