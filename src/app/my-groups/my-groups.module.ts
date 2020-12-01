import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyGroupsPage } from './pages/my-groups/my-groups.page';
import { groupPage } from './pages/group/group.page';
import { sharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    sharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MyGroupsPage },
      { path: ':id', component: groupPage }
    ])
  ],
  declarations: [
    MyGroupsPage,
    groupPage
  ]
})
export class MyGroupsPageModule { }
