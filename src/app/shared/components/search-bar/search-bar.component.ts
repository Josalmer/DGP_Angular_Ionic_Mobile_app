import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent {
  @Output() searchEmitter = new EventEmitter();
  @Input() placeHolder: string;

  search = '';


  doSearch(): void{
    this.searchEmitter.emit(this.search);
  }
}
