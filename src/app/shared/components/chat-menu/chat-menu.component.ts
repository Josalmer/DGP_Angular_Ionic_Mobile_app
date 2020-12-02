import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-menu',
  templateUrl: 'chat-menu.component.html'
})
export class chatMenuComponent {
  @Output() sendMessageEmitter = new EventEmitter();
  @Output() sendFileEmitter = new EventEmitter();

  currentMessage = '';
  currentData: any;

  sendMessage(): void {
    if (this.currentMessage !== '') {
      this.sendMessageEmitter.emit(this.currentMessage);
    }
  }

  onInputFileChange(base64File) {
    this.sendFileEmitter.emit(base64File);
  }
}
