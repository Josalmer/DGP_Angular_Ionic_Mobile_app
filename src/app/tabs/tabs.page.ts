import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyProfileService } from '../shared/services/my-profile.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  genre: string;

  constructor(
    private profileService: MyProfileService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.profileService.loadUserProfile().subscribe(
      response => this.genre = this.profileService.getCurrentUser().genre
    );
  }

  navigateTo(route: string) {
    this.router.navigateByUrl('/tabs/' + route);
  }
}
