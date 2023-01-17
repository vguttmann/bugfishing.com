import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { GoRepo, GoStar, GoGitBranch } from 'react-icons/go';
import { SiArduino, SiRust, SiNextdotjs, SiNodedotjs, SiFlutter, SiReact, SiDart, SiRaspberrypi } from 'react-icons/si';
import { BsPlugFill } from 'react-icons/bs';

// placeholder generated from:
/*
query MyQuery {
  user(login: "vguttmann") {
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
    name: 'MikroLeo',
    owner: {
      login: 'edson-acordi',
      url: 'https://github.com/edson-acordi'
    },
    description: 'Educational 4-bit microcomputer',
    forkCount: 2,
    url: 'https://github.com/edson-acordi/4bit-microcomputer',
    isFork: false,
    isTemplate: false,
    stargazerCount: 41
  },
  {
    name: 'xDrip-plus',
    owner: {
      login: 'jamorham',
      url: 'https://github.com/jamorham'
    },
    description:
      'An enhanced version of the xDrip app that allows blood sugar tracking with sensors, sugar level prediction and more',
    forkCount: 206,
    url: 'https://github.com/jamorham/xDrip-plus',
    isFork: false,
    isTemplate: false,
    stargazerCount: 298
  },
  {
    name: 'AntiMicroX',
    owner: {
      login: 'AntiMicroX',
      url: 'https://github.com/AntiMicroX'
    },
    description: 'A program that allows you to map mouse and keyboard macros to game controllers.',
    forkCount: 75,
    url: 'https://github.com/AntiMicroX/antimicrox',
    isFork: true,
    isTemplate: false,
    stargazerCount: 1181
  },
  {
    name: 'bugfishing.com',
    owner: {
      login: 'vguttmann',
      url: 'https://github.com/vguttmann'
    },
    description: 'My website, forked from reboot-codes.github.io',
    forkCount: 0,
    url: 'https://github.com/vguttmann/bugfishing.com',
    isFork: true,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'reboot-codes.github.io',
    owner: {
      login: 'Reboot-Codes',
      url: 'https://github.com/Reboot-Codes'
    },
    description: 'Reboot-Codes website, made with Next.js, SSR, and MDX.',
    forkCount: 1,
    url: 'https://github.com/Reboot-Codes/reboot-codes.github.io',
    isFork: false,
    isTemplate: false,
    stargazerCount: 2
  },
  {
    name: 'vguttmann',
    owner: {
      login: 'vguttmann',
      url: 'https://github.com/vguttmann/'
    },
    description: 'Profile README.md repo!',
    forkCount: 0,
    url: 'https://github.com/vguttmann/vguttmann',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
  },
  {
    name: 'libscopehp',
    owner: {
      login: 'vguttmann',
      url: 'https://github.com/vguttmann'
    },
    description: 'An interface library for old HP scopes (currently only my HP54645D).',
    forkCount: 0,
    url: 'https://github.com/vguttmann/libscopehp',
    isFork: false,
    isTemplate: false,
    stargazerCount: 0
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
            Making cool and dumb things with
            <AboutBreak />
            <AboutSpace> </AboutSpace>
            computers since 2014, and on the internet since 2020.
          </AboutHeading>
          <AboutText>Here are some repo's I've contributed to.</AboutText>
        </About>
        <GHRepos>
          {repos.map((repo, id) => (
            <GHCard key={id} className="transition">
              <GHTitle>
                {repo.isFork ? <GoGitBranch /> : <GoRepo />}
                <GHRepoURL>
                  {repo.owner.login !== 'vguttmann' ? (
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
          <TechText>Here is a nonexhaustive list of technologies I have used in projects.</TechText>
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
          <Technology href="https://www.dart.dev/" target="_blank" className="transition">
            <TechnologyName>
              <SiDart /> Dart
            </TechnologyName>
            <TechnologyDesc>
              One of my favorite language to write code in. It's type safe and can be compiled into JavaScript to be
              used anywhere.
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
          <Technology href="https://www.flutter.dev/" target="_blank" className="transition">
            <TechnologyName>
              <SiFlutter /> Flutter
            </TechnologyName>
            <TechnologyDesc>
              Together with the Dart programming language, Flutter is a tpye and null-safe framework that can compile to
              Web, Android, iOS, Windows, macOS, Linux and even embedded devices.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://www.rust-lang.org/" target="_blank" className="transition">
            <TechnologyName>
              <SiRust /> Rust
            </TechnologyName>
            <TechnologyDesc>
              A blazingly fast language that's type, memory and thread safe thanks to a few novel approaches. And by far
              the friendliet and most helpful error messages you'll ever see.
            </TechnologyDesc>
          </Technology>
          <Technology href="https://arduino.cc/" target="_blank" className="transition">
            <TechnologyName>
              <SiArduino /> Arduino
            </TechnologyName>
            <TechnologyDesc>
              When a using Raspberry Pi is bringing a sledgehammer to crack a nut, an Arudino is the perfect candidate..
            </TechnologyDesc>
          </Technology>
          <Technology href="https://kicad.org/" target="_blank" className="transition">
            <TechnologyName>KiCad</TechnologyName>
            <TechnologyDesc>An open-source EDA-Suite for designing circuit diagrams and PCBs.</TechnologyDesc>
          </Technology>
          <Technology href="https://www.raspberrypi.com/" target="_blank" className="transition">
            <TechnologyName>
              <SiRaspberrypi /> Raspberry Pi
            </TechnologyName>
            <TechnologyDesc>
              A credit card sized, ARM based computer for low power, mobile computing. You can never have enough of
              them.
            </TechnologyDesc>
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
            Since I got my calculator (a TI-84+) when I was about ten, I liked programming stuff. A christmas or two
            later, my uncle gifted me a development board with an ATMega. Things went smoothly until about February of
            2020.
          </p>
          <p>
            Then, a big change in my life happened: I was diagnosed with Type 1 Diabetes. Since a friend of mine had
            Diabetes since we can remember, I was quite familiar with it all. But, of course, I needed to spend some
            time in the clinic, both to rehydrate (I lost about ten kilos of weight), to learn the ropes with diabetes,
            and for them to find out how much insulin I would need.
          </p>
          <p>
            Not much was happening, and needless to say, I was bored out of my mind. So I decided to learn Flutter, and
            then later, I programmed a small app for a company I did an apprenticeship at. Another thing that was going
            on is that I got a Dexcom G6 CGM (a small thing that measures my blood sugar every five minutes and sends
            info to their receiver, and a smartphone). Or at least it should have sent blood sugars over, but Dexcom
            restricted the app to only run on phones they had tested. Luckily, u/Shabado8 on Reddit made a modified
            version so the restriction was removed. And Reddit was my gateway drug into the internet, and into all the
            stuff I still do to this day.
          </p>
          <p>
            Somewhere, something incredible is waiting to be discovered or made. <em>- vguttmann</em> 🎉
          </p>
        </AboutMe>
      </AboutSection>
    </>
  );
}
