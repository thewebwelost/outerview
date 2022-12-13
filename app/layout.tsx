'use client';

import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from './head';
import '../styles/globals.css';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const queryClient = new QueryClient();

const RootLayout = ({ children }: ILayout) => {
  return (
    <html lang="en">
      <Head />
      <ReactQueryDevtools initialIsOpen />
      <QueryClientProvider client={queryClient}>
        <body className="bg-gray-800 text-gray-200">{children}</body>
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
