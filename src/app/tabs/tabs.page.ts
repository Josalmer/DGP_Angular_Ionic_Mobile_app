import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../shared/services/my-profile.service';
import { ToastAlertService } from '../shared/services/toast-alert.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  genre : string;

  constructor(
    private profileService: MyProfileService,
    private toastAlert: ToastAlertService
    ) { }

  ngOnInit(): void {
    this.loadData();
  }


 loadData() : void{
    this.loadUserGenre();
  }

  loadUserGenre() :void{

    this.genre = this.profileService.getUserGenre();

  }

}
