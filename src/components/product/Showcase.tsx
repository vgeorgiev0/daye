'use client';
import { TamponPack } from '@/types/tampons';
import React from 'react';
import ProductList from './ProductList';
import Title from '../ui/title';

interface ShowcaseProps {
  products: TamponPack[];
}

const Showcase: React.FC<ShowcaseProps> = ({ products }) => {
  return (
    <div className='flex-col my-16 items-center justify-center flex w-full'>
      <Title text='Latest Tampon Packs' />
      <ProductList products={products.slice(0, 3)} />
    </div>
  );
};

export default Showcase;
