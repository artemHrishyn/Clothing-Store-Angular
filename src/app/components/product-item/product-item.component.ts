import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductBuy, ShablonDetailsProduct } from 'src/app/service/instance.class';
import { IProductBuy } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() itemProduct: ShablonDetailsProduct = {} as ShablonDetailsProduct;
  @Output() productClicked: EventEmitter<ShablonDetailsProduct> = new EventEmitter<ShablonDetailsProduct>();
  // @Output() productClicked: EventEmitter<void> = new EventEmitter<void>();

  public image: string = "";
  public title: string = "";
  public rating: number = 0;
  public price: number = 0;
  public sale: number = 0;
  public counter: number = 1;

  private isPriceV2: Array<boolean> = [];
  public isPrice: boolean = true;

  ngOnInit() {
    this.image = this.itemProduct.image[0];
    this.title = this.itemProduct.title;
    this.rating = this.itemProduct.rating;
    this.price = this.itemProduct.price;
    this.sale = this.itemProduct.sale;
    if (this.itemProduct.sale == 0) {
      this.isPrice = false;
    }
  }


  constructor(
  private productService: ProductService
  ) {}

  public buyProduct(): IProductBuy {

    const item: IProductBuy = new ProductBuy(
    this.image,
    this.title,
    this.price,
    this.sale,
    this.counter
    );

    this.productService.buyProduct(item);

    return item;
  }

    public logItemSale(sale: number): string {
      if (sale > 0) {
        this.isPriceV2.push(true);
        return sale + "UAN";
      } else {
        this.isPriceV2.push(false);
        return "";
      }
    }

    public createStar(value: number): string {
      let star: string = "";
      for (let index = 0; index < value; index++) {
        star += "★ ";
      }
      return star;
    }
    public openProduct(): void {
      this.productClicked.emit(this.itemProduct);
    }
}
