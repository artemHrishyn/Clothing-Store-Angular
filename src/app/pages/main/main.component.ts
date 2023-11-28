  import { Component, OnInit } from '@angular/core';
  import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';
  import { ShablonDetailsProduct } from 'src/app/service/instance.class';
  import { IReviews } from 'src/app/service/interface';
  import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';

  @Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [
      './main.component.scss',
      './media.scss'
    ]
  })
  export class MainComponent implements OnInit{

    public productAll: ShablonDetailsProduct[] = [];
    public productTop: ShablonDetailsProduct[] = [];

    public totalBrands: number = 0;
    public totalProduct: number = 0;

    public imgBrands: string[] = [];
    public reviews: IReviews[] = [];

    constructor(
      private processingDataService: ProcessingDataService,
      private goToUrlService : GoToUrlService
    ) { }

    ngOnInit(): void {
      this.processingDataService.getTopProduct().subscribe((data: ShablonDetailsProduct[]) => {
        this.productTop = data;
      });
      this.processingDataService.getAllProduct().subscribe((data: ShablonDetailsProduct[]) => {
        this.productAll = data;
      });
      this.processingDataService.returnBrandsArray().subscribe(data => {
        this.imgBrands = data.uniqueImage;
        this.totalBrands = data.brandsLength;
        this.totalProduct = data.totalProduct;
      });
      this.processingDataService.getReviews().subscribe(data => {
        this.reviews = data;

      });
    }

    public goToUrl(value: string) {
      this.goToUrlService.goToUrl(value);
    }
  }
