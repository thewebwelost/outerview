'use client';

import { ReactElement } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import Head from './head';
import '../styles/globals.css';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  return (
    <html lang="en">
      <Head />
      <body className="bg-gray-800 text-gray-200">
        <ReactQueryDevtools initialIsOpen />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
