import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { chatPage } from './chat.page';
import { messagesComponent } from './components/messages/messages.component';

@NgModule({
	imports: [ IonicModule, CommonModule, FormsModule, RouterModule.forChild([ { path: '', component: chatPage } ]) ],
	declarations: [ chatPage, messagesComponent ]
})
export class ChatPageModule {}
