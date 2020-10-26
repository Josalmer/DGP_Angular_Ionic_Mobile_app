import { Component, OnInit } from '@angular/core';
import { MyGroupsService } from '../shared/services/my-groups.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: 'my-groups.page.html'
})
export class MyGroupsPage implements OnInit {
  myGroups: any;

  constructor(
    private groupsService: MyGroupsService
    ) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupsService.getMockGroups().subscribe(
      response => {
        this.myGroups = response;
      },
      error => {
        alert(error);
      }
    );
  }
}
