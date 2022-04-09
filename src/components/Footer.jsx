import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';

const FooterDiv = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border-top 1px solid var(--color);
  padding-top: 12px;
`;

const FooterMain = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  justify-items: center;
  align-items: center;
  item-align: center;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Header = styled.h1`
  font-size: var(--step-up-2);
  font-weight: bold;
`;

const BreadCrumbs = styled.p``;
const BreadCrumbStyle = styled.span``;
const BreadCrumb = ({ to, children }) => (
  <Link href={to}>
    <BreadCrumbStyle>{children}</BreadCrumbStyle>
  </Link>
);
/*
  Eh, might implement this later...

  import { BsArrowUp } from 'react-icons/bs';
  const ScrollButton = styled.button`
    padding: 12px;
    width: 25px;
    height: 25px;
    border-radius: 9999px;
    border: none;
    background-color: var(--green-300);
    color: var(--black);
    font-size: var(--step-up-3);
  `;
  <ScrollButton onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
    <BsArrowUp />
  </ScrollButton>
*/
const Text = styled.p``;

export default function Footer() {
  const year = dayjs().get('year');

  return (
    <FooterDiv>
      <FooterMain>
        <FooterSection>
          <Header>Hallo World!</Header>
          <BreadCrumbs>
            <BreadCrumb to="/" key={1}>
              root{' '}
            </BreadCrumb>
            {window.location.pathname === '/' ? (
              <></>
            ) : (
              window.location.pathname.split('/').map((part, id) =>
                id === 0 ? (
                  <></>
                ) : (
                  <BreadCrumb key={id} to={part}>
                    / {part}{' '}
                  </BreadCrumb>
                )
              )
            )}
          </BreadCrumbs>
        </FooterSection>
        <FooterSection>
          <Text>
            This site was statically generated with Next.js. All posts were written with MDX. And it was styled with
            Styled Components and Sass.
          </Text>
        </FooterSection>
      </FooterMain>
      <FooterCopyright>
        <Text>&copy; {year == 2022 ? '2022' : `2022-${year}`} Ruben Flores, All rights reserved.</Text>
      </FooterCopyright>
    </FooterDiv>
  );
}
