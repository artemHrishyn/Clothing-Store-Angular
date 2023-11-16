import { Component, Input, OnInit } from '@angular/core';
import { IReviews } from 'src/app/service/interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{
  @Input() itemReviews: IReviews = {} as IReviews;

  public data: string = '';
  public image: string = '';
  public lastname: string = '';
  public name: string = '';
  public rating: number = 0;
  public text: string = '';

  ngOnInit(): void {
    this.data = this.itemReviews.date;
    this.image = this.itemReviews.image;
    this.lastname = this.itemReviews.lastname;
    this.name = this.itemReviews.name;
    this.rating = this.itemReviews.rating;
    this.text = this.itemReviews.text;
  }
}
