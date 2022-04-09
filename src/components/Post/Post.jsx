import React from 'react';
import Header from './PostHeader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = ({ readingTime, title, description, date, ogImage, content }) => (
  <Container>
    <Header readingTime={readingTime} title={title} description={description} date={date} ogImage={ogImage} />
    <Container className="md-block">{content}</Container>
  </Container>
);

export default Post;
