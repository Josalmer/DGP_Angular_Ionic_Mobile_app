import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/shared/services/chat.service';
import { MyGroupsService } from 'src/app/shared/services/my-groups.service';

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html'
})
export class groupPage implements OnInit {
  groupId: string;
  group: any;
  messages = [];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private groupService: MyGroupsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupId = params['id'];
      this.groupService.getGroups().subscribe(
        response => {
          this.group = response.grupos.filter(group => group.identifier === this.groupId)[0];
        },
        error => {
          alert(error);
        }
      );
      this.loadChat();
    });
  }

  loadChat(): void {
    const params = {
      identifier: this.groupId,
      category: 'group'
    };
    this.chatService.getChat(params).subscribe(
      response => this.messages = response.mensajes.reverse()
    );
  }
}
