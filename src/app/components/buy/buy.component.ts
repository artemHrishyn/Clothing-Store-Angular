import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductBuy, IProductBuyNew } from 'src/app/service/interface';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  @Input() itemProduct: IProductBuyNew = {} as IProductBuyNew;
  @Output() onDelete: EventEmitter<IProductBuyNew> = new EventEmitter<IProductBuyNew>();
  @Output() onCounter: EventEmitter<{ title: string, value: number }> = new EventEmitter<{ title: string, value: number }>();

  public sumItem: number = 0;

  public title: string = "";
  public image: string = "";
  public price: number = 0;
  public sale: number = 0;
  public counter: number = 0;
  public close: boolean = false;

  constructor() {}


  ngOnInit() {
    const { title, image, price, counter } = this.itemProduct;
    this.title = title;
    this.image = image;
    this.price = price;
    this.counter = counter;
    this.sumItem = this.price * this.counter;
    setTimeout(() => this.setCounter(this.title ,this.sumItem), 1);
  }

  public productCounter(value: string) {
    switch (value) {
      case "minus":
        (this.counter > 0) ? this.counter-- : 0;
      break;

      case "plus":
        this.counter++;
      break;

      default:
        this.counter = 0;
      break;
    }
    this.sumItem = 0;
    this.sumItem = this.price * this.counter;
    this.setCounter(this.title ,this.sumItem);
  }

  public setCounter(title: string, value: number): void {
    this.onCounter.emit({ title: title, value: value });
  }

  Delate(): IProductBuyNew  {
    this.onDelete.emit(this.itemProduct);
    return this.itemProduct;
  }
}
