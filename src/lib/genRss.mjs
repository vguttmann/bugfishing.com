import fs from 'fs';
import { api } from './lib.mjs';
import xml from 'xml';

const SITE = 'https://www.bugfishing.com';

function buildFeed(posts) {
  const sortedPosts = posts.sort(function (first, second) {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });

  const feedItems = [];

  feedItems.push(
    ...sortedPosts.map(function (post) {
      const item = [
        { title: post.title },
        {
          pubDate: new Date(post.date).toUTCString()
        },
        {
          guid: [{ _attr: { isPermaLink: true } }, `${SITE}/blog/${post.slug}`]
        },
        {
          description: {
            _cdata: post.content
          }
        }
      ];
      if (post.ogImage && post.ogImage.url) {
        item.push({
          image: [
            {
              link: `https://www.bugfishing.com${
                post.ogImage.url.startsWith('/') ? post.ogImage.url : `/${post.ogImage.url}`
              }`
            }
          ]
        });
      }
      const feedItem = {
        item
      };
      return feedItem;
    })
  );

  return feedItems;
}

function createRssFeed(posts) {
  console.log('Generating Feed...');
  /*const posts = [
    {
      title: 'Post One',
      date: '1/1/2020',
      slug: 'post-one',
      content: '<p>This is some content for post one.</p>'
    },
    {
      title: 'Post Two',
      date: '1/2/2020',
      slug: 'post-two',
      content: '<p>This is some content for post two.</p>'
    },
    {
      title: 'Post Three',
      date: '1/3/2020',
      slug: 'post-three',
      content: "<p>This is some content for post three. This is a relative <a href='/relative-link/'>link</a></p>"
    },
    {
      title: 'Post Four',
      date: '1/4/2020',
      slug: 'post-four',
      content: '<p>This is some content for post four.</p>'
    }
  ];*/

  const feedObject = {
    rss: [
      {
        _attr: {
          version: '2.0',
          'xmlns:atom': 'http://www.w3.org/2005/Atom'
        }
      },
      {
        channel: [
          {
            'atom:link': {
              _attr: {
                href: `${SITE}/feed.rss`,
                rel: 'self',
                type: 'application/rss+xml'
              }
            }
          },
          {
            title: "vguttmann's Blog"
          },
          {
            link: `${SITE}/blog`
          },
          { description: 'Yet another blog, this time, by vguttmann.' },
          { language: 'en-US' },
          ...buildFeed(posts)
        ]
      }
    ]
  };

  const feed = '<?xml version="1.0" encoding="UTF-8"?>' + xml(feedObject);

  return feed;
}

async function callback(err) {
  if (err) {
    console.error(err);
    throw err;
  }

  const articles = api.getAllArticles(['slug', 'title', 'description', 'date', 'ogImage']);
  await fs.writeFile('./public/feed.rss', createRssFeed(articles), 'utf-8', () => {});
  console.log('Wrote RSS feed!');
}

try {
  (async function genFeed() {
    console.log('Checking if ./public/feed.rss exists...');
    if (await fs.existsSync('./public/feed.rss')) {
      console.log('Already exists, deleting...');
      await fs.rm('./public/feed.rss', callback);
    } else {
      console.log("Doesn't Exist, Skipping...");
      await callback(undefined);
    }
  })();
} catch (err) {
  console.error(err);
}
