import Link from 'next/link';
import React from 'react';
import { WidgetFooterMenu } from './Footer';

interface FooterMenuItemProps {
  menu: WidgetFooterMenu;
  index: number;
}

const FooterMenuItem: React.FC<FooterMenuItemProps> = ({ index, menu }) => {
  return (
    <div key={index} className='text-sm text-white'>
      <ul className='mt-5 space-y-4'>
        {menu.menus.map((item, index) => (
          <li key={index}>
            <Link
              key={index}
              className='text-neutral-6000 dark:text-neutral-300 hover:text-neutral-200'
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuItem;
