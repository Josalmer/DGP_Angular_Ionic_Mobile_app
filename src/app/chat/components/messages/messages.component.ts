import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-messages',
	templateUrl: 'messages.component.html'
})
export class messagesComponent {
	@Input() messages: any;

	constructor() {}
}
