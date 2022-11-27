'use client';

import { ReactElement } from 'react';
import Head from './head';
import UserContextProvider, { UserContext } from '../context/userContext';
import '../styles/globals.css';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <UserContextProvider
          value={{
            user: {
              name: '',
              email: '',
              image: 'https://via.placeholder.com/150/FFFF00/000000',
            },
            setUser: (data: any) => {},
          }}
        >
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
