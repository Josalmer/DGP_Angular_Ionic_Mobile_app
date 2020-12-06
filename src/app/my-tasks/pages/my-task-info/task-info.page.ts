import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyTasksService } from 'src/app/shared/services/my-tasks.service';


@Component({
  selector: 'app-task-info',
  templateUrl: 'task-info.page.html'
})
export class TaskInfoPage implements OnInit {
  taskId: string;
  task: any;

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

  updateRateValues(rate: any):void{
    if(rate.variant === 'difficulty')
      this.task.rating.difficulty = rate.stars;
    
    if(rate.variant === 'utility')
      this.task.rating.utility = rate.stars;

      let rating = {
        id_tarea : this.task.id_tarea,
        text : "",
        utilidad: this.task.rating.utility,
        dificultad: this.task.rating.difficulty
      }

    this.taskService.rateTask(rating);
  }

}
