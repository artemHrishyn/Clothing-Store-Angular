export interface GlobalCategory{
  shorts: IDataProduct[];
  sneakers: IDataProduct[];
  tshirt: IDataProduct[];
}
export interface IDataProduct {
  brand: {
    [key: string]: string
  },
  color: string[],
  gender: string[],
  id: number,
  image: string[],
  price: number,
  quantity: {
     [key: number]: number
  },
  rating: number,
  sale: number,
  size: {
    [key: string]: boolean
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

export interface IProductBuy{
  image: string,
  title: string,
  price: number,
  sale: number
  counter: number
}
