import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  align-items: center;
  background-color: var(--bg);
`;

const BrandStyle = styled.h1`
  font-size: var(--step-up-1);
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50vw;
`;

const MenuLinkStyle = styled.li`
  margin-left: 2em;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  -webkit-transition: border-bottom 0.3s ease 0.05s;
  transition: border-bottom 0.3s ease 0.05s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-bottom: 1px solid var(--color);
  }
`;

const Brand = ({ children }) => (
  <BrandStyle>
    <Link href="/">{children}</Link>
  </BrandStyle>
);

const MenuLink = ({ to, children }) => (
  <MenuLinkStyle>
    <Link href={to}>{children}</Link>
  </MenuLinkStyle>
);

export default function NavBar() {
  return (
    <Header>
      <Brand>Reboot Codes</Brand>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
      </Menu>
    </Header>
  );
}
