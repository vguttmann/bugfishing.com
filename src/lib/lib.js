import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import dayjs from 'dayjs';

const articlesDirectory = join(process.cwd(), 'src/posts');

function getRawArticleBySlug(slug) {
  const fullPath = join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

function getAllSlugs() {
  return fs.readdirSync(articlesDirectory);
}

function getArticleBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const { data, content } = getRawArticleBySlug(realSlug);
  const timeReading = readingTime(content);
  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'timeReading') {
      items[field] = timeReading;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

function getAllArticles(fields = []) {
  return getAllSlugs()
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((article1, article2) => (dayjs(article1.date).valueOf() > dayjs(article2.date).valueOf() ? -1 : 1));
}

function getArticlesByTag(tag, fields = []) {
  return getAllArticles(fields).filter((article) => {
    const tags = article.tags ?? [];
    return tags.includes(tag);
  });
}

function getAllTags() {
  const articles = getAllArticles(['tags']);
  const allTags = new Set();
  articles.forEach((article) => {
    const tags = article.tags;
    tags.forEach((tag) => allTags.add(tag));
  });
  return Array.from(allTags);
}

export const api = {
  getRawArticleBySlug,
  getAllSlugs,
  getAllArticles,
  getArticlesByTag,
  getArticleBySlug,
  getAllTags
};
