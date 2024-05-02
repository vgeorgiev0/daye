import { getDataFromApi } from '@/app/actions';
import Product3D from '@/components/product/Product3D';
import { TamponPack } from '@/types/tampons';
import { Metadata, ResolvingMetadata } from 'next';
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

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const products = await getDataFromApi();

  const product = products?.find((product) => product.id === id);
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${product?.tampons.reduce(
      (acc, tampon) => acc + tampon.amount,
      0
    )} tampons in a pack`,
    openGraph: {
      images: [product?.productImage || ''],
    },
    description: `A pack of ${
      product?.tampons.length
    } tampons. ${product?.tampons
      .map(
        (tampon) =>
          `${tampon.amount} ${tampon.size} tampons ${
            tampon.coating !== 'none'
              ? `with ${tampon.coating} coating`
              : 'without coating'
          }`
      )
      .join(' ')}`,
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params: { id } }) => {
  const products = await getDataFromApi();

  const product = products?.find((product) => product.id === id);

  if (!product) redirect('/404');

  return <Product3D pack={product} />;
};

export default ProductPage;
