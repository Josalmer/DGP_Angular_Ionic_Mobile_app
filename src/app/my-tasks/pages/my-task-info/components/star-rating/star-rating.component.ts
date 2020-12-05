import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MyTasksService } from 'src/app/shared/services/my-tasks.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html'
})


export class StarRatingComponent implements OnInit{

    stars: number[] = [1, 2, 3, 4, 5];

    @Input() starCount: number = 0;
    @Input() variant: string = '';
    @Output() rateEmitter = new EventEmitter();
    
    constructor(
      private myTaskService : MyTasksService
      ) { }

    ngOnInit(): void {

    }

    getStarCount() {
      return this.starCount;
    }

    rateTask(stars: number): void{
      this.starCount = stars;
      let rate = {
        variant: this.variant,
        stars: this.starCount
      }
      this.rateEmitter.emit(rate);      
    }

    
  }