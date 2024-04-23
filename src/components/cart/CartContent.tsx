import React, { useEffect, useState } from 'react';
import ButtonClose from '../ui/shared/ButtonClose';
import { useLocalStorage } from '@uidotdev/usehooks';
import { TamponPack } from '@/types/tampons';
import { Button } from '../ui/button';
import Image from 'next/image';

interface CartContentProps {
  onClose?: () => void;
}

const CartContent: React.FC<CartContentProps> = ({ onClose }) => {
  const [cartItems, setCartItems] = useLocalStorage<TamponPack[]>(
    'cartItems',
    []
  );

  const getCartItemCountById = (id: string) => {
    return cartItems.filter((item) => item.id === id).length;
  };

  const uniqueCartItems = cartItems.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t.id === item.id &&
          t.tampons.length === item.tampons.length &&
          t.tampons.every(
            (tampon, i) =>
              tampon.amount === item.tampons[i].amount &&
              tampon.size === item.tampons[i].size &&
              tampon.coating === item.tampons[i].coating
          )
      )
  );

  const removeItemFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 bg-background divide-y-2 divide-neutral-100 '>
      <div className='py-6 px-5 flex flex-col justify-between mt-6'>
        <span className='absolute right-2 top-2 p-1'>
          <ButtonClose onClick={onClose} />
        </span>
        <h1 className='text-typography text-center mb-6 text-2xl font-poppins border-b p-4 w-full border-primary'>
          Your basket
        </h1>
        {cartItems.length === 0 ? (
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <h2 className='text-typography text-lg font-poppins opacity-50'>
              Your basket is currently empty.
            </h2>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {uniqueCartItems.map((item, index) => (
              <div key={index} className='flex flex-col gap-4 p-2'>
                <div className='flex flex-row items-center justify-between'>
                  <h2 className='text-typography text-lg font-poppins'>
                    Tampon Pack
                  </h2>
                  <div className='flex flex-row gap-1'>
                    <h2 className='text-typography text-lg font-poppins'>
                      {item.price}
                    </h2>
                    <h2 className='text-typography text-lg font-poppins'>
                      {item.currency}
                    </h2>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-between '>
                  <div>
                    {item.tampons.map((tampon, i) => (
                      <div
                        key={i}
                        className='flex flex-row gap-1 items-center justify-between border-l-4 border-primary p-2'
                      >
                        <h2 className='text-typography text-lg font-poppins'>
                          {tampon.amount}
                        </h2>
                        <h2 className='text-typography text-lg font-poppins'>
                          {tampon.size}
                        </h2>
                        <h2 className='text-typography text-lg font-poppins'>
                          coating - {tampon.coating}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={item.productImage}
                    alt='tampons'
                    width={64}
                    height={64}
                  />
                  <div className='flex flex-row items-center justify-center'>
                    <span className='font-poppins'>
                      {getCartItemCountById(item.id)}
                    </span>
                    <ButtonClose onClick={() => removeItemFromCart(item.id)} />
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant={'secondary'}
              className='font-poppins mt-4 text-white'
              onClick={() => setCartItems([])}
            >
              Clear Basket
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContent;
