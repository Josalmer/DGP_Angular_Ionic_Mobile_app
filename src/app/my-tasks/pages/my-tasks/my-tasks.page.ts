import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastAlertService } from 'src/app/shared/services/toast-alert.service';
import { MyTasksService } from '../../../shared/services/my-tasks.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: 'my-tasks.page.html'
})
export class MyTasksPage implements OnInit {

  myTasks: any;
  filteredTasks: any;
  categories = ['números', 'escritura', 'psicomotricidad'];
  selectedCategory = '';
  search = '';

  constructor(
    private tasksService: MyTasksService,
    private toastAlert: ToastAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getTasks().subscribe(
      response => {
        this.myTasks = response.tasks;
        this.filteredTasks = this.myTasks;
      },
      error => {
        this.toastAlert.presentToast('Se ha producido un error en la carga de tareas: ' + error.details, 'danger');
      }
    );
  }

  navigateToTask(id: string): void {
    this.router.navigateByUrl('/tabs/my-tasks/' + id + '/info');
  }

  filterTask(search: string): void {
    this.search = search;
    this.filteredTasks = search === '' ? this.myTasks : this.myTasks.filter(task => this.selectTask(task.title, search));
    if (this.selectedCategory !== '') {
      this.filteredTasks = this.filteredTasks.filter(task => task.category === this.selectedCategory);
    }
  }

  selectTask(title: string, search: string): boolean {
    return title.toLowerCase().includes(search.toLowerCase());
  }

  selected(category: string): boolean {
    return this.selectedCategory === category;
  }

  toggleSelected(category: string): void {
    if (this.selectedCategory === category) {
      this.selectedCategory = '';
    } else {
      this.selectedCategory = category;
    }
    this.filterTask(this.search);
  }
}
