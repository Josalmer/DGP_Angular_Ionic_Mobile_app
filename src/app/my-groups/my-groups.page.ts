import { Component, OnInit } from '@angular/core';
import { MyGroupsService } from '../shared/services/my-groups.service';
import { ToastAlertService } from '../shared/services/toast-alert.service';

@Component({
	selector: 'app-my-groups',
	templateUrl: 'my-groups.page.html'
})
export class MyGroupsPage implements OnInit {
	myGroups: any;
	id = '5f8ebfc1628dd01a5aac1096';

	constructor(private groupsService: MyGroupsService, private toastAlert: ToastAlertService) {}

	ngOnInit(): void {
		this.loadGroups();
	}

	loadData(): void {
		//this.loadUserProfile();
	}

	loadGroups(): void {
		this.myGroups = this.groupsService.getMockGroups();
	}
}
