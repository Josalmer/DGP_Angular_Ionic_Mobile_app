import { Component, OnInit } from '@angular/core';
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
    // this.taskListService.getTaskList(/*COMO COGEMOS EL ID DEL USUARIO QUE ESTARÁ EN EL COMPONENTE MY-PROFILE */).subscribe(
    //   response => {
    //     console.log(response);
    //     this.myTaskList = response.tasks;
    //   },
    //   error => {
    //     this.toastAlert.presentToast('Se ha producido un error en la carga de tareas: ' + error.details, 'danger');
    //   }
    // );

    this.myTaskList = this.taskListService.getMockTaskList(/*Debería recibir el id de usuario? */);

  }

}
