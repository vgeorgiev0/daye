import React from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import { NavItemType } from '@/types/common';

interface NavMobileMenuChildProps {
  item: NavItemType;
}

const NavMobileMenuChild: React.FC<NavMobileMenuChildProps> = ({ item }) => {
  return (
    <ul className='pl-6 pb-1 text-base'>
      {item.children?.map((i, index) => (
        <Disclosure key={i.id} as='li'>
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
              <span className='flex-1 flex' onClick={(e) => e.preventDefault()}>
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
            <Disclosure.Panel>
              <NavMobileMenuChild item={i} />
            </Disclosure.Panel>
          )}
        </Disclosure>
      ))}
    </ul>
  );
};

export default NavMobileMenuChild;
