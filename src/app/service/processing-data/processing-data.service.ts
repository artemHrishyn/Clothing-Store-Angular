import { Injectable } from '@angular/core';
import { ReceivingDataService } from '../receiving-data/receiving-data.service';
import { Observable, map } from 'rxjs';
import { GlobalCategory, IDataProduct } from '../interface';
import { ShablonDetailsProduct } from '../instance.class';
import { MixElementsPipe } from 'src/app/pipe/mix-elements/mix-elements.pipe';
enum SiteCategory {
  clothes = "clothes",
  reviews = "reviews"
};
interface BrandsInfo{
  image: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProcessingDataService {


  constructor(
    private receivingDataService: ReceivingDataService,
    private mixElementsPipe: MixElementsPipe,
  ) {}

  public getData(value: string): Observable<IDataProduct[]> {
    return this.receivingDataService.fetchData(value).pipe(
      map((data: Object) => {
        const globalCategory = data as GlobalCategory;
        let allProduct: IDataProduct[] = [];
        allProduct.push(...globalCategory["shorts"]);
        allProduct.push(...globalCategory["sneakers"]);
        allProduct.push(...globalCategory["tshirt"]);
        return allProduct;
      })
    );
  };

  public returnBrandsArray(): Observable<{
    uniqueImage: string[],
    brandsLength: number,
    totalProduct: number
  }> {
    return this.getData(SiteCategory.clothes).pipe(
      map((data: IDataProduct[]) => {

        const brandArray: string[] = [];
        const imageArray: string[] = [];

        data.forEach((elem: IDataProduct) => {
          const brand: BrandsInfo = {
            image: elem.brand['image'],
            title: elem.brand['title'],
          };
          imageArray.push(brand.image);
          brandArray.push(brand.title);
        });

        const length: number = data.length;

        const uniqueBrands = Array.from(new Set(brandArray));
        const uniqueImage = Array.from(new Set(imageArray));

        return {
          uniqueImage: this.imageBrandNew(uniqueImage),
          brandsLength: uniqueBrands.length,
          totalProduct: length
        };
      })
    );
  }

  private imageBrandNew(value: string[]): string[]{
    const newArray: string[] = [];
    if (window.innerWidth > 1500) {
      for (let index = 0; index < 7; index++) {
        newArray.push(value[index]);
      }
    }
    else {
      for (let index = 0; index < 5; index++) {
        newArray.push(value[index]);
      }
    }
    return newArray;
  }


  public getAllProduct(): Observable<ShablonDetailsProduct[]> {
    return this.getData(SiteCategory.clothes).pipe(
      map((data: IDataProduct[]) => {
        const allProduct: ShablonDetailsProduct[] = [];

        data.forEach((elem: IDataProduct) => {

          const item: ShablonDetailsProduct = new ShablonDetailsProduct(
            elem.color,
            elem.image,
            elem.price,
            elem.rating,
            elem.sale,
            elem.size,
            elem.title,
            elem.type
          );
          allProduct.push(item);
        });

        const mixedBrands = this.mixElementsPipe.transform(allProduct);
        const newValue: ShablonDetailsProduct[] =  mixedBrands as ShablonDetailsProduct[];
        return newValue;
      })
    );
  }

  // return Product [] with data. Top product
  public getTopProduct(): Observable<ShablonDetailsProduct[]> {
    return this.getAllProduct().pipe(
      map((data: ShablonDetailsProduct[]) => {
        const allProduct: ShablonDetailsProduct[] = [];
        data.forEach((elem: ShablonDetailsProduct) => {
          if (elem.rating == 5) {
            allProduct.push(elem);
          }
        });
        return allProduct;
      })
    );
  }


  private getCatalogAllProducts(value: string): Observable<IDataProduct[]> {
    return  this.receivingDataService.fetchData("clothes").pipe(
      map((data: Object) => {
        const globalCategory = data as GlobalCategory;

        let getShortsData: IDataProduct[] = [];

        switch (value) {
          case "shorts":
            getShortsData.push(...globalCategory["shorts"]);
            break;

          case "tshirt":
            getShortsData.push(...globalCategory["tshirt"]);
            break;

          case "sneakers":
            getShortsData.push(...globalCategory["sneakers"]);
            break;

          default:
            console.log("Не збігаєтся з жодної категорії. Доступні категорії: 'shorts' | 'sneakers' | 'tshirt' ");

            break;
        }

        return getShortsData;
      })
    );
  }

  public fetchFirebaseAllProduct(): Observable<IDataProduct[]> {
    return this.receivingDataService.fetchData("clothes").pipe(
      map((data: Object) => {
        const globalCategory = data as GlobalCategory;
        let allProduct: IDataProduct[] = [];
        allProduct.push(...globalCategory["shorts"]);
        allProduct.push(...globalCategory["sneakers"]);
        allProduct.push(...globalCategory["tshirt"]);
        return allProduct;
      })
    );
  }

  public returnCatalogAllProducts(value: string): Observable<ShablonDetailsProduct[]> {
    return this.getCatalogAllProducts(value).pipe(
      map((data: IDataProduct[]) => {
        const allProductShorts: ShablonDetailsProduct[] = [];

        data.forEach((elem: IDataProduct) => {
          let shablonDetailsProduct =
            new ShablonDetailsProduct(
              elem.color,
              elem.image,
              elem.price,
              elem.rating,
              elem.sale,
              elem.size,
              elem.title,
              elem.type
            );
        allProductShorts.push(shablonDetailsProduct);
      });
        return allProductShorts;
      })
    );
  }
}
