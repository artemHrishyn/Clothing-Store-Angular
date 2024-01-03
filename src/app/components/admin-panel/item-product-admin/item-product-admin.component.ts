import { Component, OnInit, Input } from '@angular/core';
import { IDataProduct } from 'src/app/service/interface';

@Component({
  selector: 'app-item-product-admin',
  templateUrl: './item-product-admin.component.html',
  styleUrls: ['./item-product-admin.component.scss']
})
export class ItemProductAdminComponent implements OnInit {
  @Input() item: IDataProduct = {} as IDataProduct;
  public isSale: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this.isSale = this.item.sale === 0 ? this.isSale : !this.isSale;
  }
}
