import { Component, Input, OnInit } from '@angular/core';
import { IReviews } from 'src/app/service/interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() itemReviews: IReviews = {} as IReviews;

  ngOnInit(): void {
  }
}
