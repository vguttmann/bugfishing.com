import React from 'react';
import styled from 'styled-components';
import PostItem from '../../components/Post/PostItem';
import { api } from '../../lib/lib';

const Posts = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 12px;
`;

export default function Blog({ articles }) {
  return (
    <Posts>
      {articles.map((article) => (
        <PostItem key={article.slug} article={article} />
      ))}
    </Posts>
  );
}

export const getStaticProps = async () => {
  const articles = api.getAllArticles([
    'slug',
    'title',
    'description',
    'date',
    'coverImage',
    'excerpt',
    'timeReading',
    'ogImage',
    'content'
  ]);

  return {
    props: { articles }
  };
};
