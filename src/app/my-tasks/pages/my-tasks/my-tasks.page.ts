import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  taskStatus = ['solved', 'unsolved'];
  selectedCategory = '';
  selectedStatus = '';
  search = '';

  constructor(
    private route: ActivatedRoute,
    private tasksService: MyTasksService,
    private toastAlert: ToastAlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => this.loadTasks()
    );
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
      this.filteredTasks = this.filteredTasks.filter(task => task.category.toLowerCase() === this.selectedCategory);
    }
    if (this.selectedStatus !== '') {
      if (this.selectedStatus === 'solved') {
        this.filteredTasks = this.filteredTasks.filter(task => task.status.finished === true);
      }
      if (this.selectedStatus === 'unsolved') {
        this.filteredTasks = this.filteredTasks.filter(task => task.status.finished === false);
      }
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

  selectTaskStatus(status: string): void {
    if (status === this.selectedStatus) {
      this.selectedStatus = '';
    } else {
      this.selectedStatus = status;
    }

    this.filterTask(this.search);
  }

  getSelectedTaskStatus(): string {
    return this.selectedStatus;
  }

  categoryImage(category: string): string {
    return '/assets/img/' + category.toLowerCase() + '.png';
  }
}
