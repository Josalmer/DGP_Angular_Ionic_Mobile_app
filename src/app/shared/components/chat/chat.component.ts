import { Component, Input, OnInit } from '@angular/core';
import { MyProfileService } from '../../services/my-profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html'
})
export class chatComponent implements OnInit {
  @Input() messages: any[];
  user: any;

  constructor(
    private profileService: MyProfileService
  ) { }

  ngOnInit(): void {
    this.user = this.profileService.getCurrentUser().id;
    console.log(this.messages);
  }

  chatImg(messageImg: string): string {
    return environment.backend_url + '/' + messageImg;
  }
}
