import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html'
})
export class userDetailsComponent {

  @Input() myProfile: any;

  constructor(
  ) { }

  getAge(): string {
    return this.myProfile.age;
  }

  userImage(): string {
    return this.myProfile.image !== '' ? environment.backend_url + '/' + this.myProfile.image : 'assets/img/profile.png';
  }
}
