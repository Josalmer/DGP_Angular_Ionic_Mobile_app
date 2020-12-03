import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-menu',
  templateUrl: 'chat-menu.component.html'
})
export class chatMenuComponent {
  @Output() reloadChat = new EventEmitter();
  @Input() id: string;
  @Input() type: string;

  constructor(
    private chatService: ChatService
  ) { }

  currentMessage = '';
  currentData: any;

  sendMessage(): void {
    let params = {
      identifier: this.id,
      body: this.currentMessage,
      category: this.type,
      mimeType: 'txt'
    };
    this.chatService.sendMessage(params).subscribe(
      res => {
        this.reloadChat.emit();
        this.currentMessage = '';
      }
    );
  }

  onInputFileChange(event) {
    event.target.getInputElement().then(el => {
      if (el.files && el.files[0]) {
        const image = el.files[0];
        let reader = new FileReader();
        reader.onload = () => this.sendImage(reader.result);
        reader.readAsDataURL(image);
      }
    });
  }

  sendImage(base64File) {
    const params = {
      identifier: this.id,
      category: this.type,
      body: '',
      base64: base64File,
      mimeType: 'img'
    };
    this.chatService.sendMessage(params).subscribe(
      res => this.reloadChat.emit()
    );
  }
}
