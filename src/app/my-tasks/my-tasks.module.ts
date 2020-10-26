import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MyTaskListPage } from './my-tasks.page';
import { userTasksComponent } from './components/my-task-list/my-task-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MyTaskListPage }])
  ],
  declarations: [
    MyTaskListPage,
    userTasksComponent
  ]
})
export class MyTaskListPageModule {}
