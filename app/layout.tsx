'use client';

import { ReactElement, useState } from 'react';
import Head from './head';
import UserContextProvider from '../context/userContext';
import '../styles/globals.css';
import { IUser } from '../components/Header';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  const [user, setUser] = useState<IUser>({
    name: '',
    email: '',
    image: 'https://via.placeholder.com/150/FFFF00/000000',
  });

  return (
    <html lang="en">
      <Head />
      <body>
        <UserContextProvider
          value={{
            user,
            setUser,
          }}
        >
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
