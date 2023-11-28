import { Injectable } from '@angular/core';
import { ProductBuy, ProductBuyNew, ShablonDetailsProduct } from '../../instance.class';
import { IDataProduct, IProductBuyNew } from '../../interface';

@Injectable({
  providedIn: 'root'
})
export class ClassProductService {

  public returnClassBuyProduct(data: IProductBuyNew): ProductBuyNew {
    let productDetails: ProductBuyNew = new ProductBuyNew(
      data.image,
      data.title,
      data.price,
      data.counter
    );
    return productDetails;
  }

  public returnClassBuyDetailsProduct(
    image: string,
    title: string,
    price: number,
    sale: number,
    counter: number
  ): ProductBuy {
    let productDetails: ProductBuy = new ProductBuy(
      image,
      title,
      price,
      sale,
      counter
    );
    return productDetails;
  }

  public returnClassDetailsProduct(data: IDataProduct): ShablonDetailsProduct {
    let productDetails: ShablonDetailsProduct = new ShablonDetailsProduct(
      data.color,
      data.image,
      data.price,
      data.rating,
      data.sale,
      data.size,
      data.title,
      data.type
    );
    return productDetails;
  }
}
