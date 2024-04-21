'use client';

import MenuBar from '@/components/nav/MenuBar';
import { NavItemType } from '@/types/common';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from 'lucide-react';
import { useRef } from 'react';
import FooterNavItem from './FooterNavItem';

const MobileNavItem: NavItemType[] = [
  {
    name: 'Explore',
    link: '/',
    icon: HomeIcon,
  },

  {
    name: 'Log in',
    link: '/login',
    icon: UserCircleIcon,
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
      className='FooterNav block md:!hidden p-2 bg-background dark:bg-neutral-800 fixed top-auto bottom-0 inset-x-0 z-30 border-t border-neutral-300 dark:border-neutral-700 
      transition-transform duration-300 ease-in-out'
    >
      <div className='w-full max-w-lg flex justify-around mx-auto text-sm text-center '>
        {MobileNavItem.map((item, index) => FooterNavItem({ index, item }))}
      </div>
    </div>
  );
};

export default FooterNav;
