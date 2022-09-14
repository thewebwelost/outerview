import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface AuthStateInterface {
  isAuth?: boolean;
  accessToken?: string;
  user?: { [key: string]: string };
}

interface AuthContextInterface {
  authStatus: AuthStateInterface;
  setAuthStatus: Dispatch<SetStateAction<AuthStateInterface>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);
const Provider = AuthContext.Provider;

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [authStatus, setAuthStatus] = useState({});

  return (
    <Provider
      value={{
        authStatus,
        setAuthStatus: (val) => {
          console.log('val', val);
          debugger;
          setAuthStatus(val);
        },
      }}
    >
      {children}
    </Provider>
  );
}
