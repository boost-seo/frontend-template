import Image from 'next/image';
import Link from 'next/link';

import { formatDateBasic } from '@/lib/times';
import { truncateText } from '@/lib/utils';

import { Badge } from '@/components/ui/badge';

import { BasicBlogView } from '@/packages/apigen';

interface BlogPreviewCardProps {
  blog: BasicBlogView;
  className?: string;
}

export const BlogPreviewCard = ({ blog }: BlogPreviewCardProps) => {
  return (
    <Link
      key={blog.id}
      href={`/blogs/${blog.slug}`}
      className='group relative flex h-full flex-col space-y-2 rounded-lg transition'
    >
      {blog.thumbnail && blog.thumbnail.thumbnailUrl && (
        <Image
          src={blog.thumbnail.thumbnailUrl}
          alt={blog.thumbnail.alt}
          width={blog.thumbnail.width}
          height={blog.thumbnail.height}
          className='bg-muted aspect-video max-h-[22rem] rounded-lg border object-cover shadow-sm transition-shadow duration-1000 group-hover:shadow-md'
        />
      )}
      <div className='space-y-2'>
        <div className='grid grid-flow-col items-end justify-between'>
          {blog.date && (
            <p className='text-muted-foreground group-hover:text-primary text-sm transition'>
              {formatDateBasic(blog.date)}
            </p>
          )}
          {blog?.tags &&
            blog.tags.map((tag) => (
              <div
                key={tag.id}
                // href={`//categories/${tag.id}`}
              >
                <Badge variant='secondary' className='capitalize'>
                  {tag.name}
                </Badge>
              </div>
            ))}
        </div>
        <h2 className='text-2xl font-semibold'>{blog.title}</h2>
        {blog.description && (
          <p className='text-muted-foreground group-hover:text-primary transition'>
            {truncateText(blog.description, 150)}
          </p>
        )}
      </div>
    </Link>
  );
};
