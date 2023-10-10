import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: process.env.SITE_CONFIG_NAME || '',
  title: process.env.SITE_CONFIG_TITLE || undefined,
  description: process.env.SITE_CONFIG_DESCRIPTION || undefined,
  url: process.env.SITE_CONFIG_URL || '',
  main_url: process.env.SITE_CONFIG_MAIN_URL || '/',

  logo: {
    url: process.env.SITE_CONFIG_LOGO_URL || '/images/icon.svg',
    alt: `${process.env.SITE_CONFIG_NAME} Logo`,
    width: 30,
    height: 30,
  },

  favicon: process.env.SITE_CONFIG_FAVICON || '/favicon/favicon.ico',

  actionButton: {
    text: process.env.SITE_CONFIG_ACTION_TEXT,
    href: process.env.SITE_CONFIG_ACTION_URL,
  },
};
