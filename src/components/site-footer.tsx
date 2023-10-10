import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { LogoBoostSEO } from '@/components/logo';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <Link
          className='flex flex-col items-center gap-4 px-8 transition-opacity hover:opacity-75 md:flex-row md:gap-2 md:px-0'
          href='https://www.boostseo.ai/'
        >
          <LogoBoostSEO />

          <p className='text-center text-sm leading-loose md:text-left'>
            Built by Boost SEO.
          </p>
        </Link>
        <ModeToggle />
      </div>
    </footer>
  );
}
