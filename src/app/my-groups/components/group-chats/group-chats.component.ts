import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-group-chats',
	templateUrl: 'group-chats.component.html',
	styles: [
		`
		.even {
			color: dark;
		}
		.odd {
			color: primary;
	}`
	]
})
export class groupChatsComponent {
	@Input() myGroups: any;

	constructor() {}
}
