import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductBuy, ShablonDetailsProduct } from 'src/app/service/instance.class';
import { IProductBuy } from 'src/app/service/interface';
import { ClassProductService } from 'src/app/service/product/class-product/class-product.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: [
    './product-cart.component.scss',
    './media.scss'
  ]
})
export class ProductCartComponent implements OnInit {
  @Input() itemProduct: ShablonDetailsProduct = {} as ShablonDetailsProduct;
  @Output() productClicked: EventEmitter<ShablonDetailsProduct> = new EventEmitter<ShablonDetailsProduct>();

  public counter: number = 1;
  public image: string = "";
  public price: number = 0;

  public isBuy: boolean = true;

  constructor(
    private productService: ProductService,
    private classProductService: ClassProductService
  ) { }

  ngOnInit() {
    if (this.itemProduct.image && this.itemProduct.image.length > 0) {
      this.image = this.itemProduct.image[0];
    }
    this.price = (this.itemProduct.sale === 0) ? this.itemProduct.price : this.itemProduct.sale;
  }

  public buyProduct(): IProductBuy {

    const item: IProductBuy = this.classProductService.returnClassBuyDetailsProduct(
      this.image,
      this.itemProduct.title,
      this.price,
      this.itemProduct.sale,
      this.counter
    );

    this.productService.buyProduct(item);
    this.isBuy = !this.isBuy;

    return item;
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
