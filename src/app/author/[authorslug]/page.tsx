import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { fetchAuthor } from '@/lib/api/blogs';
import { cn } from '@/lib/utils';

import { AuthorSocialIcons } from '@/components/blogs/author-social-icons';
import { BlogPreviewCard } from '@/components/blogs/blog-preview-card';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';

import { siteConfig } from '@/config';

interface BlogPageProps {
  params: {
    authorslug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const author = await fetchAuthor(params.authorslug);

  // if (!blog || !blog.content) { }
  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  // TODO: make this stuff dynamic
  return {
    title: author.name + ' blogs',
    description: author.bio,
    openGraph: {
      title: author.name + ' blogs',
      description: author.bio,
      url: siteConfig.url,
      siteName: 'BoostSEO',
      images: author.imageUrl
        ? [
            {
              url: author.imageUrl,
              width: 250,
              height: 250,
              alt: author.name,
            },
          ]
        : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`/images/og.jpg`],
    },
    themeColor: 'black',
  };
}

const AuthorPage = async ({ params }: BlogPageProps) => {
  const author = await fetchAuthor(params.authorslug);

  // if (!blog || !blog.content) { }
  if (!author) {
    return notFound();
  }

  return (
    <>
      {/* CONTENT */}
      <div className='container relative max-w-5xl py-6 lg:py-10'>
        <div className='max-w-3xl'>
          <div className='grid grid-flow-col items-center justify-start gap-4'>
            <div>
              {author.imageUrl && (
                <Image
                  src={author.imageUrl}
                  alt={author.slug + '-avatar'}
                  width={125}
                  height={125}
                  className='h-24 w-24 rounded-full bg-white'
                />
              )}
            </div>

            <div>
              <h1 className='mt-2 inline-block text-4xl font-semibold leading-tight lg:text-5xl'>
                {author.name}
              </h1>
              {author && (
                <div className='mt-4 flex items-center space-x-3'>
                  <div className='grid grid-flow-col gap-x-2'>
                    <AuthorSocialIcons author={author} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className='text-card-foreground mt-4 text-base'>{author.bio}</p>
        </div>

        <div className='my-20' />

        {author.blogs?.length ? (
          <div className='my-6 grid gap-10 sm:grid-cols-2 lg:my-10 lg:grid-cols-3'>
            {author.blogs.map((blog) => (
              <BlogPreviewCard blog={blog} key={blog.id} />
            ))}
          </div>
        ) : (
          <p>Such empty. Many wow.</p>
        )}

        <div className='flex justify-center pt-10'>
          <Link href='/' className={cn(buttonVariants({ variant: 'ghost' }))}>
            <Icons.chevronLeft className='mr-2 h-4 w-4' />
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthorPage;
