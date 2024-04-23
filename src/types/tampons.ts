export interface TamponPack {
  id: string;
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
