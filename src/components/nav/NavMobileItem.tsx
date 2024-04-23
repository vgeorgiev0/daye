import React from 'react';
import { NavItemType } from './NavItem';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import NavMobileMenuChild from './NavMobileMenuChild';

interface NavMobileItemProps {
  item: NavItemType;
  onClose?: () => void;
}

const NavMobileItem: React.FC<NavMobileItemProps> = ({ item, onClose }) => {
  return (
    <Disclosure
      key={item.id}
      as='li'
      className={` ${
        item.highlight
          ? 'text-primary-6000 dark:text-primary-6000 animate-pulse'
          : 'text-neutral-900 dark:text-white'
      }`}
    >
      <Link
        className='flex w-full px-4 font-medium font-poppins uppercase tracking-wide text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg'
        href={{
          pathname: item.href || undefined,
        }}
        onClick={onClose}
      >
        <span className={`py-2.5 pr-3 ${!item.children ? 'block w-full' : ''}`}>
          {item.name}
        </span>
        {item.children && (
          <span className='flex-1 flex' onClick={(e) => e.preventDefault()}>
            <Disclosure.Button
              as='span'
              className='py-2.5 flex items-center justify-end flex-1 '
            >
              <ChevronDownIcon
                className='ml-2 h-4 w-4 text-neutral-500'
                aria-hidden='true'
              />
            </Disclosure.Button>
          </span>
        )}
      </Link>
      {item.children && (
        <Disclosure.Panel>
          <NavMobileMenuChild item={item} />
        </Disclosure.Panel>
      )}
    </Disclosure>
  );
};

export default NavMobileItem;
