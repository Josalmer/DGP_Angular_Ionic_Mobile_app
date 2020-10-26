import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../shared/services/my-profile.service';
import { MyTaskListService } from '../shared/services/my-task-list.service';
import { ToastAlertService } from '../shared/services/toast-alert.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.page.html'
})
export class MyTaskListPage implements OnInit {

  myTaskList: any = [];

  constructor(
    private taskListService: MyTaskListService,
    private toastAlert: ToastAlertService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loadUserTaskList();
  }

  loadUserTaskList(): void {
    this.taskListService.getMockTaskList().subscribe(
      response => {
        console.log(response);
        this.myTaskList = response;
      },
      error => {
        this.toastAlert.presentToast('Se ha producido un error en la carga de tareas: ' + error.details, 'danger');
      }
    );
  }

}
