import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfilePage } from './my-profile.page';
import { userDetailsComponent } from './components/user-details/user-details.component';
import { sharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    sharedModule,
    RouterModule.forChild([{ path: '', component: MyProfilePage }])
  ],
  declarations: [
    MyProfilePage,
    userDetailsComponent
  ]
})
export class MyProfilePageModule {}
