import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyTasksService } from 'src/app/shared/services/my-tasks.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-task-info',
  templateUrl: 'task-info.page.html'
})
export class TaskInfoPage implements OnInit {
  taskId: string;
  task: any;
  userValoration = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: MyTasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.loadTask();
    });
  }

  loadTask(): void {
    this.taskService.getTaskById(this.taskId).subscribe(
      response => this.task = response.task
    );
  }

  navigateToTaskChat(id: string): void {
    this.router.navigateByUrl('/tabs/my-tasks/' + id + '/chat');
  }

  updateRateValues(rate: any): void {
    if (rate.variant === 'text') {
      console.log('text');
      this.task.rating.text = this.userValoration;
    }
    if (rate.variant === 'difficulty') {
      this.task.rating.difficulty = rate.stars;
    }
    if (rate.variant === 'utility') {
      this.task.rating.utility = rate.stars;
    }

    const rating = {
      id_task: this.task.id_tarea,
      text: this.task.rating.text,
      utility: this.task.rating.utility,
      difficulty: this.task.rating.difficulty
    };

    this.taskService.rateTask(rating).subscribe();
  }

  taskImage(): string {
    return environment.backend_url + '/' + this.task.mediaDescription;
  }

}
