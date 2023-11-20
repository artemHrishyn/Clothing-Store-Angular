import { Component, OnInit } from '@angular/core';
import { IDataProduct } from 'src/app/service/interface';
import { ProcessingDataService } from 'src/app/service/processing-data/processing-data.service';

@Component({
  selector: 'app-all-product-admin',
  templateUrl: './all-product-admin.component.html',
  styleUrls: ['./all-product-admin.component.scss']
})
export class AllProductAdminComponent implements OnInit {

  public items: IDataProduct[] = [];
  public itemRezerv: IDataProduct[] = [];

  constructor(private processingDataService: ProcessingDataService) {}

  ngOnInit(): void {
    this.processingDataService.getData('clothes').subscribe((data: IDataProduct[]) => {
      this.itemRezerv = data;
      this.items = this.itemRezerv;
    });
  }

  public show(value: string) {
    this.items = [];
    if (value) {
      this.items = this.itemRezerv.filter(elem => elem.brand.title.startsWith(value));
    } else {
      this.items = this.itemRezerv;
    }
  }
}
