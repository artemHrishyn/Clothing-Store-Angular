import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductBuy } from 'src/app/service/interface';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  @Input() itemProduct: IProductBuy = {} as IProductBuy;
  @Output() onDelete: EventEmitter< IProductBuy > = new EventEmitter< IProductBuy >();
  @Output() onCounter: EventEmitter<number> = new EventEmitter<number>();

  public sumItem: number = 0;

  public title: string = "";
  public image: string = "";
  public price: number = 0;
  public counter: number = 0;
  public close: boolean = false;

  constructor() {}


  ngOnInit() {
    const { title, image, price, counter } = this.itemProduct;
    this.title = title;
    this.image = image;
    this.counter = counter;
    console.log(this.price);

    this.sumItem = this.price * this.counter;

    setTimeout(() => this.setCounter(this.sumItem), 1);
  }

  public productCounter(value: string) {
    switch (value) {
      case "minus":
        (this.counter > 0) ? this.counter-- : 0;
        this.sumItem = this.price * this.counter;
        this.setCounter(this.sumItem);
        break;

      case "plus":
        this.counter++;
        this.sumItem = this.price * this.counter;
        this.setCounter(this.sumItem);
        break;

      default:
        this.counter = 0;
        break;
    }
  }

  public setCounter(value: number): number {
    this.onCounter.emit(value);
    return value;
  }

  Delate(): IProductBuy  {
    this.onDelete.emit(this.itemProduct);
    return this.itemProduct;
  }
}
