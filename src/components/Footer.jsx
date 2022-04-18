import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dayjs from 'dayjs';
import { BsGithub, BsCodeSquare } from 'react-icons/bs';

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
  <a href={to}>
    <BreadCrumbStyle>{children}</BreadCrumbStyle>
  </a>
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

const Socials = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;
const SocialButton = styled.a`
  padding: 10px;
  background-color: var(--contrast);
  border-radius: 5px;
  margin-right: 5px;
  &:hover {
    background-color: var(--green-300);
    color: var(--black);
  }
`;

export default function Footer() {
  const year = dayjs().get('year');
  let tos = [];
  let arr = window.location.pathname.split('/');
  window.location.pathname.split('/').map((part, id, arr) => {
    if (id != 0) {
      tos.push([
        `${
          arr.slice(1, id).join('/') == '' ? '/' + arr.slice(1, id).join('/') : '/' + arr.slice(1, id).join('/') + '/'
        }${part}`,
        part
      ]);
    } else {
      tos.push(['/', 'root']);
    }
  });
  console.log(arr);
  console.log(tos);

  return (
    <FooterDiv>
      <FooterMain>
        <FooterSection>
          <Header>Hallo World!</Header>
          <BreadCrumbs>
            {tos.map((to, id) => (
              <BreadCrumb key={id} to={to[0]}>
                {to[0] === '/' ? '' : '/ '}
                {to[1]}{' '}
              </BreadCrumb>
            ))}
          </BreadCrumbs>
        </FooterSection>
        <FooterSection>
          <Text>
            This site was statically generated with Next.js. All posts were written with MDX. And it was styled with
            Styled Components and Sass.
          </Text>
          <Socials>
            <SocialButton
              className="transition"
              href="https://github.com/Reboot-Codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> GitHub
            </SocialButton>
            <SocialButton
              className="transition"
              href="https://github.com/Reboot-Codes/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsCodeSquare /> Source
            </SocialButton>
          </Socials>
        </FooterSection>
      </FooterMain>
      <FooterCopyright>
        <Text>&copy; {year == 2022 ? '2022' : `2022-${year}`} Ruben Flores, All rights reserved.</Text>
      </FooterCopyright>
    </FooterDiv>
  );
}
