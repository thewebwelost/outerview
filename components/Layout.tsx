import { useSession } from 'next-auth/react';
import { ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import Header from './Header';

interface ILayout {
  children: ReactElement;
}

export default function Layout({ children }: ILayout) {
  const { user, setUser } = useContext(UserContext);
  const { data: session } = useSession();

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
    <>
      <Header user={user} />
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
