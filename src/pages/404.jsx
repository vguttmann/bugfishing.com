import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const LinkStyle = styled.a`
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  -webkit-transition: border-bottom 0.3s ease 0.05s;
  transition: border-bottom 0.3s ease 0.05s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-bottom: 1px solid var(--color);
  }
`;

const Link = ({ to, children }) => (
  <LinkStyle>
    <NextLink href={to}>{children}</NextLink>
  </LinkStyle>
);

export default function FourOhFour() {
  return (
    <>
      <h1>404, That's an error!</h1>
      <p>
        And <Link to="/">here</Link> is a convenient link to the homepage.
      </p>
    </>
  );
}
