import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-chats',
  templateUrl: 'group-chats.component.html'
})
export class groupChatsComponent {
  @Input() myGroups: any;

  constructor() { }
}
