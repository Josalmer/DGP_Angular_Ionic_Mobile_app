import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../shared/services/my-profile.service';
import { ToastAlertService } from '../shared/services/toast-alert.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html'
})
export class MyProfilePage implements OnInit {

  myProfile: any;

  constructor(
    private profileService: MyProfileService,
    private toastAlert: ToastAlertService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.profileService.getMockUserProfile().subscribe(
      response => {
        console.log(response);
        this.myProfile = response.user;
      },
      error => {
        this.toastAlert.presentToast('Se ha producido un error: ' + error.details, 'danger');
      }
    );
  }

}
