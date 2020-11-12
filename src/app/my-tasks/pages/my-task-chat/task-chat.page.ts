import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MyTasksService } from 'src/app/shared/services/my-tasks.service';

@Component({
  selector: 'app-task-chat',
  templateUrl: 'task-chat.page.html'
})
export class TaskChatPage implements OnInit {
  taskId: string;
  //task contendrá por ejemplo id, descripcion y mensajes
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
    this.taskService.getMockTaskById(this.taskId).subscribe(
      response => this.task = response
    );
  }

  navigateBack(id: string): void {
    this.router.navigateByUrl('/tabs/my-tasks/' + id + '/info');
  }

}
