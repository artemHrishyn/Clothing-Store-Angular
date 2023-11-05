import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductBuy } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

interface MyObject {
  title: string;
  value: number;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public boughtProducts: IProductBuy[] = [];

  public title: string = "";
  public image: string = "";
  public price: number = 0;
  public isEmpty = true;
  public sum: number = 0;
  public totalSum: number = 0;
  public totalSumArray: MyObject[] = [];

  constructor(
    private routing: Router,
    private productService: ProductService
  ) {
    this.boughtProducts = this.productService.getBoughtProducts();

    this.isEmpty = (this.boughtProducts.length != 0) ? false : true;
  }

  ngOnInit(): void {
  }

  goToUrl(value: string) {
    this.routing.navigate([value]);
  }

  public Delate(value: IProductBuy) {
    this.boughtProducts = this.productService.Delateitem<IProductBuy>(value, this.boughtProducts);
    if (this.boughtProducts.length === 0) {
      this.isEmpty = true;
    }
  }



  public titleProduct: string = "";
  public priceProduct: number  = 0;
  public productBuy: MyObject[] = []

//   onCounterReceived(event: MyObject): void {
//     this.productBuy.push(event);

//     console.log("productBuy", this.productBuy);
//     const uniqueProductBuy = this.productBuy.reduceRight((accumulator: MyObject[], currentObject: MyObject) => {
//   const foundIndex = accumulator.findIndex(obj => obj.title === currentObject.title);
//   if (foundIndex === -1) {
//     accumulator.unshift(currentObject);
//   }
//   return accumulator;
// }, []);
//     console.log("uniqueArray", uniqueProductBuy);

//     const { title, value } = event;
//     uniqueProductBuy.forEach(elem => {
//       if (elem.title === title) {
//         if (elem.value > value) {
//           this.totalSum += elem.value - value;
//         }
//         else if (elem.value < value) {
//           this.totalSum -= value - elem.value;
//         }
//       }
//     });
  //   }

  onCounterReceived(event: MyObject): void {
    // this.productBuy.push(event);

    // const uniqueProductBuy = this.productBuy.reduceRight((accumulator: MyObject[], currentObject: MyObject) => {
    //   const foundIndex = accumulator.findIndex(obj => obj.title === currentObject.title);
    //   if (foundIndex === -1) {
    //     accumulator.unshift(currentObject);
    //   }
    //   return accumulator;
    // }, []);

    // uniqueProductBuy.forEach(elem => {
    //   const { title, value } = elem;
    //   const previousSumItem = this.totalSum;
    //   const currentSumItem = value;

    //   if (previousSumItem > currentSumItem) {
    //     this.totalSum -= previousSumItem - currentSumItem;
    //   } else if (previousSumItem < currentSumItem) {
    //     this.totalSum += currentSumItem - previousSumItem;
    //   }
    // });

    const { title, value } = event;
    const previousSumItem = this.sum;
    const currentSumItem = value;

    if (previousSumItem > currentSumItem) {
      this.sum -= previousSumItem - currentSumItem;
    } else if (previousSumItem < currentSumItem) {
      this.sum += currentSumItem - previousSumItem;
    }

    this.totalSumArray.push({ title: title, value: this.sum });
    console.log("totalSumArray" ,this.totalSumArray);

    const uniqueProductBuy = this.totalSumArray.reduceRight((accumulator: MyObject[], currentObject: MyObject) => {
      const foundIndex = accumulator.findIndex(obj => obj.title === currentObject.title);
      if (foundIndex === -1) {
        accumulator.unshift(currentObject);
      }
      return accumulator;
    }, []);

    console.log("uniqueProductBuy", uniqueProductBuy);

    let sum: number = 0;
    uniqueProductBuy.forEach(elem => {
      sum += elem.value;
    });
    this.totalSum = sum;
  }
}
