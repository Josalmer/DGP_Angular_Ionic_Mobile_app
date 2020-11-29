import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-menu',
	templateUrl: 'user-menu.component.html'
})
export class userMenuComponent {
	constructor(
		private router: Router
	) {}

	navigateToUserProgress() {
		this.router.navigateByUrl('/tabs/my-profile/user-progress');
	}
}
