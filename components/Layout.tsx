import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import Header, { IHeader } from './Header';

interface ILayout {
  children: ReactElement | ReactElement[];
}

export default function Layout({ children }: ILayout) {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  // status "loading" | "authenticated" | "unauthenticated"
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('/');
    },
  });

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

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header user={session.user as IHeader['user']} />
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
