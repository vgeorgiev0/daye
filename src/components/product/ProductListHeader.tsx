'use client';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ArrowDown } from 'lucide-react';
import { TamponPack } from '@/types/tampons';
import { ProductCategories } from '@/app/products/page';

interface ProductListHeaderProps {
  productCategories: ProductCategories[];
  products?: TamponPack[];
  coatedCount?: number;
  nonCoatedCount?: number;
  selectedCategory?: ProductCategories;
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({
  productCategories,
  products,
  coatedCount,
  nonCoatedCount,
  selectedCategory = ProductCategories.ALL,
}) => {
  return (
    <>
      <div className='w-full lg:flex items-center justify-center bg-background h-10 hidden '>
        <ul className='flex flex-row gap-6 text-typography font-poppins text-sm '>
          {productCategories.map((productCategory, index) => (
            <li
              onClick={() => {
                window.location.href = `products/?category=${productCategory}`;
              }}
              className='cursor-pointer relative hover:opacity-80'
              key={index}
            >
              {productCategory}
              <span className='absolute -top-1 -right-3 text-xs text-slate-400'>
                {productCategory === ProductCategories.ALL
                  ? products?.length
                  : productCategory === ProductCategories.COATED
                  ? coatedCount
                  : nonCoatedCount}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex w-full items-end justify-between bg-background p-3 text-typography mt-6 lg:hidden border-b border-primary'>
        <Popover>
          <PopoverTrigger className='flex w-full items-center justify-between'>
            <p className='text-sm font-poppins '>{selectedCategory}</p>
            <p className='text-sm font-poppins flex flex-row items-center justify-center gap-2'>
              Categories
              <span>
                <ArrowDown width={16} />
              </span>
            </p>
          </PopoverTrigger>
          <PopoverContent className='w-screen bg-background'>
            <ul className='flex flex-col w-full p-2 select-none'>
              {productCategories.map((productCategory, index) => (
                <li
                  onClick={() => {
                    window.location.href = `products/?category=${productCategory}`;
                  }}
                  key={index}
                  className='mb-3 cursor-pointer font-poppins text-sm text-typography hover:opacity-60'
                >
                  {productCategory}
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default ProductListHeader;
