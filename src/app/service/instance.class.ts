import {
  IDataProduct,
  IProductBuy,
  IProductBuyNew,
  IProductDetails
} from "./interface";

export class ShablonDetailsProduct implements IProductDetails{
  color: string[] = [];
  image: string[] = [];
  price: number = 0;
  rating: number = 0;
  sale: number = 0;
  size: {
    [key: string]: boolean;
  } = {};
  title: string = "";
  type: string = "";
  constructor(
    color: string[],
    image: string[],
    price: number,
    rating: number,
    sale: number,
    size: {
      [key: string]: boolean;
    },
    title: string,
    type: string
    )
  {
    this.color = color;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.sale = sale;
    this.size = size;
    this.title = title;
    this.type = type;
  }
}
export class AllProductData implements IDataProduct{
  brand: {
    image: string,
    title: string
  };
  color: string[];
  gender: string[];
  id: number;
  image: string[];
  price: number;
  quantity: {
    female: number,
    male: number
  };
  rating: number;
  sale: number;
  size: {
        '44': boolean,
        '46': boolean,
        '48': boolean,
        '50-52': boolean,
        '54': boolean,
        '56-58': boolean
   };
  title: string;
  type: string;
  constructor(
    brand: {
    image: string,
    title: string
  },
    color: string[],
    gender: string[],
    id: number,
    image: string[],
    price: number,
    quantity: {
    female: number,
    male: number
  },
    rating: number,
    sale: number,
    size: {
        '44': boolean,
        '46': boolean,
        '48': boolean,
        '50-52': boolean,
        '54': boolean,
        '56-58': boolean
     },
    title: string,
    type: string)
  {
    this.brand = brand;
    this.color = color;
    this.gender = gender;
    this.id = id;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.rating = rating;
    this.sale = sale;
    this.size = size;
    this.title = title;
    this.type = type;
  }
}

export class ProductBuy implements IProductBuy{
  image: string = "";
  title: string = "";
  price: number = 0;
  sale: number = 0;
  counter: number = 1;

  constructor(
    image: string,
    title: string,
    price: number,
    sale: number,
    counter: number,
  ) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.sale = sale;
    this.counter = counter;
  }
}
export class ProductBuyNew implements IProductBuyNew{
  image: string = "";
  title: string = "";
  price: number = 0;
  counter: number = 1;

  constructor(
    image: string,
    title: string,
    price: number,
    counter: number,
  ) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.counter = counter;
  }
}
