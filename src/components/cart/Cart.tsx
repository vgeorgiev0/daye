'use client';
import { ShoppingBasket } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SideMenuContainer from '../shared/SideMenuContainer';
import CartContent from './CartContent';
import { useLocalStorage } from '@uidotdev/usehooks';
import { TamponPack } from '@/types/tampons';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useLocalStorage<TamponPack[]>(
    'cartItems',
    []
  );
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  const handleOpenMenu = () => setIsVisible(true);
  const handleCloseMenu = () => setIsVisible(false);

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className={`focus:outline-none flex items-center justify-center relative `}
      >
        <ShoppingBasket className={''} />
        {!!cartItems.length && (
          <span className='font-poppins w-2 h-2 flex items-center justify-center bg-primary p-2.5 rounded-full absolute left-6 -top-1 animate-bounce'>
            {cartItems.length}
          </span>
        )}
      </button>

      <SideMenuContainer
        handleCloseMenu={handleCloseMenu}
        isVisible={isVisible}
      >
        <CartContent onClose={handleCloseMenu} />
      </SideMenuContainer>
    </>
  );
};

export default Cart;
