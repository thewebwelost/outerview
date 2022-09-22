import { useState } from 'react';

export interface IAuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
}

function useAuth() {
  const [auth, setAuth] = useState<IAuthState>({
    accessToken: null,
    isLoggedIn: false,
  });
  return {
    setAuth,
    auth,
  };
}

export default useAuth;
