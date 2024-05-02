import ProductList from '@/components/product/ProductList';
import ProductListHeader from '@/components/product/ProductListHeader';
import React from 'react';
import { getDataFromApi } from '../actions';

export enum ProductCategories {
  ALL = 'All Products',
  COATED = 'CBD Tampons',
  NON_COATED = 'Nude Tampons',
}
const productCategories: ProductCategories[] = [
  ProductCategories.ALL,
  ProductCategories.COATED,
  ProductCategories.NON_COATED,
];

interface ProductsPageProps {
  searchParams: { category: ProductCategories };
}

const ProductsPage: React.FC<ProductsPageProps> = async ({
  searchParams: { category },
}) => {
  const products = await getDataFromApi();

  const coated = products?.filter((product) =>
    product.tampons.map((tampon) => tampon.coating).includes('CBD')
  );
  const nonCoated = products?.filter((product) =>
    product.tampons.map((tampon) => tampon.coating).includes('none')
  );
  const productsByCategory =
    category === ProductCategories.ALL
      ? products
      : category === ProductCategories.COATED
      ? coated
      : nonCoated;

  return (
    <main className='flex flex-col items-center justify-center text-typography font-poppins mt-32'>
      <ProductListHeader
        coatedCount={coated?.length}
        nonCoatedCount={nonCoated?.length}
        products={products}
        productCategories={productCategories}
        selectedCategory={category}
      />
      <ProductList products={productsByCategory} />
    </main>
  );
};

export default ProductsPage;
