import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { PluggableList } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';

import { ImageSource } from '@/packages/apigen';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  'bs-source'?: ImageSource;
  'bs-source-url'?: string;
}

const components: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className='mt-2 scroll-m-20 text-4xl font-bold tracking-tight'>
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className='mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0'>
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className='mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className='mt-8 scroll-m-20 text-xl font-semibold tracking-tight'>
      {children}
    </h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className='mt-8 scroll-m-20 text-lg font-semibold tracking-tight'>
      {children}
    </h6>
  ),
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a className='font-medium underline underline-offset-4' href={href}>
      {children}
      <HiOutlineExternalLink className='inline' />
    </a>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className='my-6 ml-6 list-disc'>{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className='my-6 ml-6 list-decimal'>{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className='mt-2'>{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className='[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic'>
      {children}
    </blockquote>
  ),
  img: ({ children, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const imageProps = props as CustomImageProps;

    return (
      <div className='my-2 grid justify-center gap-2 md:my-4'>
        <Image
          className='mx-auto max-h-[36rem] rounded-md object-contain '
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
        >
          {children}
        </Image>
        {imageProps['bs-source'] &&
          imageProps['bs-source-url'] &&
          imageProps['bs-source'] !== 'stablediffusion' && (
            <a
              className='text-muted-foreground hover:text-card-foreground mx-auto flex items-center gap-0.5 text-center text-sm'
              href={imageProps['bs-source-url']}
            >
              source: {imageProps['bs-source']}
              <ExternalLink className='inline h-3 w-3' />
            </a>
          )}
      </div>
    );
  },
  hr: () => <hr className='my-4 md:my-8' />,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className='w-full'>{children}</table>
    </div>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className='even:bg-muted m-0 border-t p-0'>{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
      {children}
    </td>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className='mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4'>
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className='relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm'>
      {children}
    </code>
  ),
  br: () => <br />,
  em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong>{children}</strong>
  ),
};

interface MarkdownProps {
  markdown: string;
}

export const RenderMarkdown: React.FC<MarkdownProps> = ({ markdown }) => {
  return (
    <div className='text-lg text-gray-800 dark:text-gray-100'>
      <ReactMarkdown
        className='grid w-full'
        components={components}
        rehypePlugins={[rehypeRaw] as PluggableList}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
