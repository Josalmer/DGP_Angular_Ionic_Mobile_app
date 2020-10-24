import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-tasks',
  templateUrl: 'my-task-list.component.html'
})
export class userTasksComponent {

  @Input() myTasks: any;
  @Output() refreshProfileEmitter = new EventEmitter();

  constructor(
  ) { }

  refreshProfile(): void {
    this.refreshProfileEmitter.emit();
  }
}
