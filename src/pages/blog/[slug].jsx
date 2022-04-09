import React from 'react';
import readingTime from 'reading-time';
import mdxPrism from 'mdx-prism';
import reHypeExternalLinks from 'rehype-external-links';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { NextSeo } from 'next-seo';

// import MDXComponents from "src/components/MDXComponents/MDXComponents";
import Post from '../../components/Post/Post';
import { api } from '../../lib/lib';

export default function Slug({ readingTime, frontMatter, slug, source }) {
  const content = hydrate(source);

  return (
    <div>
      <NextSeo title={frontMatter.title} description={frontMatter.description} />
      <Post
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        content={content}
        ogImage={frontMatter.ogImage}
        slug={slug}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { content, data } = api.getRawArticleBySlug(params.slug);

  const mdxSource = await renderToString(content, {
    // components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        import('remark-autolink-headings'),
        import('remark-slug'),
        import('remark-code-titles'),
        import('remark-autolink-headings'),
        import('remark-capitalize'),
        import('remark-code-titles'),
        import('remark-images'),
        import('remark-slug')
      ],
      rehypePlugins: [mdxPrism, reHypeExternalLinks]
    }
  });

  const tags = data.tags ?? [];
  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      tags
    }
  };
}

export async function getStaticPaths() {
  const articles = api.getAllArticles(['slug']);
  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug
        }
      };
    }),
    fallback: false
  };
}
