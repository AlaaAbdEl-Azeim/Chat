import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
 
  selectedContact;
  selectedHistory;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private chatService:ChatService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 960px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  ngOnInit() {
    let firstContact=this.chatService.getContacts()[0];
    firstContact? this.openContactChat(firstContact.id):"";
  }
  

  openContactChat(id){
      let history=this.chatService.getChatHistory(id);
      this.selectedContact = this.chatService.getContactById(id);
      this.selectedHistory =  history? history : this.chatService.createNewChat(id);
      //remove unread count when user select contact chat
      this.selectedContact.unread=null;
  }
  
}
