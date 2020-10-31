import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/services/chat.service';

@Component({
	selector: 'app-chat',
	templateUrl: 'chat.page.html'
})
export class chatPage implements OnInit {
	group: any;
	messages: any;

	constructor(private chatService: ChatService) {}

	ngOnInit(): void {
		this.loadGroup();
	}

	loadGroup(): void {
		this.chatService.getMockedGroup().subscribe(
			(response) => {
				this.group = response;
				//Get messages en funcion del grupo (ahora mismo mocked)
				this.chatService.getMockedMessages().subscribe(
					(response) => {
						this.messages = response;
					},
					(error) => {
						alert(error);
					}
				);
			},
			(error) => {
				alert(error);
			}
		);
	}
}
