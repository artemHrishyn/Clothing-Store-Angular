export interface IGlobalCategory{

  shorts:  { [key: string]: IDataProduct };
  sneakers:  { [key: string]: IDataProduct };
  tshirt:  { [key: string]: IDataProduct };
}

export interface IDataProduct {
  brandImg: string,
  brandTitle: string,
  color: string[],
  image: string[],
  price: number,
  female: number,
  male: number,
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
  type: string
}
export interface IProductDetails{
  color: string[],
  image: string[],
  price: number,
  rating: number,
  sale: number,
  size: {
    [key: string]: boolean
  },
  title: string,
  type: string
}

export interface IProductBuy extends IProductBuyNew{
  image: string,
  title: string,
  price: number,
  sale: number
  counter: number
}

export interface IProductBuyNew {
  image: string,
  title: string,
  price: number,
  counter: number
}

export interface IReviews {
  date: string,
  image: string,
  surname: string,
  name: string,
  rating: number,
  text: string
}
