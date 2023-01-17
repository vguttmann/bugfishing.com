import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { BsGithub, BsCodeSquare, BsRssFill } from 'react-icons/bs';

const FooterDiv = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  margin-top: 12px;
  border-top: 1px solid var(--color);
  padding-top: 12px;
`;

const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  justify-items: center;
  align-items: center;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5px;

  @media (min-width: 786px) {
    width: 50%;
  }
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
    background-color: var(--brand-300);
    color: var(--black);
    font-size: var(--step-up-3);
  `;
  <ScrollButton onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
    <BsArrowUp />
  </ScrollButton>
*/
const Text = styled.p`
  text-align: center;
  width: 100%;
`;

const Socials = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SocialButton = styled.a`
  padding: 10px;
  background-color: var(--contrast);
  border-radius: 5px;
  margin-right: 5px;

  &:hover {
    background-color: var(--brand-300);
    color: var(--black);
  }
`;

const TechLink = styled.a`
  text-decoration: underline;
`;

export default function Footer() {
  //const router = useRouter();
  const year = dayjs().get('year');
  /*const [tos, setTos] = React.useState(<></>);
  React.useEffect(() => {
    if (router) {
      const tosProto = [];
      router.asPath.split('/').map((part, id, arr) => {
        if (id != 0) {
          tosProto.push([
            `${
              arr.slice(1, id).join('/') == '' ? '/' + arr.slice(1, id).join('/') : '/' + arr.slice(1, id).join('/') + '/'
            }${part}`,
            part
          ]);
        } else {
          tosProto.push(['/', 'root']);
        }
      }, [router]);

      const breadcrumb = (<BreadCrumbs>{tosProto.map((to, id) => (
        <BreadCrumb key={id} to={to[0]}>
          {to[0] === '/' ? '' : '/ '}
          {to[1].split('-').join(' ')}{' '}
        </BreadCrumb>
      ))}</BreadCrumbs>)

      setTos(breadcrumb);
    }
  });*/

  return (
    <FooterDiv>
      <FooterMain>
        <FooterSection>
          <Header>Hallo Welt!</Header>
          <p>Hello World in German.</p>
          {/*tos*/}
        </FooterSection>
        <FooterSection>
          <p>
            I think it's interesting to know what powers a site! Speaking of, this site was statically generated with{' '}
            <TechLink href="https://nextjs.org" target="_blank">
              Next.js
            </TechLink>{' '}
            and styled with{' '}
            <TechLink href="https://styled-components.com/" target="_blank">
              Styled Components
            </TechLink>{' '}
            and{' '}
            <TechLink href="https://sass-lang.com/" target="_blank">
              SCSS
            </TechLink>
            . All posts were written with{' '}
            <TechLink href="https://mdxjs.com/" target="_blank">
              MDX
            </TechLink>
            . Amazingly forked from{' '}
            <TechLink href="https://github.com/reboot-codes/reboot-codes.github.io" target="_blank">
              Reboot-Codes
            </TechLink>{' '}
            and cached by{' '}
            <TechLink href="https://www.cloudflare.com/" target="_blank">
              CloudFlare
            </TechLink>
            .
          </p>
          <Socials>
            <SocialButton href="https://github.com/vguttmann" target="_blank" rel="noopener noreferrer">
              <BsGithub /> GitHub
            </SocialButton>
            <SocialButton href="https://github.com/vguttmann/bugfishing.com" target="_blank" rel="noopener noreferrer">
              <BsCodeSquare /> Source
            </SocialButton>
            <SocialButton href="/feed.rss" target="_blank">
              <BsRssFill /> RSS Feed
            </SocialButton>
          </Socials>
        </FooterSection>
      </FooterMain>
      <FooterCopyright>
        <Text>&copy; {year == 2022 ? '2022' : `2022-${year}`} vguttmann, All rights reserved.</Text>
      </FooterCopyright>
    </FooterDiv>
  );
}
