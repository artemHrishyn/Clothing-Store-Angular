import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private routing: Router,
    private processingDataService: ProcessingDataService,
  ) {
    this.processingDataService.getData('clothes').subscribe((data: IDataProduct[]) => {
      this.itemRezerv = data;
      this.items = this.itemRezerv;
    });
  }

  show(value: string) {
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brand.title.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }

  public goToUrl(value: string) {
    this.routing.navigate([value]);
  }
}
