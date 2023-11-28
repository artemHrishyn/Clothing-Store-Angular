import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReturnValuePipe } from 'src/app/pipe/return-value/return-value.pipe';
import { ReceivingDataService } from 'src/app/service/receiving-data/receiving-data.service';
export enum Type{
  Shorts = 'shorts',
  Sneakers = 'sneakers',
  Tshirt = 'tshirt'
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

  public productData: FormGroup;
  public types: string[] = Object.values(Type);
  public color: FormArray;
  public image: FormArray;

  public col: FormControl;

  @Input() show: boolean = true;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private receivingDataService: ReceivingDataService,
    private fb: FormBuilder,
    private returnValuePipe: ReturnValuePipe
  ) {

    this.color = new FormArray(
      [new FormControl("#000")]
    );

    this.image = new FormArray(
      [new FormControl("", Validators.required)]
    );
    this.col = new FormControl("", Validators.required);

    this.productData = new FormGroup({
      brandImg: new FormControl("", Validators.required),
      brandTitle: new FormControl("", Validators.required),
      color: this.color,
      size: this.fb.group(
        {
          '44': [false],
          '46': [false],
          '48': [false],
          '50-52': [false],
          '54': [false],
          '56-58': [false]
        }
      ),
      image: this.image,
      price: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      female: new FormControl("false", Validators.required),
      male: new FormControl("", Validators.required),
      rating: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      type: new FormControl("shorts", Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);

      let formData = { ...form.value }
      this.receivingDataService.sendData(form.value.type, formData);
      form.reset();
      this.close.emit(!this.show);
    }
  }

  public addColor() {
    this.color.push(
      new FormControl("#000"
      )
    )
  }

  public deleteColor() {
    this.color.controls.pop();
  }

  public addImage() {
    this.image.push(
      new FormControl("", Validators.required
      )
    )
  }

  public deleteImage() {
    this.image.controls.pop();
  }
}
