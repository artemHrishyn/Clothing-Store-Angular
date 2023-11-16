import { Component, Input, OnInit } from '@angular/core';
import { CounterPipe } from 'src/app/pipe/counter/counter.pipe';
import { ProductBuy } from 'src/app/service/instance.class';
import { IProductBuy, IProductDetails } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent  implements OnInit {

  @Input() itemProduct: IProductDetails = {} as IProductDetails;

  public imageProduct: string = "";
  public percentageProduct: number = 0;
  public price: number = 0;

  public sizeProduct: { [key: string]: boolean } = {
    '44': false,
    '46': false,
    '48': false,
    '50-52': false,
    '54': false,
    '56-58': false,
  };
  public isSale: boolean = true;

  constructor(
    private productService: ProductService,
    private counterPipe: CounterPipe,
  ) {}
  ngOnInit(): void {
    this.imageProduct = this.itemProduct.image[0];

    this.isSale = (this.itemProduct.sale !== 0) ? this.isSale : !this.isSale;
    this.percentageProduct = this.itemProduct.sale / this.itemProduct.price;
    this.sizeProduct = this.itemProduct.size;
  }

  public getSizeKeys(): string[] {
    return Object.keys(this.sizeProduct);
  }

  public showMainImage(img: string) {
    this.imageProduct = img;
  }

  // Створює масив рядків довжиною n, де кожен елемент масиву є порожнім рядком. Потым пыдставляє ★
  public generateArray = (n: number): string[] => Array(n);


  public getItemColor(value: boolean): string {
    return value ? "#c6f069" : "#d3d3d3";
  }

  public getCursor(value: boolean): string {
    return value ? "pointer" : "no-drop";
  }


  public productCounter(value: string) {
    this.counter = this.counterPipe.transform(value, this.counter);
  }


  public counter: number = 1;

  public buyProduct(): IProductBuy {

     const item: ProductBuy = new ProductBuy(
      this.imageProduct,
      this.itemProduct.title,
      this.itemProduct.price,
      this.itemProduct.sale,
      this.counter
     );

    this.productService.buyProduct(item);

    return item;
  }
}
