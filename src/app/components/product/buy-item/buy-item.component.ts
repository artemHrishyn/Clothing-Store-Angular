import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterPipe } from 'src/app/pipe/counter/counter.pipe';
import { IProductBuyNew } from 'src/app/service/interface';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss']
})
export class BuyItemComponent {

  @Input() itemProduct: IProductBuyNew = {} as IProductBuyNew;
  @Output() onDelete: EventEmitter<IProductBuyNew> = new EventEmitter<IProductBuyNew>();
  @Output() onCounter: EventEmitter<{ title: string, value: number }> = new EventEmitter<{ title: string, value: number }>();

  public sumItem: number = 0;
  public close: boolean = false;

  constructor(
    private counterPipe: CounterPipe
  ) { }

  ngOnInit() {
    this.sumItem = this.itemProduct.price * this.itemProduct.counter;
    setTimeout(() => this.setCounter(this.itemProduct.title ,this.sumItem), 1);
  }

  public productCounter(value: string) {
    this.itemProduct.counter = this.counterPipe.transform(value, this.itemProduct.counter);
    this.sumItem = 0;
    this.sumItem = this.itemProduct.price * this.itemProduct.counter;
    this.setCounter(this.itemProduct.title ,this.sumItem);
  }

  private setCounter(title: string, value: number): void {
    this.onCounter.emit({ title: title, value: value });
  }

  public Delate(): IProductBuyNew  {
    this.onDelete.emit(this.itemProduct);
    return this.itemProduct;
  }
}
