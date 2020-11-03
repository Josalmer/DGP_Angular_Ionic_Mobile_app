import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastAlertService } from 'src/app/shared/services/toast-alert.service';
import { MyTasksService } from '../../../shared/services/my-tasks.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.page.html'
})
export class MyTasksPage implements OnInit {

  myTasks: any = [];

  constructor(
    private tasksService: MyTasksService,
    private toastAlert: ToastAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getMockTasks().subscribe(
      response => this.myTasks = response,
      error => {
        this.toastAlert.presentToast('Se ha producido un error en la carga de tareas: ' + error.details, 'danger');
      }
    );
  }

  navigateToTask(id: string): void {
    this.router.navigateByUrl('/tabs/my-tasks/' + id);
  }

}
