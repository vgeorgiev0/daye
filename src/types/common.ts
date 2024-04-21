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
  icon: any;
}