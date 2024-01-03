import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGlobalCategory, IDataProduct, IReviews } from '../interface';
import { ShablonDetailsProduct } from '../instance.class';
import { MixElementsPipe } from 'src/app/pipe/mix-elements/mix-elements.pipe';
import { ClassProductService } from '../product/class-product/class-product.service';
import { ReceivingDataService } from '../receiving-data/receiving-data.service';
enum SiteCategory {
  clothes = 'clothes',
  reviews = 'reviews'
};

enum ProductCategory {
  shorts = 'shorts',
  sneakers = 'sneakers',
  tshirt = 'tshirt'
};
@Injectable({
  providedIn: 'root'
})
export class ProcessingDataService {

  constructor(
    private receivingDataService: ReceivingDataService,
    private mixElementsPipe: MixElementsPipe,
    private classProductService: ClassProductService
  ) {}


  // Обробка даних та повертає спільний масив усіх категорії продуктів
  public getData(value: string): Observable<IDataProduct[]> {
    return this.receivingDataService.fetchData(value).pipe(
      map((data: Object | null) => {
        // console.log(data);
        
         if (data === null) {
        return [];
      }

        const globalCategory = data as IGlobalCategory;
        let allProduct: IDataProduct[] = [];

        const shorts = globalCategory[ProductCategory.shorts];
        console.log(shorts);
        

        if (shorts) {

          Object.keys(shorts).forEach((key: string) => {
            allProduct.push(shorts[key]);
          });
        }
        else {
          console.error(`Нема даних категоріїж `,ProductCategory.shorts);
        }

        const sneakers = globalCategory[ProductCategory.sneakers];
        if (sneakers) {
          Object.keys(sneakers).forEach((key: string) => {
            allProduct.push(sneakers[key]);
          });
        }
        else {
          console.error(`Нема даних категоріїж `,ProductCategory.sneakers);
        }


        const tshirt = globalCategory[ProductCategory.tshirt];
        if (tshirt) {
          Object.keys(tshirt).forEach((key: string) => {
            allProduct.push(tshirt[key]);
          });
        }
        else {
          console.error(`Нема даних категоріїж `,ProductCategory.tshirt);
        }

        return allProduct;
      })
    );
  };

  // Повертає масив брендів, довжену брендів та продуктів
  public returnBrandsArray(): Observable<{
    uniqueImage: string[],
    brandsLength: number,
    totalProduct: number
  }> {
    return this.getData(SiteCategory.clothes).pipe(
      map((data: IDataProduct[]) => {

        const brandArray: string[] = [];
        const imageArray: string[] = [];

        const length: number = data.length;
        data.forEach((elem: IDataProduct) => {
          imageArray.push(elem.brandImg);
          brandArray.push(elem.brandTitle);
        });

        const uniqueBrands: string[] = Array.from(new Set(brandArray));
        const uniqueImage: string[] = Array.from(new Set(imageArray));
        const randomImage: string[] = this.mixElementsPipe.transform(uniqueImage);

        return {
          uniqueImage: this.imageBrandNew(randomImage),
          brandsLength: uniqueBrands.length,
          totalProduct: length
        };
      })
    );
  }

  // Повертає масив зображень брендів
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

  // Пвертає з бекенду масив продуктів згідно інтерфейсу ShablonDetailsProduct[]
  public getAllProduct(): Observable<ShablonDetailsProduct[]> {
    return this.getData(SiteCategory.clothes).pipe(
      map((data: IDataProduct[]) => {

        const allProduct: ShablonDetailsProduct[] = [];

        data.forEach((elem: IDataProduct) => {
          allProduct.push(elem);
        });
        const mixedBrands: ShablonDetailsProduct[] = this.mixElementsPipe.transform(allProduct);
        const newValue: ShablonDetailsProduct[] = mixedBrands;
        return newValue;
      })
    );
  }

  // Пвертає з бекенду масив ТОП продуктів згідно інтерфейсу ShablonDetailsProduct[]
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

  // Фальтрація по категаріям. Повертає, згідно значення, масив продуктів.
  private getCatalogAllProducts(value: string): Observable<IDataProduct[]> {
    return  this.receivingDataService.fetchData(SiteCategory.clothes).pipe(
      map((data: Object) => {
        const globalCategory = data as IGlobalCategory;
        let getShortsData: IDataProduct[] = [];

        switch (value) {
          case'shorts':
            const shorts = globalCategory[ProductCategory.shorts];
            Object.keys(shorts).forEach((key: string) => {
              getShortsData.push(shorts[key]);
            });
            break;
          case 'tshirt':
            const tshirt = globalCategory[ProductCategory.tshirt];
            Object.keys(tshirt).forEach((key: string) => {
              getShortsData.push(tshirt[key]);
            });
            break;
          case 'sneakers':
            const sneakers = globalCategory[ProductCategory.sneakers];
            Object.keys(sneakers).forEach((key: string) => {
              getShortsData.push(sneakers[key]);
            });
            break;

          default:
            console.log('Не збігаєтся з жодної категорії. Доступні категорії: "shorts" | "sneakers" | "tshirt" ');
            break;
        }

        return getShortsData;
      })
    );
  }

  public returnCatalogAllProducts(value: string): Observable<ShablonDetailsProduct[]> {
    return this.getCatalogAllProducts(value).pipe(
      map((data: IDataProduct[]) => {
        const allProductShorts: ShablonDetailsProduct[] = [];
        data.forEach((elem: IDataProduct) => {
        allProductShorts.push(this.classProductService.returnClassDetailsProduct(elem));
      });
        return allProductShorts;
      })
    );
  }

  // Вивод відкуків
  public getReviews(): Observable<IReviews[]> {
    return this.receivingDataService.fetchData(SiteCategory.reviews).pipe(
       map((data: Object) => {
        return  data as IReviews[];
      })
    );
  }
}
