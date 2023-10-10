import { Route } from 'next';

export type NavItem = {
  title: string;
  href: Route | URL;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  title?: string;
  description?: string;
  url: string;
  logo: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };

  favicon: string;

  main_url: string;
  actionButton: {
    text: string | undefined;
    href: string | undefiend;
  };
};
