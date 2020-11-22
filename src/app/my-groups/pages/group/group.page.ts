import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';
import { MyGroupsService } from 'src/app/shared/services/my-groups.service';
import { MyProfileService } from 'src/app/shared/services/my-profile.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html'
})
export class groupPage implements OnInit {
  user: string;
  group: any;
  messages = [];

  constructor(
    private chatService: ChatService,
    private groupService: MyGroupsService,
    private profileService: MyProfileService
  ) { }

  ngOnInit(): void {
    this.group = this.groupService.getSelectedGroup();
    this.loadChat();
    this.user = this.profileService.getCurrentUser().id;
  }

  loadChat(): void {
    const params = {
      identifier: this.group.identifier,
      category: 'group'
    };
    this.chatService.getChat(params).subscribe(
      response => this.messages = response
    );
  }

  sendMessage(message: string): void {
    let params = {
      identifier: this.group.identifier,
      body: message,
      category: 'group'
    };
    this.chatService.sendMessage(params).subscribe(
      res => this.loadChat
    );
  }
}
