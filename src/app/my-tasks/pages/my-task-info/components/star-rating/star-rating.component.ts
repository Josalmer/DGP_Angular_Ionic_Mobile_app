import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html'
})


export class StarRatingComponent implements OnInit{

    stars: number[] = [1, 2, 3, 4, 5];
    @Input() starCount: number = 0;

    constructor() { }

    ngOnInit(): void {

    }

    getStarCount() {
      return this.starCount;
    }


    
  }