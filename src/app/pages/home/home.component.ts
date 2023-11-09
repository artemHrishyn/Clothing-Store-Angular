import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShablonDetailsProduct } from 'src/app/service/instance.class';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './media.scss'
  ]
})
export class HomeComponent {

  public productAll: ShablonDetailsProduct[] = [];
  public productTop: ShablonDetailsProduct[] = [];

  public totalBrands: number = 0;
  public totalProduct: number = 0;

  public imgBrands: string[] = [];

  constructor(
    private processingDataService: ProcessingDataService,
    private routing: Router,
  ) {

    this.processingDataService.getTopProduct().subscribe((data: ShablonDetailsProduct[]) => {
      this.productTop = data;
    });

    this.processingDataService.getAllProduct().subscribe((data:ShablonDetailsProduct[]) => {
      this.productAll = data;
    });

    this.processingDataService.returnBrandsArray().subscribe(data => {
      this.imgBrands = data.uniqueImage;
      this.totalBrands = data.brandsLength;
      this.totalProduct = data.totalProduct;
    });
  }

  public goToUrl(value: string) {
    this.routing.navigate([value]);
  }
}
