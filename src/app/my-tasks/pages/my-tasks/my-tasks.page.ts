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
  filteredTasks: any = [];

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
      response => {
        this.myTasks = response;
        this.filteredTasks = this.myTasks;
      },
      error => {
        this.toastAlert.presentToast('Se ha producido un error en la carga de tareas: ' + error.details, 'danger');
      }
    );
  }

  navigateToTask(id: string): void {
    this.router.navigateByUrl('/tabs/my-tasks/' + id +'/info');
  }

  filterTask(search:string): void{

    
    this.filteredTasks = search === '' ? this.myTasks : this.myTasks.filter(task => this.selectTask(task.title, search));
  }

  selectTask(title:string, search: string): boolean{

    return title.toLowerCase().includes(search.toLowerCase());

  }

}
