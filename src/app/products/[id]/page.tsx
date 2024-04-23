import { getDataFromApi } from '@/app/actions';
import Product3D from '@/components/product/Product3D';
import { redirect } from 'next/navigation';
import React from 'react';
interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
  const products = await getDataFromApi();
  const product = products ? products[+id] : null;
  if (!product) redirect('/404');

  return <Product3D pack={product} />;
};

export default ProductPage;
