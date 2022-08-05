import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GoRepo, GoStar, GoGitBranch } from 'react-icons/go';
import {
  SiDeno,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiRaspberrypi,
  SiNuxtdotjs
} from 'react-icons/si';
import { BsPlugFill } from 'react-icons/bs';

// placeholder generated from:
/*
query MyQuery {
  user(login: "Reboot-Codes") {
    repositoriesContributedTo(
      first: 10
      contributionTypes: COMMIT
      includeUserRepositories: true
      privacy: PUBLIC
      orderBy: {field: UPDATED_AT, direction: DESC}
    ) {
      nodes {
        name
        owner {
          login
          url
        }
        description
        forkCount
        url
        isFork
        isTemplate
        stargazerCount
      }
    }
  }
}
*/
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
    stargazerCount: 526
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
    name: 'open-car',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'An open and free car operating system.',
    url: 'https://github.com/Reboot-Codes/open-car',
    isFork: false,
    isTemplate: false,
    stargazerCount: 1
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
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: center;
  min-height: 600px !important;

  @media (min-width: 834px) {
    flex-direction: row;
    height: calc(100vh - 32px);
  }
`;

const About = styled.div`
  padding-bottom: 32px;

  @media (min-width: 1084px) {
    min-width: 450px;
  }
`;

const AboutHeading = styled.h1`
  font-weight: bold;
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
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  margin: 0 12px;

  @media (min-width: 834px) {
    grid-template-columns: calc(50% - 6px) calc(50% - 6px);
  }
`;

const GHCard = styled.div`
  @media (max-width: 768px) {
    width: calc(90vw - 26px);
  }

  border: 1px solid rgba(127.5, 127.5, 127.5, 0.8);
  border-radius: 5px;
  padding: 12px;

  &:hover {
    background-color: var(--brand-300);
    color: var(--black);
    border-color: rgba(127.5, 127.5, 127.5, 0);
  }
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

const GHDesc = styled.p`
  margin-top: 10px;
  margin: 0 5px;
  opacity: 80%;
  word-wrap: break-word;
`;

const TechnologiesSection = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TechSection = styled.div`
  padding-bottom: 32px;

  @media (min-width: 1084px) {
    min-width: 450px;
  }
`;

const TechHeader = styled.h1`
  font-weight: bold;
`;

const TechText = styled.p``;

const Technologies = styled.div`
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  margin: 0 12px;

  @media (min-width: 768px) {
    grid-template-columns: calc(50% - 6px) calc(50% - 6px);
  }
`;

const Technology = styled.a`
  display: block;
  border: 1px solid rgba(127.5, 127.5, 127.5, 0.8);
  border-radius: 5px;
  padding: 12px;

  &:hover {
    background-color: var(--brand-300);
    color: var(--black);
    border-color: rgba(127.5, 127.5, 127.5, 0);
  }
`;

const TechnologyName = styled.h1`
  font-size: var(--step-up-2);
`;

const TechnologyDesc = styled.p`
  margin-top: 10px;
  margin: 0 5px;
  opacity: 80%;
`;

const AboutSection = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MiniAboutSection = styled.div`
  padding-bottom: 32px;

  @media (min-width: 1084px) {
    min-width: 450px;
  }
`;

const AboutHeader = styled.h1`
  font-weight: bold;
`;

const AboutMe = styled.div`
  width: 100%;
  margin: 0 12px;
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
`;

const AboutBlurb = styled.p``;

