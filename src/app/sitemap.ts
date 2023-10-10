import { MetadataRoute } from 'next';

import { fetchAuthors, fetchTags, listBlogs } from '@/lib/api/blogs';

import { siteConfig } from '@/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const authors = (await fetchAuthors()) || [];
  const blogs = (await listBlogs()) || [];
  const tags = (await fetchTags()) || [];

  const authorResponse: MetadataRoute.Sitemap = authors?.map((author) => ({
    url: `${siteConfig.url}/author/${author.slug}`,
    lastModified: author.lastChanged,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  const blogResponse: MetadataRoute.Sitemap = blogs?.map((blog) => ({
    url: `${siteConfig.url}/blogs/${blog.slug}`,
    lastModified: blog.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const tagResponse: MetadataRoute.Sitemap = tags
    ?.filter((tag) => tag.blogCount > 0)
    .map((tag) => ({
      url: `${siteConfig.url}/category/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

  const importantPages: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // TODO: cleanup
    // {
    //   url: `${siteConfig.url}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteConfig.url}/blogs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteConfig.url}/contact`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteConfig.url}/faq`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteConfig.url}/privacy`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteConfig.url}/terms`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];

  return [
    ...importantPages,
    ...authorResponse,
    ...blogResponse,
    ...tagResponse,
  ];
}
