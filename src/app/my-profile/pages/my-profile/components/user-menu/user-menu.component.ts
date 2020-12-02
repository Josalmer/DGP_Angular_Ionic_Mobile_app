import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/login/services/login.service';
import { MyProfileService } from 'src/app/shared/services/my-profile.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: 'user-menu.component.html'
})
export class userMenuComponent {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private loginService: LoginService,
    private sessionService: SessionService,
    private profileService: MyProfileService
  ) { }

  navigateToUserProgress() {
    this.router.navigateByUrl('/tabs/my-profile/user-progress');
  }

  async logout() {
    this.loginService.logout().subscribe((response) => {
      this.sessionService.clearAuthToken();
      this.profileService.clearUser();
      this.navCtrl.navigateRoot(['/login']);
    });
  }
}
