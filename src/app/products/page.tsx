import React from 'react';
import { getDataFromApi } from '../actions';
import Image from 'next/image';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowDown } from 'lucide-react';

interface ProductsPageProps {}

const ProductsPage: React.FC<ProductsPageProps> = async ({}) => {
  const products = await getDataFromApi();

  return (
    <main className='flex flex-col items-center font-poppins justify-center w-full mt-32'>
      <div className='flex w-full items-end justify-between bg-foreground p-3 text-typography mt-6'>
        <Popover>
          <PopoverTrigger className='flex w-full items-center justify-between'>
            <p className='text-sm font-poppins '>All Products</p>
            <p className='text-sm font-poppins flex flex-row items-center justify-center gap-2'>
              Categories
              <span>
                <ArrowDown width={16} />
              </span>
            </p>
          </PopoverTrigger>
          <PopoverContent className='w-screen bg-foreground'>
            <ul className='flex flex-col w-full p-2 select-none'>
              <li className='mb-3'>Tampons</li>
              <li className='mb-3'>Pads</li>
              <li className='mb-3'>Menstrual Cups</li>
              <li className=''>Period Underwear</li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-36 w-full sm:w-1/2 md:w-3/4 gap-10 px-4'>
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
    </main>
  );
};

export default ProductsPage;
