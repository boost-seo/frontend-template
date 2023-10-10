import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { getWebsiteDetails } from '@/lib/api/blogs';

import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { siteConfig } from '@/config';

// If loading a variable font, you don't need to specify the font weight
const defaultFont = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-default',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title || siteConfig.name,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  // keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: siteConfig.favicon,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/images/og.jpg`],
  },
  themeColor: 'black',
};

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const websiteDetails = await getWebsiteDetails();

  return (
    <html>
      <body className={`${defaultFont.variable}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex min-h-screen flex-col'>
            <header className='bg-background container z-40'>
              <div className='flex h-20 items-center justify-between py-6'>
                <MainNav
                  items={[
                    {
                      title: 'Home',
                      href: `/`,
                    },
                    {
                      title: 'All Blogs',
                      href: `/blogs`,
                    },
                  ]}
                  websiteDetails={websiteDetails}
                />
              </div>
            </header>
            <main className='container flex-1'>{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
