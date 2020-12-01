import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-menu',
  templateUrl: 'chat-menu.component.html'
})
export class chatMenuComponent {
  @Output() sendMessageEmitter = new EventEmitter();

  currentMessage = '';
  currentData: any;

  sendMessage(): void {
    if (this.currentMessage !== '') {
      this.sendMessageEmitter.emit(this.currentMessage);
    }
  }
}
