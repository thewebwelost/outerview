'use client';

import { ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import Header from '../../components/Header';
import { SessionProvider } from 'next-auth/react';

interface ILayout {
  children: ReactElement | ReactElement[];
}

const RootLayout = ({ children }: ILayout) => {
  const { user, setUser } = useContext(UserContext);

  const userId = 1; // get user from auth session

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetch(`/api/user/${userId}`)
          .then((response) => response.json())
          .then((data) => setUser(data));
      } catch (err) {
        console.error(err);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [userId, setUser, user]);

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
