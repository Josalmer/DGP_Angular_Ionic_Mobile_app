import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../../login/services/login.service';
import { SessionService } from '../../../shared/services/session.service';
import { MyProfileService } from '../../../shared/services/my-profile.service';

@Component({
	selector: 'app-my-profile',
	templateUrl: 'my-profile.page.html'
})
export class MyProfilePage implements OnInit {
	myProfile: any;

	constructor(
		private profileService: MyProfileService,
		private navCtrl: NavController,
		private loginService: LoginService,
		private sessionService: SessionService
	) {}

	ngOnInit(): void {
		this.myProfile = this.profileService.getCurrentUser();
	}

	async logout() {
		this.loginService.logout().subscribe((response) => {
			this.sessionService.clearAuthToken();
			this.profileService.clearUser();
			this.navCtrl.navigateRoot([ '/login' ]);
		});
	}
}
