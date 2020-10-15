import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html'
})
export class userDetailsComponent {

  @Input() myProfile: any;
  @Output() refreshProfileEmitter = new EventEmitter();

  constructor(
  ) { }

  refreshProfile(): void {
    this.refreshProfileEmitter.emit();
  }
}
