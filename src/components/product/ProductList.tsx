import { TamponPack } from '@/types/tampons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductListProps {
  products?: TamponPack[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 w-full sm:w-1/2 md:w-3/4 gap-10 px-4 mb-16'>
      {products?.map((product, index) => (
        <div
          key={index}
          className='max-w-sm from-foreground to-primary via-background bg-gradient-to-t border shadow-md border-gray-200 rounded-md hover:shadow-lg transition duration-300 ease-in-out '
        >
          <Link href={`products/${index}`}>
            <Image
              className='rounded-t-lg'
              src={product.productImage}
              width={1024}
              height={1024}
              alt='product'
            />
          </Link>
          <div className='p-5'>
            <p className='mb-3 font-normal text-typography'>
              This subscription contains the following products:
            </p>
            <ul className='ml-2'>
              {product.tampons.map((tampon, index) => (
                <li className='text-sm text-typography' key={index}>
                  {tampon.amount} x {tampon.size} tampons | coating:{' '}
                  {tampon.coating}{' '}
                </li>
              ))}
            </ul>
          </div>
          <h5 className='mb-2 ml-2 text-sm font-light font-domine tracking-tight text-typography/60'>
            {product.price} {product.currency}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
