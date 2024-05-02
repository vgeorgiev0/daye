import { NextRouter } from 'next/router';

export type Route<T = string> = NextRouter;
export type PathName = Route;

export interface CustomLink {
  label: string;
  href: Route<string> | string;
  targetBlank?: boolean;
}

export interface NavItemType {
  name: string;
  link?: string;
  icon?: any;
}

export interface MegaMenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}

export interface NavItemType {
  id: string;
  name: string;
  href?: string;
  mobile?: boolean;
  highlight?: boolean;
  isNew?: boolean;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegaMenuItem[];
  type?: 'megaMenu' | 'none';
}

export interface WhyDayeItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum ProductCategories {
  ALL = 'All Products',
  COATED = 'CBD Tampons',
  NON_COATED = 'Nude Tampons',
}