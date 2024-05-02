import { TamponPack } from '@/types/tampons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../3d/Card';
import { Button } from '../ui/button';

interface ProductListProps {
  products?: TamponPack[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full mb-16 z-20 px-4'>
      {products?.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <CardContainer className='font-poppins'>
            <CardBody className='bg-gradient-to-t from-primary/70 via-background/70 to-foreground/70 relative group/card  border-primary/20 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-2 shadow-lg hover:shadow-2xl transition-all shadow-primary hover:shadow-background'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-typography '
              >
                Tampon subscription
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='text-typography text-sm max-w-sm mt-2 '
              >
                This tampon subscription includes a variety of tampons to suit
                your needs.
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={product.productImage}
                  height='1000'
                  width='1000'
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>
              <CardItem
                as='div'
                translateZ='60'
                className={
                  'text-typography/70 flex flex-col text-sm max-w-sm mt-6 h-10'
                }
              >
                {product.tampons.map((tampon, index) => (
                  <span key={index}>
                    {tampon.amount} {tampon.size} tampons{' '}
                    {tampon.coating !== 'none'
                      ? `with ${tampon.coating} coating`
                      : 'without coating'}
                  </span>
                ))}
              </CardItem>
              <CardItem
                as='div'
                translateZ='60'
                className='text-typography flex flex-row items-center gap-2 w-full text-sm max-w-sm mt-6 '
              >
                <span className='font-domine'>
                  {product.price}
                  {product.currency}
                </span>
                <span className='text-xs text-typography/70'>per month*</span>
              </CardItem>
              <CardItem
                as='div'
                translateZ='60'
                className='text-typography flex items-center justify-end w-full text-sm max-w-sm mt-6 '
              >
                <Button variant='link' className='uppercase text-typography'>
                  Details
                </Button>
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
