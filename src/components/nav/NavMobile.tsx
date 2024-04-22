'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

import ButtonClose from '@/components/ui/shared/ButtonClose';
import Logo from '@/assets/logo.svg';

import { NavItemType } from './NavItem';
import Image from 'next/image';

export interface NavMobileProps {
  data: NavItemType[];
  onClickClose: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ data, onClickClose }) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <ul className='pl-6 pb-1 text-base'>
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as='li'>
            <Link
              href={{
                pathname: i.href || undefined,
              }}
              className='flex px-4 text-neutral-900 dark:text-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5'
            >
              <span
                className={`py-2.5 pr-3 ${!i.children ? 'block w-full' : ''}`}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className='flex-1 flex'
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as='span'
                    className='py-2.5 flex justify-end flex-1'
                  >
                    <ChevronDownIcon
                      className='ml-2 h-4 w-4 text-neutral-500'
                      aria-hidden='true'
                    />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
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
          onClick={onClickClose}
        >
          <span
            className={`py-2.5 pr-3 ${!item.children ? 'block w-full' : ''}`}
          >
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
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className='overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-background dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800'>
      <div className='py-6 px-5 flex flex-row justify-between mt-6'>
        <Image
          src={Logo}
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
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
