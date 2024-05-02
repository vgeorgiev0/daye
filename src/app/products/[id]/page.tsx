import { getDataFromApi } from '@/app/actions';
import Product3D from '@/components/product/Product3D';
import { TamponPack } from '@/types/tampons';
import { redirect } from 'next/navigation';
import React from 'react';
interface ProductPageProps {
  params: {
    id: string;
  };
}
export async function generateStaticParams() {
  const products: TamponPack[] | undefined = await getDataFromApi();
  return products?.map((product) => ({
    id: product.id,
  }));
}

const ProductPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
  const products = await getDataFromApi();

  const product = products?.find((product) => product.id === id);

  if (!product) redirect('/404');

  return <Product3D pack={product} />;
};

export default ProductPage;
