import { Component } from '@angular/core';
import { ShablonDetailsProduct } from 'src/app/service/instance.class';
import { IDataProduct, IProductDetails } from 'src/app/service/interface';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';
import { ClassProductService } from 'src/app/service/product/class-product/class-product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [ ClassProductService ]
})
export class CatalogComponent {

  public valueProduct: IProductDetails = {} as IProductDetails;

  private isShorts: boolean = false;
  private isSneakers: boolean = false;
  private isTShirts: boolean = false;

  public showArrayProducts: ShablonDetailsProduct[] = [];
  public reservArrayProducts: ShablonDetailsProduct[] = [];
  private mainProducts: ShablonDetailsProduct[] = [];
  public category: string = "";

  private titleProduct: string = "";
  public isShowProduct: boolean = false;

  constructor(
    private dataProcessingService: ProcessingDataService,
    private classProductService: ClassProductService
  ) {}

  ngOnInit(): void {
    this.dataProcessingService.getAllProduct().subscribe((data: ShablonDetailsProduct[]) => {
      this.reservArrayProducts = data
      this.showArrayProducts = this.reservArrayProducts.slice(0,10);
      this.mainProducts = data;
    });
  }

  changePage(value1: number, value2: number) {
        this.showArrayProducts = this.reservArrayProducts.slice(value1, value2);
  }

  // Вивод товару згідно філтру
  public filterCategory(category: string) {
    this.dataProcessingService.returnCatalogAllProducts(category).subscribe((data: ShablonDetailsProduct[]) => {
      this.category = "";
      let isValue: boolean = false;
      switch (category) {
        case "shorts":
          this.isShorts = !this.isShorts;
          isValue = this.isShorts;
          this.category =  this.isShorts ? "Shorts" : "";
          break;
        case "sneakers":
          this.isSneakers = !this.isSneakers;
          isValue = this.isSneakers;
          this.category =  this.isSneakers ? "Sneakers" : "";
          break;
        case "tshirt":
          this.isTShirts = !this.isTShirts;
          isValue = this.isTShirts;
          this.category = this.isTShirts ? "T-Shirts" : "";
          break;

        default:
          this.showArrayProducts = this.mainProducts;
          break;
      }
      this.showArrayProducts = isValue ? data : this.mainProducts;
      this.isShowProduct = false;
    });
  }

  public handleProductClicked(product: ShablonDetailsProduct): void {
    this.dataProcessingService.getData("clothes").subscribe((data: IDataProduct[]) => {
      const foundItem = data.find(item =>
        item.title === product.title &&
        item.rating === product.rating &&
        item.price === product.price &&
        item.sale === product.sale
        );
      if (foundItem) {
        this.isShowProduct = true;

        const value = this.classProductService.returnClassDetailsProduct(foundItem);
        this.valueProduct = value;
        this.titleProduct = value.title;
        this.category = "";
        this.category = value.type + " > " + this.titleProduct;
      }
    });
  }
}
