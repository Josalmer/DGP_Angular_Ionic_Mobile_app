import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyTasksService } from 'src/app/shared/services/my-tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: 'task.page.html'
})
export class TaskPage implements OnInit {
  taskId: string;
  //task contendrá por ejemplo id, descripcion y mensajes
  task: any;


  constructor(
    private route: ActivatedRoute,
    private taskService: MyTasksService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.loadTask();
    });
  }

  loadTask(): void {
    this.taskService.getMockTaskById(this.taskId).subscribe(
      response => this.task = response
    );
    
    
  }

}
