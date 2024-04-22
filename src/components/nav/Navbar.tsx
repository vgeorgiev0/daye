'use client';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { LogIn, SearchIcon, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuBar from './MenuBar';
import NavigationItem from './NavItem';
import { NAVIGATION_SCREENS } from './menuData';

function Navbar() {
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <header className={`fixed left-0 top-0 z-99999 w-full font-poppins`}>
      <div
        className={`relative cursor-pointer flex w-full py-2 h-auto items-center justify-center bg-pink shadow-md transition-all duration-300 ${
          stickyMenu ? '-top-10' : 'top-0'
        }`}
      >
        <h2 className='uppercase text-xs tracking-wide lg:text-sm lg:tracking-wider'>
          our diagnostic tampon is now available at boots! 🔬 💖
        </h2>
      </div>
      <div
        className={`hidden lg:flex py-4 relative transition-all duration-300 shadow-md ${
          stickyMenu ? '-top-10 bg-foreground' : 'top-0 bg-background'
        }`}
      >
        <ul className='hidden lg:flex mx-auto relative'>
          <div className='flex-1 flex flex-row items-center justify-center'>
            {NAVIGATION_SCREENS.slice(0, 4).map((item) => (
              <NavigationItem key={item.id} menuItem={item} />
            ))}
          </div>
          <Link
            href={'/'}
            className='px-10 xl:px-24 flex-1 items-center justify-center flex'
          >
            <svg width='100' height='39' viewBox='0 0 100 39' fill='none'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.66809 26.9321C9.6534 26.7234 9.6459 24.1909 9.6459 23.9526V1.05616C9.92939 0.977959 10.4157 0.899295 10.8218 0.899295C15.849 0.899295 18.281 5.63524 18.281 14.5589C18.281 24.6964 15.484 27.2917 12.3217 27.2917C10.3568 27.2917 9.66809 26.9321 9.66809 26.9321M12.3619 0C9.84828 0 1.34983 0.0981765 0 0.0722603C0 0.0722603 0.158651 3.33968 0.158651 3.99962V22.8259C0.158651 23.5509 0 28.2076 0 28.2076C1.34983 28.1815 9.4837 28.2797 13.1726 28.2797C22.3356 28.2797 28.4979 22.8663 28.4979 13.4532C28.4979 5.04999 21.8084 0 12.3619 0'
                fill='#001D3B'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M72.6884 8.15295C72.6884 8.15295 75.7558 10.1354 74.4664 15.6496L71.757 23.499L67.5894 12.0774L66.1543 8.15295H56.0601L57.0028 10.4987L57.0032 10.4997L64.0469 28.0256H70.0905L69.6317 29.3546C68.7663 31.8999 66.8015 36.6769 64.3411 36.7869C63.5833 36.8206 62.9472 36.2012 62.9226 35.4457C62.9028 34.8438 63.1411 34.2377 63.6139 33.7371C65.2084 32.0483 64.2614 29.2449 61.9433 29.043C61.7883 29.0295 61.6281 29.0225 61.4628 29.0225C58.5865 29.0225 56.8778 30.9328 56.8778 33.2171C56.8778 35.7919 58.8183 38.4614 62.4024 38.4614C65.2719 38.4614 66.697 37.3169 67.8808 35.5451C69.128 33.6787 70.0747 31.1307 70.823 29.0639C70.823 29.0639 76.1581 14.0291 76.1582 14.0289L78.234 8.15295C77.8904 8.16073 72.6884 8.15295 72.6884 8.15295'
                fill='#001D3B'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M44.4047 22.1481C44.4047 23.2224 43.8897 24.2649 42.9357 24.9657C42.6028 25.2103 42.2636 25.3492 41.9768 25.3757C40.1722 25.5427 38.7707 23.8113 38.7707 17.3204C38.7707 10.5773 40.1439 9.18532 41.702 9.18532C43.2593 9.18532 44.6082 10.3581 44.6082 16.2237L44.4047 22.1481ZM44.4047 9.77565C44.3095 9.60795 43.5247 8.09232 40.7889 8.09232C35.5473 8.09232 30.7093 11.8465 30.7093 19.4817C30.7093 24.4087 33.5742 28.2798 37.9694 28.2798C40.9905 28.2798 43.1716 26.3138 44.4047 25.2294C44.4047 25.2294 44.5185 27.1167 45.3682 28.0258H54.0016C53.1661 26.497 52.7282 24.7841 52.7282 23.0435V8.18988H44.4047V9.77565Z'
                fill='#001D3B'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M89.06 9.05848C91.4134 8.05598 92.7024 11.3068 92.8104 14.4076C92.9106 17.2829 91.5869 18.5386 89.5353 19.1595C89.1443 19.278 87.9494 19.6108 87.9494 19.6108C86.4289 14.1432 87.5055 9.72056 89.06 9.05848V9.05848ZM99.4238 22.6543C98.2728 23.7078 97.1126 24.6394 94.8811 25.0585C91.0415 25.7797 89.1292 22.9995 88.1865 20.4219L100 17.1478C98.8065 10.3244 94.529 7.58426 88.8655 7.93276C81.5796 8.38126 78.3916 13.3253 78.9165 19.2836C79.5192 26.1216 85.4524 29.3125 92.5558 27.9455C95.5314 27.3728 97.8924 25.6496 99.4354 23.2064L99.4238 22.6543Z'
                fill='#001D3B'
              ></path>
            </svg>
          </Link>
          <div className='flex-1 flex flex-row items-center justify-center'>
            {NAVIGATION_SCREENS.slice(4).map((item) => (
              <NavigationItem key={item.id} menuItem={item} />
            ))}
            <div className='flex flex-row space-x-2 ml-3 xl:space-x-6 xl:ml-10'>
              <SearchIcon className='cursor-pointer' />
              <SignedIn>
                <ShoppingBasket className='cursor-pointer' />
                <UserButton />
              </SignedIn>

              <SignedOut>
                <SignInButton mode='modal'>
                  <LogIn className='cursor-pointer' />
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </ul>
      </div>
      <div
        className={`flex ${
          stickyMenu ? '-top-6' : 'top-0'
        } lg:hidden relative items-center transition-all justify-end`}
      >
        <MenuBar />
      </div>
    </header>
  );
}

export default Navbar;
