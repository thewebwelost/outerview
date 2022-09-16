import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface IAuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  email: string | null;
  [key: string]: any;
}

export interface IAuthContext {
  authStatus: IAuthState;
  setAuthStatus: Dispatch<SetStateAction<IAuthState>>;
}

export const AuthContext = createContext<IAuthContext>({
  authStatus: {
    isLoggedIn: false,
    accessToken: null,
    email: null,
  },
  setAuthStatus: () => {},
});
const Provider = AuthContext.Provider;

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authStatus, setAuthStatus] = useState<IAuthState>({
    isLoggedIn: false,
    accessToken: null,
    email: null,
  });

  return (
    <Provider
      value={{
        authStatus,
        setAuthStatus,
      }}
    >
      {children}
    </Provider>
  );
}
