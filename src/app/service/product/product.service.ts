import { Injectable } from '@angular/core';
import { IProductBuy } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private boughtProducts: IProductBuy[] = [];

  constructor() { }

  buyProduct(product: IProductBuy ) {
    this.boughtProducts.push(product);
  }

  getBoughtProducts() {

    this.boughtProducts = this.boughtProducts.filter((product, index, self) =>
      index === self.findIndex((p) =>
        p.image === product.image &&
        p.title === product.title &&
        p.price === product.price &&
        p.sale === product.sale
      )
    );

    return this.boughtProducts;
  }

 Delateitem<T>(value: T, data: T[]): T[] {
  return data.filter((element) => element !== value);
}
}
