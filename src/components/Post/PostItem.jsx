import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--contrast);
  border-radius: 5px;
  padding: 12px;
  max-width: 30vw;
  justify-content: center;
  cursor: pointer;
`;

const PostImage = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  object-fit: contain;
  position: relative;
`;

const Header = styled.a`
  font-size: var(--step-up-2);
  font-weight: bold;
`;

const Text = styled.p`
  font-size: var(--step-up-1);
`;

export default function PostItem({ article }) {
  let imageUrl = undefined;
  if (article.ogImage) {
    if (article.ogImage.url) {
      imageUrl = article.ogImage.url;
    }
  }

  return (
    <Link as={`/blog/${article.slug}`} href="/blog/[slug]">
      <PostContainer>
        {imageUrl ? (
          <PostImage>
            <Image src={imageUrl} alt="Post image" lazy="loading" layout="fill" objectFit="contain" />
          </PostImage>
        ) : (
          <></>
        )}
        <Header>{article.title}</Header>
        <Text>{article.description}</Text>
        <Text>
          <span>{article.timeReading.text}</span> • <span>{article.date}</span>
        </Text>
      </PostContainer>
    </Link>
  );
}
