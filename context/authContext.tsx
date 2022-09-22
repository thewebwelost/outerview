import { createContext, ReactNode, useContext } from 'react';
import {
  ILogin,
  IRegister,
  IUser,
  useProvideAuth,
} from '../hooks/useProvideAuth';

export interface IAuthContext {
  errors: string[];
  isLoading: boolean;
  isLoggedIn: boolean;
  user: IUser | null;
  login: (authPayload: ILogin) => Promise<void>;
  logout: () => Promise<void>;
  register: (registerPayload: IRegister) => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);
const Provider = AuthContext.Provider;

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <Provider value={auth}>{children}</Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
