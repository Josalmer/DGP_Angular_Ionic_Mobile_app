import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyProfileService } from '../../../shared/services/my-profile.service';

@Component({
  selector: 'app-user-progress',
  templateUrl: 'user-progress.page.html'
})
export class userProgressPage implements OnInit {
  categories: any;

  constructor(
    private profileService: MyProfileService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => this.getProgress()
    );
  }

  getProgress() {
    this.profileService.getProgress().subscribe(
      response => {
        this.categories = response.categories;
      },
      error => {
        alert(error);
      }
    );
  }

  lowercase(name: string) {
    return name.toLowerCase();
  }
}
