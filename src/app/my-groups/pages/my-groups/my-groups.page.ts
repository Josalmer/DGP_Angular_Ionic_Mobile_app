import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyGroupsService } from '../../../shared/services/my-groups.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: 'my-groups.page.html'
})
export class MyGroupsPage implements OnInit {
  myGroups: any;

  constructor(
    private groupsService: MyGroupsService,
    private router: Router
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

  navigateToGroup(id: string): void {
    this.router.navigateByUrl('/tabs/my-groups/' + id);
  }
}
