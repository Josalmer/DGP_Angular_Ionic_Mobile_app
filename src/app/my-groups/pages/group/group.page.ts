import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/shared/services/chat.service';
import { MyGroupsService } from 'src/app/shared/services/my-groups.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html'
})
export class groupPage implements OnInit {
  group: any;
  messages = [];

  constructor(
    private chatService: ChatService,
    private groupService: MyGroupsService
  ) { }

  ngOnInit(): void {
    this.group = this.groupService.getSelectedGroup();
    this.loadChat();
  }

  loadChat(): void {
    const params = {
      identifier: this.group.identifier,
      category: 'group'
    };
    this.chatService.getChat(params).subscribe(
      response => this.messages = response.mensajes
    );
  }

  sendMessage(message: string): void {
    let params = {
      identifier: this.group.identifier,
      body: message,
      category: 'group',
      mimeType: 'txt'
    };
    this.chatService.sendMessage(params).subscribe(
      res => this.loadChat
    );
  }

  uploadFile(base64File) {
    const params = {
      identifier: this.group.identifier,
      category: 'group',
      base64: base64File
    };
    this.chatService.sendMessage(params).subscribe(
      res => this.loadChat
    );
  }
}