export default function Home() {
  return (
    <>
      <Head>
        <title>Reboot-Codes: Home</title>
      </Head>

      <HeroSection>
        <About>
          <AboutHeading>
            Making amazing things with
            <AboutBreak />
            <AboutSpace> </AboutSpace>
            computers since 2019.
          </AboutHeading>
          <AboutText>Here are some repo's I've contributed to.</AboutText>
        </About>
        <GHRepos>
          {repos.map((repo, id) => (
            <GHCard key={id} className="transition">
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
              <GHDesc>
                {repo.description} <GoStar /> {repo.stargazerCount} <GoGitBranch /> {repo.forkCount}
              </GHDesc>
            </GHCard>
          ))}
        </GHRepos>
      </HeroSection>

      <TechnologiesSection>
        <TechSection>
          <TechHeader>Tools of the Trade.</TechHeader>
          <TechText>Here is a comprehensive list of technologies I have used in projects.</TechText>
        </TechSection>

        <Technologies>
          <Technology href="https://nodejs.org/en/" target="_blank" className="transition">
            <TechnologyName>
              <SiNodedotjs /> Node.js
            </TechnologyName>
            <TechnologyDesc>
              The first solution to use JavaScript server-side. It powers this site; and many others like Apple,
              Twitter, and more.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://www.typescriptlang.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiTypescript /> TypeScript
            </TechnologyName>
            <TechnologyDesc>
              My favorite language to write code in. It's type safe and can be compiled into JavaScript to be used
              anywhere.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://reactjs.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiReact /> React
            </TechnologyName>
            <TechnologyDesc>
              React is a frontend JavaScript library that allows for very flexible and extendable web apps. It runs this
              site with it's reusable components and advanced features.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://nextjs.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiNextdotjs /> Next.js
            </TechnologyName>
            <TechnologyDesc>
              A framework to use React for high traffic, production web applications. It powers this site with it's use
              of server side rendering.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://www.postgresql.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiPostgresql /> PostgreSQL
            </TechnologyName>
            <TechnologyDesc>
              A very popular and powerful relational database. That's been tried and tested since 1996.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://www.mongodb.com/" target="_blank" className="transition">
            <TechnologyName>
              <SiMongodb /> MongoDB
            </TechnologyName>
            <TechnologyDesc>A document-based, no-SQL database for modern applications.</TechnologyDesc>
          </Technology>
          <Technology href="https://deno.land/" target="_blank" className="transition">
            <TechnologyName>
              <SiDeno /> Deno
            </TechnologyName>
            <TechnologyDesc>
              A next generation JavaScript and TypeScript interpreter like Node.js, but written in rust using the V8
              engine. It aims to be fully compatible with the browser and uses web imports.
            </TechnologyDesc>
          </Technology>
          <Technology
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"
            target="_blank"
            className="transition"
          >
            <TechnologyName>
              <BsPlugFill /> Websockets
            </TechnologyName>
            <TechnologyDesc>
              A web standard that allows for instantaneous delivery of data to and from clients and servers.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://nuxtjs.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiNuxtdotjs /> Nuxt.js
            </TechnologyName>
            <TechnologyDesc>
              Like Next.js, but using Vue.js instead of React.js. It also supports SSR and global imports.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://www.raspberrypi.com/" target="_blank" className="transition">
            <TechnologyName>
              <SiRaspberrypi /> Raspberry Pi
            </TechnologyName>
            <TechnologyDesc>A credit card sized, ARM based computer for low power, mobile computing.</TechnologyDesc>
          </Technology>
        </Technologies>
      </TechnologiesSection>

      <AboutSection>
        <MiniAboutSection>
          <AboutHeader>A bit more about me.</AboutHeader>
          <AboutBlurb>
            If you don't care about back story or are bored by big walls of words, you can skip this section.
          </AboutBlurb>
        </MiniAboutSection>
        <AboutMe>
          <p>
            Since I got my first computer when I was 12, I always wondered about how computers worked. This lead me down
            the rabbit hole of writing code. My first real project was a Discord.js bot that was cobbled together from
            many different tutorials and it had a lot of bugs. It did however, teach me a lot about writing JavaScript
            and using Node.js.
          </p>
          <p>
            Then I wondered about creating a web dashboard, like a lot of other Discord bots. This got me into using
            React, and later using MongoDB. This started my web development career. Although that project is long gone
            into the depths of my GitHub account, it was the starting point for me. And I hope to share what I've
            learned using this website.
          </p>
          <p>
            I'm always still learning, and I hope to learn more. <em>- Ruben</em> 🎉
          </p>
        </AboutMe>
      </AboutSection>
    </>
  );
}
