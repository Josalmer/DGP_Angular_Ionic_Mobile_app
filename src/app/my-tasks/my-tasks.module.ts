import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyTasksPage } from './pages/my-tasks/my-tasks.page';
import { TaskPage } from './pages/task/task.page';
import { sharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    sharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MyTasksPage },
      { path: ':id', component: TaskPage }
    ])
  ],
  declarations: [
    MyTasksPage,
    TaskPage
  ]
})
export class MyTasksPageModule {}
