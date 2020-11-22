import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/shared/services/chat.service';
import { MyGroupsService } from 'src/app/shared/services/my-groups.service';
import { MyProfileService } from 'src/app/shared/services/my-profile.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html'
})
export class groupPage implements OnInit {
  groupId: string;
  user: string;
  group: any;
  messages = [];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private groupService: MyGroupsService,
    private profileService: MyProfileService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupId = params['id'];
      this.user = this.profileService.getCurrentUser().id; 
      this.loadGroup();
      this.loadChat();
    });
  }

  loadGroup(): void {
    this.groupService.getSelectedGroup().subscribe(
      response => this.group = response
    );
  }

  loadChat(): void {
    const params = {
      identifier: this.groupId,
      category: 'group'
    };
    this.chatService.getChat(params).subscribe(
      response => this.messages = response
    );
  }

  sendMessage(message: string): void {
    let params = {
      identifier: this.groupId,
      body: message,
    };
    this.chatService.sendMessage(params).subscribe(
      res => this.loadChat
    );
  }
}
