import React from 'react';
import styled from 'styled-components';
import { BsCalendar } from 'react-icons/bs';

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color);
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const Meta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  items-align: center;
`;

const MetaData = styled.span`
  padding-right: 12px;
`;

const Description = styled.p`
  width: 100%;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: var(--step-up-6);
  margin-right: auto;
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  object-fit: contain;
  position: relative;
  margin-top: 12px;

  @media (min-width: 834px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const PostHeader = ({ title, description, date, ogImage }) => {
  let imageUrl = undefined;
  if (ogImage) {
    if (ogImage.url) {
      imageUrl = ogImage.url;
    }
  }

  return (
    <Header>
      <Meta>
        <Heading>{title}</Heading>
        {date ? (
          <MetaData>
            <BsCalendar /> {date}
          </MetaData>
        ) : (
          <></>
        )}
      </Meta>
      <Description>{description ? description : <></>}</Description>
      {ogImage ? (
        <PostImage>
          <img src={imageUrl} alt="Post image" lazy="loading" layout="fill" objectFit="contain" />
        </PostImage>
      ) : (
        <></>
      )}
    </Header>
  );
};

export default PostHeader;
