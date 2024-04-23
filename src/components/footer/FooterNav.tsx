'use client';

import MenuBar from '@/components/nav/MenuBar';
import { NavItemType } from '@/types/common';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { HomeIcon, UserIcon } from 'lucide-react';
import { useRef } from 'react';
import Cart from '../cart/Cart';
import FooterNavItem from './FooterNavItem';

const LoginIcon = () => {
  return (
    <div className='cursor-pointer'>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <UserIcon />
        </SignInButton>
      </SignedOut>
    </div>
  );
};

const MobileNavItem: NavItemType[] = [
  {
    name: 'Explore',
    link: '/',
    icon: HomeIcon,
  },

  {
    name: 'User',
    icon: LoginIcon,
  },

  {
    name: 'Cart',
    icon: Cart,
  },
  {
    name: 'Menu',
    icon: MenuBar,
  },
];

const FooterNav = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className='block lg:!hidden p-2 bg-background fixed top-auto bottom-0 inset-x-0 z-30 border-t border-neutral-300
      transition-transform duration-300 ease-in-out'
    >
      <div className='w-full max-w-lg flex justify-around mx-auto text-sm text-center '>
        {MobileNavItem.map((item, index) => FooterNavItem({ index, item }))}
      </div>
    </div>
  );
};

export default FooterNav;
