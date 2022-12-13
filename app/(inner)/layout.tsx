'use client';

import { ReactElement } from 'react';
import Header from '../../components/Header';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const queryClient = new QueryClient();

const RootLayout = ({ children }: ILayout) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="min-h-full">
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default RootLayout;
