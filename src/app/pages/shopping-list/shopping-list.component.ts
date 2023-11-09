import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductBuyNew } from 'src/app/service/instance.class';
import { IProductBuy, IProductBuyNew } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

interface MyObject {
  title: string;
  value: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [
    './shopping-list.component.scss',
    './media.scss'
  ]
})
export class ShoppingListComponent{

  public boughtProducts: IProductBuy[] = [];
  public boughtProductsNew: IProductBuyNew[] = [];

  public title: string = "";
  public image: string = "";
  public price: number = 0;
  public isEmpty = true;
  public sum: number = 0;
  public sumDelete: number = 0;
  public totalSum: number = 0;
  public totalSumArray: MyObject[] = [];

  constructor(
    private routing: Router,
    private productService: ProductService
  ) {
    this.boughtProducts = this.productService.getBoughtProducts();

    this.boughtProducts.forEach(elem => {
      const price = (elem.sale == 0)? elem.price : elem.sale
      const item: ProductBuyNew = new ProductBuyNew(
        elem.image,
        elem.title,
        price,
        elem.counter,
      );
      this.boughtProductsNew.push(item);
    });

    this.isEmpty = (this.boughtProductsNew.length != 0) ? false : true;
  }

  public goToUrl(value: string) {
    this.routing.navigate([value]);
  }

  public Delate(value: IProductBuyNew) {
    this.boughtProductsNew = this.productService.Delateitem<IProductBuyNew>(value, this.boughtProductsNew);

    if (this.boughtProductsNew.length === 0) {
      this.isEmpty = true;
    }
    this.totalSum -= value.price;
  }

  public onCounterReceived(event: MyObject): void {

    const { title, value } = event;
    const previousSumItem = this.sum;
    const currentSumItem = value;

    if (previousSumItem > currentSumItem) {
      this.sum -= previousSumItem - currentSumItem;
    } else if (previousSumItem < currentSumItem) {
      this.sum += currentSumItem - previousSumItem;
    }

    this.totalSumArray.push({ title: title, value: this.sum });

    const uniqueProductBuy = this.totalSumArray.reduceRight((accumulator: MyObject[], currentObject: MyObject) => {
      const foundIndex = accumulator.findIndex(obj => obj.title === currentObject.title);
      if (foundIndex === -1) {
        accumulator.unshift(currentObject);
      }
      return accumulator;
    }, []);

    let sum: number = 0;
    uniqueProductBuy.forEach(elem => {
      sum += elem.value;
    });
    this.totalSum = sum ;
  }
}
