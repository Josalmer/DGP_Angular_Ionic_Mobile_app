import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfilePage } from './pages/my-profile/my-profile.page';
import { userDetailsComponent } from './pages/my-profile/components/user-details/user-details.component';
import { sharedModule } from '../shared/shared.module';
import { userMenuComponent } from './pages/my-profile/components/user-menu/user-menu.component'
import { userProgressPage } from './pages/user-progress/user-progress.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    sharedModule,
    RouterModule.forChild([
      { path: '', component: MyProfilePage },
      { path: 'user-progress', component: userProgressPage }
    ])
  ],
  declarations: [
    MyProfilePage,
    userDetailsComponent,
    userMenuComponent,
    userProgressPage
  ]
})
export class MyProfilePageModule {}
