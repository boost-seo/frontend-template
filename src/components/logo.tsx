import Image from 'next/image';

import { classNames } from '@/lib/utils';

import { IIcon } from '@/components/icons';

import { siteConfig } from '@/config';

export const LogoBoostSEO: IIcon = ({ className }) => {
  return (
    <div className='flex flex-shrink-0 items-center gap-2'>
      <Image
        src='/images/icon.svg'
        alt='logo'
        height={20}
        width={20}
        className={classNames(className)}
      />
    </div>
  );
};

export const Logo: IIcon = ({ className }) => {
  return (
    <div className='flex flex-shrink-0 items-center gap-2'>
      <Image
        src={siteConfig.logo.url}
        alt={siteConfig.logo.alt}
        height={siteConfig.logo.height}
        width={siteConfig.logo.width}
        className={classNames(className)}
      />
    </div>
  );
};
