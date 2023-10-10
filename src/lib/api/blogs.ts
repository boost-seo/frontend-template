import { isProd } from '@/config/env';
import { blogApiClient } from '@/packages/api';
import { BasicBlogView } from '@/packages/apigen';

const REVALIDATE_TIME = isProd ? 3600 * 1 : 0; // 1 hours in prod, 0 in dev

export const getWebsiteDetails = async () => {
  try {
    const companyInfo =
      await blogApiClient.api.websiteDetailsApiV1WebsiteDetailsGet({
        next: { revalidate: REVALIDATE_TIME },
      });
    return companyInfo;
  } catch (error) {
    //
  }
};

export const fetchLatestBlogs = async (pageSize: number) => {
  let blogs: BasicBlogView[] = [];
  try {
    const blogsRes = await blogApiClient.api.latestBlogsApiV1LatestBlogsGet(
      {
        pageSize: pageSize,
      },
      { next: { revalidate: REVALIDATE_TIME } }
    );

    blogs = blogsRes;
  } catch (error) {
    //
  }

  return blogs;
};

export const fetchLatestBlogsPaginated = async (
  pageSize: number,
  page: number
) => {
  try {
    const res =
      await blogApiClient.api.latestBlogsPaginatedApiV1LatestBlogsPaginatedGet(
        {
          pageSize: pageSize,
          page: page,
        },
        { next: { revalidate: REVALIDATE_TIME } }
      );

    return res;
  } catch (error) {
    //
  }
};

export const listBlogs = async () => {
  try {
    const blogs = await blogApiClient.api.listBlogsApiV1ListBlogsGet({
      next: { revalidate: REVALIDATE_TIME },
    });
    return blogs;
  } catch (error) {
    //
  }
};

export const fetchBlog = async (blogSlug: string) => {
  try {
    const blog = await blogApiClient.api.blogDetailsApiV1BlogDetailsGet(
      {
        blogSlug,
      },
      { next: { revalidate: REVALIDATE_TIME } }
    );
    return blog;
  } catch (error) {
    return null;
  }
};

export const fetchAuthors = async () => {
  try {
    const authors = await blogApiClient.api.listAuthorsApiV1ListAuthorsGet({
      next: { revalidate: REVALIDATE_TIME },
    });
    return authors;
  } catch (error) {
    return null;
  }
};

export const fetchAuthor = async (authorSlug: string) => {
  try {
    const author = await blogApiClient.api.authorDetailsApiV1AuthorDetailsGet(
      {
        authorSlug,
      },
      { next: { revalidate: REVALIDATE_TIME } }
    );
    return author;
  } catch (error) {
    return null;
  }
};

export const fetchTags = async () => {
  try {
    const tags = await blogApiClient.api.listTagsApiV1ListTagsGet({
      next: { revalidate: REVALIDATE_TIME },
    });
    return tags;
  } catch (error) {
    return null;
  }
};

export const fetchTag = async (tagSlug: string) => {
  try {
    const tag = await blogApiClient.api.tagDetailsApiV1TagDetailsGet(
      {
        tagSlug,
      },
      { next: { revalidate: REVALIDATE_TIME } }
    );
    return tag;
  } catch (error) {
    return null;
  }
};
