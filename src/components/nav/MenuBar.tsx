'use client';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SideMenuContainer from '../shared/SideMenuContainer';
import NavMobile from './NavMobile';
import { NAVIGATION_SCREENS } from '@/constants/navigation';

export interface MenuBarProps {
  className?: string;
  iconClassName?: string;
}
const MenuBar: React.FC<MenuBarProps> = ({
  className = 'p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300',
  iconClassName = 'h-8 w-8',
}) => {
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
        className={`focus:outline-none flex items-center justify-center ${className}`}
      >
        <Bars3Icon className={iconClassName} />
      </button>

      <SideMenuContainer
        handleCloseMenu={handleCloseMenu}
        isVisible={isVisible}
      >
        <NavMobile data={NAVIGATION_SCREENS} onClickClose={handleCloseMenu} />
      </SideMenuContainer>
    </>
  );
};

export default MenuBar;
