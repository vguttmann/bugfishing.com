import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GoRepo, GoStar, GoGitBranch } from 'react-icons/go';

/* import Image from 'next/image';

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
`;

<ProfilePic>
  <Image src="/profile.png" width="100" height="100" style={{ borderRadius: '9999px' }} />
</ProfilePic> */

// placeholder
const repos = [
  {
    name: 'discordeno',
    owner: {
      login: 'discordeno',
      url: 'https://github.com/discordeno'
    },
    description: 'Discord API library for Deno',
    forkCount: 67,
    url: 'https://github.com/discordeno/discordeno',
    isFork: false,
    isTemplate: false,
    stargazerCount: 472
  },
  {
    name: 'denologger',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'A fast and lightweight JSON logger for deno',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/denologger',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'create-discordeno-bot',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'A quick CLI to create a Discordeno Bot. ',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/create-discordeno-bot',
    isFork: false,
    isTemplate: false,
    stargazerCount: 1
  },
  {
    name: 'website',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'My website, made with Next.js, SSR, and MDX.',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/website',
    isFork: false,
    isTemplate: false,
    stargazerCount: 1
  },
  {
    name: 'create-discordeno-bot-node',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'A quick CLI to create a Discordeno Bot.',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/create-discordeno-bot-node',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'template',
    owner: {
      login: 'discordeno',
      url: 'https://github.com/discordeno'
    },
    description:
      'Official Discordeno boilerplate. This Repository does not accept issues / PRs move to https://github.com/discordeno/discordeno/tree/main/template',
    forkCount: 20,
    url: 'https://github.com/discordeno/template',
    isFork: false,
    isTemplate: true,
    stargazerCount: 55
  },
  {
    name: 'Thor-Keyboard',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'My main custom keyboard',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/Thor-Keyboard',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'Cobalt-Bot',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'Cobalt - The Best Discord Bot',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/Cobalt-Bot',
    isFork: false,
    isTemplate: false,
    stargazerCount: 1
  },
  {
    name: 'Reboot-Codes',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'Profile README.md repo!',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/Reboot-Codes',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'zap-launcher',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description:
      'An electron(/vite/react) based, cross-platform(-ish), spotlight/search replacement. (Now with 20 times more parentheses!)',
    forkCount: 0,
    url: 'https://github.com/Reboot-Codes/zap-launcher',
    isFork: false,
    isTemplate: false,
    stargazerCount: 2
  }
];

const HeroSection = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12px;

  @media (min-width: 1084px) {
    flex-direction: row;
  }
`;

const About = styled.div`
  padding-bottom: 32px;

  @media (min-width: 1084px) {
    min-width: 450px;
  }
`;

const AboutBreak = styled.br`
  display: none;
  @media (min-width: 568px) {
    display: inline;
  }
`;

const AboutSpace = styled.span`
  display: inline;
  @media (min-width: 568px) {
    display: none;
  }
`;

const AboutText = styled.p`
  margin-top: 5px;
`;

const GHRepos = styled.div`
  margin: 0 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;

  @media (min-width: 714px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const GHCard = styled.div`
  padding: 12px;
  border: 1px solid rgba(127.5, 127.5, 127.5, 0.8);
  border-radius: 5px;
`;

const GHOwner = styled.a`
  opacity: 60%;
`;

const GHTitle = styled.div`
  font-size: var(--step-up-2);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GHRepoURL = styled.p`
  margin-left: 5px;
`;

const GHDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const GHDesc = styled.p`
  font-size: var(--step-down-2);
  opacity: 40%;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 12px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Reboot-Codes: Home</title>
      </Head>
      <HeroSection>
        <About>
          <h1>
            Making amazing things with
            <AboutBreak />
            <AboutSpace> </AboutSpace>
            computers since 2019.
          </h1>
          <AboutText>Here are some repo's I've contributed to.</AboutText>
        </About>
        <GHRepos>
          {repos.map((repo, id) => (
            <GHCard key={id}>
              <GHTitle>
                {repo.isFork ? <GoGitBranch /> : <GoRepo />}
                <GHRepoURL>
                  {repo.owner.login !== 'Reboot-Codes' ? (
                    <>
                      <GHOwner href={repo.owner.url} target="_blank">
                        {repo.owner.login}
                      </GHOwner>
                      /
                    </>
                  ) : (
                    <></>
                  )}
                  <a href={repo.url} target="_blank">
                    {repo.name}
                  </a>
                </GHRepoURL>
              </GHTitle>
              <GHDetails>
                <GHDesc>{repo.description}</GHDesc>
                <GHDesc>
                  <GoStar /> {repo.stargazerCount}
                </GHDesc>
                <GHDesc>
                  <GoGitBranch /> {repo.forkCount}
                </GHDesc>
              </GHDetails>
            </GHCard>
          ))}
        </GHRepos>
      </HeroSection>
    </>
  );
}
