import { ShieldMinus } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface NotFoundPageProps {
  // className?: string;
  // children?: React.ReactNode;
  // props?: React.HTMLAttributes<HTMLDivElement>;
}

const NotFoundPage = () => {
  return (
    <div
      className={cn(
        // 'animate-in fade-in-50 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center',
        'grid h-full items-center pt-36'
      )}
    >
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        {/* Components */}
        <div className='bg-muted flex h-20 w-20 items-center justify-center rounded-full'>
          <ShieldMinus />
        </div>

        {/* Title */}
        <h2 className={cn('mt-6 text-xl font-semibold')}>Page Not Found</h2>

        {/* Content */}
        <p
          className={cn(
            'text-muted-foreground mb-8 mt-2 text-center text-sm font-normal leading-6'
          )}
        >
          The page you are looking for does not exist.
        </p>

        {/* Buttons */}
        <div className='flex flex-col'>
          <Link className={cn()} href='/'>
            <Button size='sm'>Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
