import { NgModule } from '@angular/core';
import { chatComponent } from './components/chat/chat.component';
import { chatMessagesComponent } from './components/chat-messages/chat-message.component';

@NgModule({
	imports: [],
	declarations: [ chatComponent, chatMessagesComponent ],
	exports: [ chatComponent, chatMessagesComponent ]
})
export class sharedModule {}
