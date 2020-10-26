import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyGroupsPage } from './my-groups.page';
import { groupChatsComponent } from './components/group-chats/group-chats.component';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([ { path: '', component: MyGroupsPage } ])
	],
	declarations: [ MyGroupsPage, groupChatsComponent ]
})
export class MyGroupsPageModule {}
