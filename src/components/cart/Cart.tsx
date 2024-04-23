'use client';
import { ShoppingBasket } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SideMenuContainer from '../shared/SideMenuContainer';
import CartContent from './CartContent';

const Cart: React.FC = ({}) => {
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
        className={`focus:outline-none flex items-center justify-center `}
      >
        <ShoppingBasket className={''} />
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
