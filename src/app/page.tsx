import Link from 'next/link';

import { fetchLatestBlogs, getWebsiteDetails } from '@/lib/api/blogs';

import { BlogPreviewCard } from '@/components/blogs/blog-preview-card';
import { Button } from '@/components/ui/button';

import { siteConfig } from '@/config';

export default async function BlogPage() {
  const [websiteDetails, blogs] = await Promise.all([
    getWebsiteDetails(),
    fetchLatestBlogs(5),
  ]);

  return (
    <div className='container max-w-4xl py-6 lg:py-6'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='font-heading inline-block text-3xl font-semibold tracking-tight lg:text-4xl'>
            {siteConfig.title || websiteDetails?.name + ' Blogs'}
          </h1>
          <p className='text-muted-foreground text-lg'>
            {siteConfig.description || websiteDetails?.summary}
          </p>
        </div>
      </div>
      {/* <hr className='my-8' /> */}
      {blogs?.length ? (
        <div>
          <div className='my-8 md:mb-16'>
            <BlogPreviewCard blog={blogs[0]} />
          </div>

          <div className='grid gap-10 pb-16 md:grid-cols-2'>
            {blogs.slice(1).map((blog) => (
              <BlogPreviewCard blog={blog} key={blog.id} />
            ))}
          </div>

          <div className='flex justify-center py-6'>
            <Link href='/blogs'>
              <Button className='btn btn-primary' variant='outline'>
                Read More Blogs
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Such empty. Many wow.</p>
      )}
    </div>
  );
}
