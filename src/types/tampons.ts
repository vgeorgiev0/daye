export interface Tampons {
  price: number;
  currency: string;
  productImage: string;
  tampons: Tampon[];
}

export interface Tampon {
  size: string;
  coating: string;
  amount: number;
}
