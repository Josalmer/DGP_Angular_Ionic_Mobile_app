import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../../../shared/services/my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html'
})
export class MyProfilePage implements OnInit {
  myProfile: any;

  constructor(
    private profileService: MyProfileService
  ) { }

  ngOnInit(): void {
    this.myProfile = this.profileService.getCurrentUser();
  }
}
