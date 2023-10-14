import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { fetchBlog } from '@/lib/api/blogs';
import { formatDateBasic } from '@/lib/times';
import { cn } from '@/lib/utils';

import { BlogPreviewCard } from '@/components/blogs/blog-preview-card';
import ScrollProgressBar from '@/components/blogs/scrollbar-progress';
import { Icons, SocialIcon } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';

import { siteConfig } from '@/config';
import { RenderMarkdown } from '@/packages/markdown';

interface BlogPageProps {
  params: {
    blogslug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await fetchBlog(params.blogslug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const images = blog.heroImage
    ? [
        {
          url: blog.heroImage.url,
          width: blog.heroImage.width,
          height: blog.heroImage.height,
          alt: blog.heroImage.alt,
        },
      ]
    : [];

  return {
    title: blog.title,
    description: blog.description.slice(0, 200),
    openGraph: {
      title: blog.title,
      description: blog.description.slice(0, 200),
      url: siteConfig.url,
      siteName: 'BoostSEO',
      images: images,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: images,
    },
    themeColor: 'light',
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await fetchBlog(params.blogslug);

  if (!blog) {
    return notFound();
  }

  return (
    <>
      {/* CONTENT */}
      <article className='container relative py-6 lg:py-10'>
        <div className='mx-auto max-w-3xl'>
          <Link
            href='/'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-muted-foreground absolute top-14 hidden h-0 translate-x-[-200px] xl:inline-flex'
            )}
          >
            <Icons.chevronLeft className='mr-2 h-4 w-4' />
            See all posts
          </Link>

          {/* TODO: Share Menu */}
          {/* <div className='sticky top-56 -mb-48 hidden translate-x-[-200px] xl:inline-flex'>
          <ShareMenu />
        </div> */}
          {/* Share Manu */}
          <div>
            <ScrollProgressBar />

            {blog.date && (
              <time
                dateTime={blog.date.toISOString()}
                className='text-muted-foreground block text-sm'
              >
                Published on {formatDateBasic(blog.date)}
              </time>
            )}
            <h1 className='mt-2 inline-block text-4xl font-semibold leading-tight lg:text-5xl'>
              {blog.title}
            </h1>
            <div className='grid items-end justify-between gap-6 md:grid-flow-col'>
              {blog.author && (
                <div className='flex items-center space-x-3 pt-4'>
                  {blog.author.imageUrl && (
                    <Link href={`/author/${blog.author.slug}`}>
                      <Image
                        src={blog.author.imageUrl}
                        alt={blog.author.slug + '-avatar'}
                        width={50}
                        height={50}
                        className='rounded-full bg-white'
                      />
                    </Link>
                  )}
                  <div className='grid items-stretch justify-between gap-y-1'>
                    <Link href={`/author/${blog.author.slug}`}>
                      <div className='text-left leading-tight'>
                        <h3 className='text-lg font-medium'>
                          {blog.author.name}
                        </h3>
                      </div>
                    </Link>
                    <div className='grid grid-flow-col gap-x-1'>
                      {blog.author.linkedinUrl && (
                        <SocialIcon
                          name='linkedin'
                          url={blog.author.linkedinUrl}
                        />
                      )}
                      {blog.author.facebookUrl && (
                        <SocialIcon
                          name='facebook'
                          url={blog.author.facebookUrl}
                        />
                      )}
                      {blog.author.youtubeUrl && (
                        <SocialIcon
                          name='youtube'
                          url={blog.author.youtubeUrl}
                        />
                      )}
                      {blog.author.twitterUrl && (
                        <SocialIcon
                          name='twitter'
                          url={blog.author.twitterUrl}
                        />
                      )}
                      {blog.author.tiktokUrl && (
                        <SocialIcon name='tiktok' url={blog.author.tiktokUrl} />
                      )}
                      {blog.author.githubUrl && (
                        <SocialIcon name='github' url={blog.author.githubUrl} />
                      )}
                      {blog.author.pinterestUrl && (
                        <SocialIcon
                          name='pinterest'
                          url={blog.author.pinterestUrl}
                        />
                      )}
                      {blog.author.websiteUrl && (
                        <SocialIcon
                          name='website'
                          url={blog.author.websiteUrl}
                        />
                      )}
                      {blog.author.mediumUrl && (
                        <SocialIcon name='medium' url={blog.author.mediumUrl} />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {!!blog.tags?.length && (
                <div className='grid grid-flow-col items-center gap-2 pt-4'>
                  {blog.tags.map((tag) => (
                    <Link key={tag.id} href={`/category/${tag.slug}`}>
                      <Badge variant='outline' className='capitalize'>
                        {tag.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {blog.heroImage && (
            <div className='my-8 grid justify-center gap-1'>
              <Image
                src={blog.heroImage.url}
                alt={blog.heroImage.alt}
                width={blog.heroImage.width}
                height={blog.heroImage.height}
                className='bg-muted max-h-[18rem] rounded-md border object-cover transition-colors md:max-h-[24rem] lg:max-h-[36rem]'
                priority
              />

              {blog.heroImage.sourceUrl &&
                blog.heroImage.source &&
                !['stablediffusion'].includes(blog.heroImage.source) && (
                  <a
                    className='text-muted-foreground hover:text-card-foreground mx-auto flex items-center gap-0.5 text-center text-sm'
                    href={blog.heroImage.sourceUrl}
                    target='blank'
                  >
                    source: {blog.heroImage.source}
                    <ExternalLink className='inline h-3 w-3' />
                  </a>
                )}
            </div>
          )}

          <RenderMarkdown markdown={blog.content} />
          <hr className='mt-12' />

          {blog.relatedBlogs?.length > 0 && (
            <div className='mt-10 grid gap-4'>
              <h3 className='text-2xl font-semibold'>Related Blogs</h3>
              <div className='grid gap-10 md:grid-cols-2'>
                {blog.relatedBlogs.map((blog) => (
                  <BlogPreviewCard blog={blog} key={blog.id} />
                ))}
              </div>
            </div>
          )}

          <div className='flex justify-center py-6 lg:py-10'>
            <Link href='/' className={cn(buttonVariants({ variant: 'ghost' }))}>
              <Icons.chevronLeft className='mr-2 h-4 w-4' />
              See all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPage;
