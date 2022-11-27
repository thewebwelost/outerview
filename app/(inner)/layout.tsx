'use client';

import { ReactElement } from 'react';
import Header from '../../components/Header';
import { SessionProvider } from 'next-auth/react';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  return (
    <SessionProvider>
      <Header />
      <div className="min-h-full">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
};

export default RootLayout;
