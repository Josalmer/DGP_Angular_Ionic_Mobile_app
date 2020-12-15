import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html'
})


export class StarRatingComponent{

  stars: number[] = [1, 2, 3, 4, 5];

  @Input() starCount = 0;
  @Input() variant = '';
  @Output() rateEmitter = new EventEmitter();

  constructor(
  ) { }

  getStarCount() {
    return this.starCount;
  }

  rateTask(stars: number): void {
    this.starCount = stars;
    const rate = {
      variant: this.variant,
      stars: this.starCount
    };
    this.rateEmitter.emit(rate);
  }
}
