import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShablonDetailsProduct } from 'src/app/service/instance.class';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';
import { ReceivingDataService } from 'src/app/service/receiving-data/receiving-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss',
    './media.scss'
  ]
})
export class MainComponent {

  public productAll: ShablonDetailsProduct[] = [];
  public productTop: ShablonDetailsProduct[] = [];

  public totalBrands: number = 0;
  public totalProduct: number = 0;

  public imgBrands: string[] = [];

  constructor(
    private processingDataService: ProcessingDataService,
    private routing: Router,
    private receivingDataService: ReceivingDataService,
    private http: HttpClient
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

  onCreatePost() {
    const data = {name: "jkhghj"};
    this.http.post('https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app/posts.json', data).subscribe(response => {
      console.log(response); // Виводимо результат в консоль
    });
  }

  public sentData() {
    const data = "user";
    this.receivingDataService.sendData(data).subscribe((elem) => {
      console.log(elem);
    });
  }

  public goToUrl(value: string) {
    this.routing.navigate([value]);
  }
}
