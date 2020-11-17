import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { chatComponent } from './components/chat/chat.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { chatMenuComponent } from './components/chat-menu/chat-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    chatComponent,
    PageLayoutComponent,
    chatMenuComponent
  ],
  exports: [
    chatComponent,
    PageLayoutComponent,
    chatMenuComponent
  ]
})
export class sharedModule { }
