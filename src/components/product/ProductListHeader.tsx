import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ArrowDown } from 'lucide-react';

interface ProductListHeaderProps {
  productList: string[];
}

const ProductListHeader: React.FC<ProductListHeaderProps> = ({
  productList,
}) => {
  return (
    <>
      <div className='w-full lg:flex items-center justify-center bg-background h-10 hidden '>
        <ul className='flex flex-row gap-6 text-typography font-poppins text-sm '>
          {productList.map((product, index) => (
            <li
              className='cursor-pointer relative hover:opacity-80'
              key={index}
            >
              {product}
              <span className='absolute -top-1 -right-3 text-xs text-slate-400'>
                {Math.floor(Math.random() * (9 - 2 + 1)) + 2}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex w-full items-end justify-between bg-background p-3 text-typography mt-6 lg:hidden border-b border-primary'>
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
          <PopoverContent className='w-screen bg-background'>
            <ul className='flex flex-col w-full p-2 select-none'>
              {productList.map((product, index) => (
                <li key={index} className='mb-3'>
                  {product}
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
