'use client';

import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Image from "next/legacy/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>outerview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <header className="flex justify-center p-3">
        <div className="relative w-44 h-10">
          <Image
            src="/images/logo.svg"
            title="Job Search"
            alt="Job Search"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>

      <main className="flex flex-col w-full items-center">
        <div className="flex justify-around max-w-6xl w-full mt-10 mb-10 p-3">
          <div className="max-w-md p-3">
            <h1 className="text-2xl font-bold text-center">
              Simple tool to build resume and organize application process
            </h1>

            <div className="mt-5">
              <p>1. Build resume using transparent rules</p>
              <p>2. Gather all data in one place and use it</p>
              <p>3. Keep track of every application</p>

              <p className="mt-3">Simple as One Two Three!</p>
            </div>
          </div>
          <div className="text-sm">
            <button
              onClick={() =>
                signIn('', {
                  callbackUrl: '/dashboard',
                })
              }
            >
              Log in
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center max-w-2xl w-full h-80 mt-3">
          <p className="block max-w-xs">
            Outerview will help you organize your skills to match every company
            individually. Consider it as a simple resume builder
          </p>
          <div className="relative w-80 h-60">
            <Image
              src="/content/step_1.png"
              title="Job Search"
              alt="Job Search"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="flex justify-between items-center max-w-2xl w-full h-80 mt-3">
          <div className="relative w-80 h-60">
            <Image
              src="/content/step_2.png"
              title="Job Search"
              alt="Job Search"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="block max-w-xs">
            Juggeling with emails and calendars crowded with everything from
            spam to Netflix releases and new credit products?
          </p>
        </div>

        <div className="flex justify-between items-center max-w-2xl w-full h-80 mt-3">
          <p className="block max-w-xs">
            We will help you organizing every application to track every little
            piece of data. It will work for you when time comes
          </p>
          <div className="relative w-80 h-60">
            <Image
              src="/content/step_1.png"
              title="Job Search"
              alt="Job Search"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center mt-5 p-5 text-xs italic">
        <a
          href="https://www.glassdoor.com/index.htm"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          hopefully will be powered by
          <span className="relative block w-20 h-4 ml-2">
            <Image
              src="/images/glassdoor.svg"
              title="Job Search"
              alt="Glassdoor Job Search external link"
              layout="fill"
              objectFit="contain"
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
