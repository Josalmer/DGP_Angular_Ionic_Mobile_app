import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-chat-messages',
	templateUrl: 'chat-messages.component.html'
})
export class chatMessagesComponent {
	@Input() messages: any;

	constructor() {}
}
