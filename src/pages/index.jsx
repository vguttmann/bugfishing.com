import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const HiThere = styled.h1`
  width: 100%;
  text-align: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid var(--contrast);
  border-radius: 5px;
`;

const Me = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12px;
  margin-bottom: 10px;
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
`;

const MiniBio = styled.div`
  display: flex;
  items-align: center;
  justify-content: center;
  flex-direction: column;
  font-size: var(--step-up-5);
`;

const Bio = styled.div`
  display: grid;
  gap: 6px;
`;

const Text = styled.p``;

export default function Home() {
  return (
    <>
      <HiThere>
        <code className="language-javascript">console.log(`👋 Hi there!`);</code>
      </HiThere>
      <Profile>
        <Me>
          <ProfilePic>
            <Image src="/profile.png" width="100" height="100" style={{ borderRadius: '9999px' }} />
          </ProfilePic>
          <MiniBio>
            <p>
              I'm Ruben,
              <br />
              and I like to make stuff with computers.
            </p>
          </MiniBio>
        </Me>
        <Bio>
          <Text>
            Specifically, most of my projects use the MERN stack. Occasionally swapping out MongoDB with MySQL, Express
            with Fastify, etc. However I use React in a lot of my projects. Fun fact: this site is statically generated
            with Next.js and hosted on Netlify.
          </Text>
          <Text>
            I wrote my first Node.js application (a discord bot) in 2019 at the age of 12. Which has since evolved into
            a long journey of learning and improving my skills in not just Node.js, of not just frontend development,
            but into all of CS. I have experimented with Rust, Go, and obviously JS/TS.
          </Text>
          <Text>I also have ventured into the world of UNIX, mainly using MacOS and Linux.</Text>
        </Bio>
      </Profile>
    </>
  );
}
