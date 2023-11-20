import { AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDataProduct } from 'src/app/service/interface';
import { ReceivingDataService } from 'src/app/service/receiving-data/receiving-data.service';

export enum Type{
  Shorts = 'shorts',
  Sneakers = 'sneakers',
  Tshirt = 'tshirt'
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit, AfterViewChecked{

  public item: IDataProduct = {
    brand: {
      image: '',
      title: ''
    },
    color: [],
    id: 0,
    image: [],
    price: 0,
    quantity: {
      female: 0,
      male: 0
    },
    rating: 0,
    sale: 0,
      size: {
        '44': false,
        '46': false,
        '48': false,
        '50-52': false,
        '54': false,
        '56-58': false
    },
    title:'',
    type: ''
  };
  public types: string[] = Object.values(Type);
  public typeOption: Type = Type.Shorts;

  constructor(
    private receivingDataService: ReceivingDataService
  ){}
  ngOnInit() {
  }
  ngAfterViewChecked(): void {
    this.item.type = this.typeOption;
  }

  public sendData() {
    console.log('Yees', this.item);
    this.receivingDataService.sendData(this.typeOption, this.item);
  }

  public onOptionChangeRaiting(value: number) {
    console.log(value);
    this.item.rating = value;
  }

  public onOptionChangeType(event: any) {
    this.typeOption = event.target.value as Type;
  }
}
