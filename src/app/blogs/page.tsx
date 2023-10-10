import { notFound } from 'next/navigation';

import { fetchLatestBlogsPaginated } from '@/lib/api/blogs';

import { BlogPreviewCard } from '@/components/blogs/blog-preview-card';
import Pagination from '@/components/pagination';

export const metadata = {
  title: 'Blog',
};

interface AllBlogsPageProps {
  searchParams: {
    page: string;
  };
}

export default async function AllBlogsPage({
  searchParams,
}: AllBlogsPageProps) {
  const paginatedBlogs = await fetchLatestBlogsPaginated(
    10,
    parseInt(searchParams.page) || 1
  );

  if (!paginatedBlogs) {
    return notFound();
  }

  const { blogs, numberPages } = paginatedBlogs;

  return (
    <div className='container max-w-4xl py-6 lg:py-6'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='font-heading inline-block text-3xl font-semibold tracking-tight lg:text-4xl'>
            All Blogs
          </h1>
        </div>
      </div>
      <div className='my-8' />
      {blogs?.length ? (
        <div className='grid gap-10 md:grid-cols-2'>
          {blogs.map((blog) => (
            <BlogPreviewCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <p>Such empty. Many wow.</p>
      )}

      {/* Pagination Component */}
      <div className='mt-12 py-10'>
        <Pagination
          currentPage={parseInt(searchParams.page) || 1}
          totalPages={numberPages}
          basePath='/blogs'
        />
      </div>
    </div>
  );
}
