'use client';
import { NavItemType } from '@/types/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface FooterNavItemProps {
  item: NavItemType;
  index: number;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ index, item }) => {
  const pathname = usePathname();
  const isActive = pathname === item.link;

  return item.link ? (
    <Link
      key={index}
      href={item.link}
      className={`flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 ${
        isActive ? 'text-neutral-900 dark:text-neutral-100' : ''
      }`}
    >
      <item.icon className={`w-6 h-6 ${isActive ? 'text-secondary' : ''}`} />
      <span
        className={`text-[11px] leading-none mt-1 ${
          isActive ? 'text-secondary' : ''
        }`}
      >
        {item.name}
      </span>
    </Link>
  ) : (
    <div
      key={index}
      className={`flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90 ${
        isActive ? 'text-neutral-900 dark:text-neutral-100' : ''
      }`}
    >
      <item.icon iconClassName='w-6 h-6' className={``} />
      <span className='text-[11px] leading-none mt-1'>{item.name}</span>
    </div>
  );
};

export default FooterNavItem;
