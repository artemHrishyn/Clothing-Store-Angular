import { Component } from '@angular/core';
import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';
import { ProductBuyNew } from 'src/app/service/instance.class';
import { IProductBuy, IProductBuyNew } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

interface MyObject {
  title: string;
  value: number;
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: [
    './shopping.component.scss',
    './media.scss'
  ]
})
export class ShoppingComponent {

  public boughtProducts: IProductBuy[] = [];
  public boughtProductsNew: IProductBuyNew[] = [];
  public isEmpty = true;
  public sum: number = 0;
  public totalSum: number = 0;
  public totalSumArray: MyObject[] = [];

  constructor(
    private productService: ProductService,
    private goToUrlService: GoToUrlService
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

  public backMainPage(value: string) {
    this.goToUrlService.goToUrl(value);
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
