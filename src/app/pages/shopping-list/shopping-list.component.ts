import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductBuy } from 'src/app/service/interface';
import { ProductService } from 'src/app/service/product/product.service';

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
  public totalSum: number = 0;

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
    console.log(value);

    this.boughtProducts = this.productService.Delateitem<IProductBuy>(value, this.boughtProducts);
    if (this.boughtProducts.length === 0) {
      this.isEmpty = true;
    }
  }

  onCounterReceived(counter: number) {
    this.totalSum += counter;
  }
}
