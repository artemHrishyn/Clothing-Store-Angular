import { Component } from '@angular/core';
import { ProductBuy, ShablonDetailsProduct } from 'src/app/service/instance.class';
import { IDataProduct, IProductBuy } from 'src/app/service/interface';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent {

  public isShorts: boolean = false;
  public isSneakers: boolean = false;
  public isTShirts: boolean = false;

  public showArrayProducts: ShablonDetailsProduct[] = [];
  private mainProducts: ShablonDetailsProduct[] = [];
  public category: string = "";

  public titleProduct: string = "";
  public imageProducts: string[] = [];
  public imageProduct: string = "";
  public ratingProduct: number = 0;
  public priceProduct: number = 0;
  public saleProduct: number = 0;
  public percentageProduct: number = 0;
  public colorProduct: string[] = [];
  public isShowProduct: boolean = false;

   public isSizeProduct: { key: string, value: boolean }[] = [];

  public isSale: boolean = false;

  constructor(
    private dataProcessingService: ProcessingDataService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.dataProcessingService.getAllProduct().subscribe((data: ShablonDetailsProduct[]) => {
      this.showArrayProducts = data;
      this.mainProducts = data;
    });
  }

  public generateArray = (n: number): any[] => Array(n);

  // Вивод товару згідно філтру
  public filterCategory(category: string) {
    this.dataProcessingService.returnCatalogAllProducts(category).subscribe((data: ShablonDetailsProduct[]) => {

      let isValue: boolean = false;
      switch (category) {
        case "shorts":
          this.isShorts = !this.isShorts;
          isValue = this.isShorts;
          this.category =  this.isShorts ? "Шорти" : "";
          break;
        case "sneakers":
          this.isSneakers = !this.isSneakers;
          isValue = this.isSneakers;
          this.category =  this.isSneakers ? "Кросівки" : "";
          break;
        case "tshirt":
          this.isTShirts = !this.isTShirts;
          isValue = this.isTShirts;
          this.category = this.isTShirts ? "Футболки" : "";
          break;

        default:
          this.showArrayProducts = this.mainProducts;
          break;
      }
      this.showArrayProducts = isValue ? data : this.mainProducts;
    });
  }

  public showSize(sizes: { [key: string]: boolean }): { key: string, value: boolean }[] {
    const sizeArray: { key: string; value: boolean }[] = Object.entries(sizes).map(([key, value]) => ({
      key,
      value
    }));
    return sizeArray;
  }

  public handleProductClicked(product: ShablonDetailsProduct): void {
    this.dataProcessingService.fetchFirebaseAllProduct().subscribe((data: IDataProduct[]) => {
      const foundItem = data.find(item =>
        item.title === product.title &&
        item.rating === product.rating &&
        item.price === product.price &&
        item.sale === product.sale
        );
        if (foundItem) {
          this.creatDetailsInfoProduct(foundItem);
      }
    });
  }

  // створення Детальну інформацію о продукті та записує у зміні
  private creatDetailsInfoProduct( data: IDataProduct): void {
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

    this.imageProduct = productDetails.image[0];
    this.titleProduct = productDetails.title;

    // перевірка ціле ли число чи ні, та перезаписати округливши число
    if (productDetails.rating % 1 >= 0.5) {
      productDetails.rating = Math.ceil(productDetails.rating);
    } else {
      productDetails.rating = Math.floor(productDetails.rating);
    }
    this.ratingProduct = productDetails.rating;

    this.saleProduct = productDetails.sale;
    this.priceProduct = productDetails.price;
    this.colorProduct = productDetails.color;
    this.imageProducts = productDetails.image;

    const percent = (1 - (this.saleProduct / this.priceProduct)) * 100;
    this.percentageProduct = Math.round(percent);

    this.isSizeProduct = this.showSize(data.size);
    this.isShowProduct = true;
    this.isSale = (this.saleProduct == 0) ? false : true;
  }

  public getItemColor(value: boolean): string {
    return value ? "#c6f069" : "#d3d3d3";
  }

  public getCursor(value: boolean): string {
    return value ? "pointer" : "no-drop";
  }

  public showMainImage(img: string) {
    this.imageProduct = img;
  }

  public counter: number = 1;

  public buyProduct(): IProductBuy {

     const item: IProductBuy = new ProductBuy(
      this.imageProduct,
      this.titleProduct,
      this.priceProduct,
       this.saleProduct,
      this.counter
     );

    this.productService.buyProduct(item);

    return item;
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
  }

}
