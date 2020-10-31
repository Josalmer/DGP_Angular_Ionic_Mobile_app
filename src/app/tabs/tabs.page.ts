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
    private profileService: MyProfileService
    ) { }

  ngOnInit(): void {
    this.genre = this.profileService.getCurrentUser().genre;
  }
}
