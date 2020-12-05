import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html'
})


export class StarRatingComponent{

    stars: number[] = [1, 2, 3, 4, 5];
    @Input() dificultyStars: number = 0;
    @Input() utilityStars: number = 0;

    constructor() { }



    countStar(star) {
      console.log('Value of star', star);
    }


    
  }