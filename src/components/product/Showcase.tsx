'use client';
import { TamponPack } from '@/types/tampons';
import React from 'react';
import ProductList from './ProductList';

interface ShowcaseProps {
  products: TamponPack[];
}

const Showcase: React.FC<ShowcaseProps> = ({ products }) => {
  return (
    <div className='flex-col my-16 items-center justify-center flex w-full'>
      <div className='bg-background/40 rounded-2xl shadow-xl flex items-center justify-center p-6 w-4/5 md:w-1/2 '>
        <h1 className='font-poppins text-xl lg:text-3xl font-bold text-typography select-none'>
          Latest Tampon Packs
        </h1>
      </div>
      <ProductList products={products.slice(0, 3)} />
    </div>
  );
};

export default Showcase;
