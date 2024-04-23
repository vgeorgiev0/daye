import { Tampon } from '@/types/tampons';
import React from 'react';

interface TamponListProps {
  tampons?: Tampon[];
  totalTampons?: number;
  price?: number;
  currency?: string;
}

const TamponList: React.FC<TamponListProps> = ({
  tampons,
  totalTampons,
  currency,
  price,
}) => {
  return (
    <div>
      <h2 className='text-lg font-medium underline '>
        {totalTampons} tampons in total
      </h2>
      {tampons?.map((tampon, index) => (
        <p className='text-base py-1 ' key={index}>
          {tampon.amount} {tampon.size} tampons{' '}
          {tampon.coating !== 'none'
            ? `with ${tampon.coating} coating`
            : 'without coating'}
        </p>
      ))}
      <p className='text-end font-domine text-xs'>
        {price}
        {currency}
      </p>
    </div>
  );
};

export default TamponList;
