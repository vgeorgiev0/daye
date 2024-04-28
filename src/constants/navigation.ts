import { ncNanoId } from '@/lib/utils';
import { MegaMenuItem, NavItemType } from '@/types/common';

export const aboutMegaMenuItems = [
  {
    AboutUs: 'About Daye',
    Discover: 'Science',
  },
  {
    AboutUs: 'Refer a Friend',
    Discover: 'Sustainability',
  },
  {
    AboutUs: 'Ambassadors',
    Discover: '',
  },
  {
    AboutUs: 'Partner with Daye',
    Discover: '',
  },
  {
    AboutUs: 'Student Discount',
    Discover: '',
  },
  {
    AboutUs: 'Daye For Work',
    Discover: '',
  },
];

export const shopMegaMenuItems = [
  {
    PeriodicCare: 'Organic Tampons',
    VHealth: 'Vaginal Screening',
    Accessories: "Vagina Matter's Book",
  },
  {
    PeriodicCare: 'CBD Tampons',
    VHealth: 'STI Screening',
    Accessories: 'Traveler Case',
  },
  {
    PeriodicCare: 'Menstrual Pads',
    VHealth: 'ProViotics',
    Accessories: 'Candle',
  },
  {
    PeriodicCare: 'Period Pain Clinic',
    VHealth: 'Free consultations',
    Accessories: 'Gift Card',
  },
  {
    PeriodicCare: 'Endometroisis',
    VHealth: '',
    Accessories: '',
  },
  {
    PeriodicCare: 'CBD Balm',
    VHealth: '',
    Accessories: '',
  },
];

const shopMegaMenuList: MegaMenuItem[] = [
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5938429/pexels-photo-5938429.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=1',
    title: 'Period Care',
    items: shopMegaMenuItems.map((i) => ({
      id: ncNanoId(),
      href: '/products',
      name: i.PeriodicCare,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5871615/pexels-photo-5871615.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Vaginal Health',
    items: shopMegaMenuItems.map((i) => ({
      id: ncNanoId(),
      href: '/products',
      name: i.VHealth,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5938417/pexels-photo-5938417.jpeg?auto=compress&cs=tinysrgb&w=500',
    title: 'Accessories',
    items: shopMegaMenuItems.map((i) => ({
      id: ncNanoId(),
      href: '/products',
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
    items: aboutMegaMenuItems.map((i) => ({
      id: ncNanoId(),
      href: '/products',
      name: i.AboutUs,
    })),
  },
  {
    id: ncNanoId(),
    image:
      'https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Accessories',
    items: aboutMegaMenuItems.map((i) => ({
      id: ncNanoId(),
      href: '/products',
      name: i.Discover,
    })),
  },
];

export const NAVIGATION_SCREENS: NavItemType[] = [
  {
    id: ncNanoId(),
    href: '/products',
    name: 'Shop',
    type: 'megaMenu',
    megaMenu: shopMegaMenuList,
  },
  {
    id: ncNanoId(),
    href: '/products',
    name: 'Period Care',
    type: 'none',
  },
  {
    id: ncNanoId(),
    href: '/products',
    name: 'Vaginal Health',
    type: 'none',
  },
  {
    id: ncNanoId(),
    href: '/products',
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
