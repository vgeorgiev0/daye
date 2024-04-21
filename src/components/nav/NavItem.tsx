'use client';

import { PathName } from '@/types/common';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, Fragment, useEffect, useState } from 'react';

export interface MegaMenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  href: string;
  mobile?: boolean;
  highlight?: boolean;
  isNew?: boolean;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegaMenuItem[];
  type?: 'megaMenu' | 'none';
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

type NavigationItemWithRouterProps = NavigationItemProps;

const NavigationItem: FC<NavigationItemWithRouterProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const locationPathName = usePathname();
  useEffect(() => {
    setMenuCurrentHovers([]);
  }, [locationPathName]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    return (
      <Popover
        as='li'
        className={`flex items-center`}
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        {() => (
          <>
            <div>{renderMainItem(menu)}</div>
            <Transition
              as={Fragment}
              show={isHover}
              enter='transition ease-out duration-150'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel
                static
                className={`will-change-transform absolute top-full transform z-10 w-screen px-4 xl:-left-32 left-0`}
              >
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm'>
                  <div
                    className={`absolute w-full flex flex-row items-center justify-evenly bg-background dark:bg-neutral-900 px-3 py-6 `}
                  >
                    {menu.megaMenu?.map((item) => (
                      <div key={item.id}>
                        <div className='px-2'>
                          <div className='w-32 h-36 rounded-lg overflow-hidden relative flex'>
                            <Image
                              alt='Menu image'
                              src={item.image}
                              width={500}
                              height={500}
                              className='w-full h-full object-cover'
                            />
                          </div>
                        </div>
                        <p className='font-bold text-neutral-900 dark:text-neutral-200 py-1 px-2 my-2'>
                          {item.title}
                        </p>
                        <ul className='grid space-y-1'>
                          {item.items.map(renderMegaMenuNavlink)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id}>
        <Link
          rel='noopener noreferrer'
          className='inline-flex items-center py-1 px-2 rounded hover:text-neutral-700  dark:hover:text-neutral-200 font-normal text-neutral-6000 dark:text-neutral-300'
          href={item.href || ''}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  const renderMainItem = (item: NavItemType) => {
    return (
      <Link
        rel='noopener noreferrer'
        className='inline-flex items-center min-w-max text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-300 py-2 px-2 xl:px-3 rounded-full hover:text-neutral-900  dark:hover:text-neutral-200'
        href={item.href || '/'}
      >
        {item.name}
        {item.type && item.type !== 'none' && (
          <ChevronDownIcon
            className=' h-4 w-4 text-neutral-400'
            aria-hidden='true'
          />
        )}
      </Link>
    );
  };

  switch (menuItem.type) {
    case 'megaMenu':
      return renderMegaMenu(menuItem);
    default:
      return <li className='flex items-center'>{renderMainItem(menuItem)}</li>;
  }
};

export default NavigationItem;
