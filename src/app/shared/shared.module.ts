import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { chatComponent } from './components/chat/chat.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    chatComponent
  ],
  exports: [
    chatComponent
  ]
})
export class sharedModule { }
