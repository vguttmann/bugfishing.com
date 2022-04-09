import React from 'react';
import styled from 'styled-components';
import { BsCalendar, BsNewspaper } from 'react-icons/bs';

const Header = styled.div`
  width: 100%;
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

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
`;

const PostHeader = ({ title, description, date, ogImage }) => (
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
    {ogImage ? <PostImage src={ogImage.url} alt="Post image" lazy="loading" /> : <></>}
  </Header>
);

export default PostHeader;
