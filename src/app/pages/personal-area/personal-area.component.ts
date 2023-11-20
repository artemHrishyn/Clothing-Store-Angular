import { Component } from '@angular/core';
import { GoToUrlService } from 'src/app/service/goToUrl/go-to-url.service';
import { IDataProduct } from 'src/app/service/interface';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent {

  public items: IDataProduct[] = [];
  public itemRezerv: IDataProduct[] = [];
  public add: string = 'Add';
  public isAdd: boolean = false;

  constructor(
    private processingDataService: ProcessingDataService,
    private goToUrlService: GoToUrlService
  ) {
    this.processingDataService.getData('clothes').subscribe((data: IDataProduct[]) => {
      this.itemRezerv = data;
      this.items = this.itemRezerv;

      console.log(this.items);
    });
  };

  public addProduct() {
    this.isAdd = !this.isAdd
    this.add = this.isAdd? 'Back' : 'Add';
  }


  public goToUrl(value: string) {
    this.goToUrlService.goToUrl(value);
  }
}
