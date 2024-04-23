import ProductList from '@/components/product/ProductList';
import ProductListHeader from '@/components/product/ProductListHeader';
import React from 'react';
import { getDataFromApi } from '../actions';

const productList = [
  'All Products',
  'Period Care',
  'CBD Tampons',
  'Nude Tampons',
  'Pads & Liners',
  'Bundles',
  'Vaginal Care',
  'Balms',
  'Accessories',
];

interface ProductsPageProps {}

const ProductsPage: React.FC<ProductsPageProps> = async ({}) => {
  const products = await getDataFromApi();

  return (
    <main className='flex flex-col items-center justify-center text-typography font-poppins mt-32'>
      <ProductListHeader productList={productList} />
      <ProductList products={products} />
    </main>
  );
};

export default ProductsPage;
