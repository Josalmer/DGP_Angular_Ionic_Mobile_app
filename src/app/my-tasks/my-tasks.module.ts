import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyTasksPage } from './pages/my-tasks/my-tasks.page';
import { TaskChatPage } from './pages/my-task-chat/task-chat.page';
import { TaskInfoPage } from './pages/my-task-info/task-info.page';
import { sharedModule } from '../shared/shared.module';
import { StarRatingComponent } from './pages/my-task-info/components/star-rating/star-rating.component';


@NgModule({
  imports: [
    sharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MyTasksPage },
      { path: ':id/info', component: TaskInfoPage },
      { path: ':id/chat', component: TaskChatPage}
    ])
  ],
  declarations: [
    MyTasksPage,
    TaskInfoPage,
    TaskChatPage,
    StarRatingComponent
  ]
})
export class MyTasksPageModule {}
