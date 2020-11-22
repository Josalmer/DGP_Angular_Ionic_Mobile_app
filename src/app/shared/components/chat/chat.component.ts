import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-chat',
	templateUrl: 'chat.component.html'
})
export class chatComponent {
	@Input() messages: any[];
	@Input() user: any;
}
