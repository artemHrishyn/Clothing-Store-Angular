import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBuy, ShablonDetailsProduct } from 'src/app/service/instance.class';
import { IProductBuy } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: [
    './product-cart.component.scss',
    './media.scss'
  ]
})
export class ProductCartComponent {
   @Input() itemProduct: ShablonDetailsProduct = {} as ShablonDetailsProduct;
  @Output() productClicked: EventEmitter<ShablonDetailsProduct> = new EventEmitter<ShablonDetailsProduct>();
  // @Output() productClicked: EventEmitter<void> = new EventEmitter<void>();

  public image: string = "";
  public title: string = "";
  public rating: number = 0;
  public price: number = 0;
  private sale: number = 0;
  public counter: number = 1;

  public isPrice: boolean = true;
  public isBuy: boolean = true;

  ngOnInit() {
    this.image = this.itemProduct.image[0];
    this.title = this.itemProduct.title;
    this.rating = this.itemProduct.rating;
    this.price = this.itemProduct.price;
    this.sale = this.itemProduct.sale;

    this.price = (this.itemProduct.sale === 0) ? this.price : this.sale;
  }


  constructor(
  private productService: ProductService
  ) {}

  public buyProduct(): IProductBuy {

    const item: ProductBuy = new ProductBuy(
    this.image,
    this.title,
    this.price,
    this.sale,
    this.counter
    );

    this.productService.buyProduct(item);
    this.isBuy = !this.isBuy;


    return item;
  }

  // перевірка
  public logItemSale(sale: number): number {
    return (sale > 0) ? sale  : 0;
  }

  public createStar(value: number): string {
    let star: string = "";
    for (let index = 0; index < value; index++) {
      star += "★ ";
    }
    return star;
  }

  // методд для того щоб відкрити у каталозі детальню інформацію продукта
  public openProduct(): void {
    this.productClicked.emit(this.itemProduct);
  }
}
