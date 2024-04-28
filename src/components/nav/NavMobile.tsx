'use client';

import React from 'react';

import logo from '@/assets/logo.svg';
import ButtonClose from '@/components/ui/shared/ButtonClose';

import Image from 'next/image';
import NavMobileItem from './NavMobileItem';
import { NavItemType } from '@/types/common';

export interface NavMobileProps {
  data: NavItemType[];
  onClickClose: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ data, onClickClose }) => {
  return (
    <div className='overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-background  divide-y-2 divide-neutral-100 dark:divide-neutral-800'>
      <div className='py-6 px-5 flex flex-row justify-between mt-6'>
        <Image
          src={logo}
          alt='logo'
          width={60}
          height={60}
          className='bg-secondary rounded-full p-2'
        />
        <span className='absolute right-2 top-2 p-1'>
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className='flex flex-col py-6 px-2 space-y-1'>
        {data.map((item) => {
          return (
            <NavMobileItem key={item.id} item={item} onClose={onClickClose} />
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
