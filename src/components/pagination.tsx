// components/Pagination.tsx

import Link from 'next/link';
import { Route } from 'next/types';

import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: Route | URL;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  // Helper function to generate page numbers array
  const generatePagesArray = () => {
    const pages = [];
    pages.push(currentPage);

    let before = currentPage - 1;
    let after = currentPage + 1;

    for (let i = 0; i < 1 && (before > 0 || after <= totalPages); i++) {
      if (before > 0) pages.unshift(before--);
      if (after <= totalPages) pages.push(after++);
    }

    return pages;
  };

  const pagesToShow = generatePagesArray();

  return (
    <div className='flex items-center justify-center gap-2'>
      {/* Previous Page Arrow */}
      {currentPage > 1 && (
        /* @ts-ignore */
        <Link href={`${basePath}?page=${currentPage - 1}`}>
          <Button size='sm' variant='outline'>
            ←
          </Button>
        </Link>
      )}

      {currentPage > 2 && (
        <>
          {/* @ts-ignore */}
          <Link href={`${basePath}?page=1`}>
            <Button size='sm' variant='outline'>
              1
            </Button>
          </Link>

          {currentPage > 3 && (
            <div className='text-muted-foreground flex items-center justify-center gap-2'>
              ...
            </div>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pagesToShow.map((page, index) => (
        <Link
          key={index}
          /* @ts-ignore */
          href={`${basePath}?page=${page}`}
        >
          <Button
            variant={page === currentPage ? 'secondary' : 'outline'}
            size='sm'
            disabled={page === currentPage}
          >
            {page}
          </Button>
        </Link>
      ))}

      {currentPage < totalPages - 1 && (
        <>
          {currentPage < totalPages - 2 && (
            <div className='text-muted-foreground flex items-center justify-center gap-2'>
              ...
            </div>
          )}

          {/* @ts-ignore */}
          <Link href={`${basePath}?page=${totalPages}`}>
            <Button size='sm' variant='outline' className=''>
              {totalPages}
            </Button>
          </Link>

          {/* {leftPage > 2 && (
            <Button size='sm' variant='outline' disabled>
              ...
            </Button>
          )} */}
        </>
      )}

      {/* Next Page Arrow */}
      {currentPage < totalPages && (
        /* @ts-ignore */
        <Link href={`${basePath}?page=${currentPage + 1}`}>
          <Button size='sm' variant='outline'>
            →
          </Button>
        </Link>
      )}
    </div>
  );
}
