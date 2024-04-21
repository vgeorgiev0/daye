import { ncNanoId } from '@/lib/utils';
import { MegaMenuItem, NavItemType } from './NavItem';
import __shopMegaMenu from './shopMegaMenu.json';
import __aboutMegaMenu from './aboutMegaMenu.json';

const shopMegaMenuList: MegaMenuItem[] = [
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5938429/pexels-photo-5938429.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=1',
    title: 'Period Care',
    items: __shopMegaMenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.PeriodicCare,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5871615/pexels-photo-5871615.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Vaginal Health',
    items: __shopMegaMenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.VHealth,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5938417/pexels-photo-5938417.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Accessories',
    items: __shopMegaMenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.Accessories,
    })),
  },
];

const aboutUsMegaMenuList: MegaMenuItem[] = [
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Period Care',
    items: __aboutMegaMenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.AboutUs,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Accessories',
    items: __aboutMegaMenu.map((i) => ({
      id: ncNanoId(),
      href: '/',
      name: i.Discover,
    })),
  },
];

export const NAVIGATION_SCREENS: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/',
    name: 'Shop',
    type: 'megaMenu',
    megaMenu: shopMegaMenuList,
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Period Care',
    type: 'none',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Vaginal Health',
    type: 'none',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Period Pain Clinic',
    type: 'none',
  },

  {
    id: ncNanoId(),
    href: '/',
    name: 'About us',
    type: 'megaMenu',
    megaMenu: aboutUsMegaMenuList,
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Vitals Blog',
    type: 'none',
  },
  {
    id: ncNanoId(),
    href: '/',
    name: 'Help Centre',
    type: 'none',
  },
];
