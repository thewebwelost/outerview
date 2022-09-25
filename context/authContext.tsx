import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react';
import {
  ILogin,
  IRegister,
  IAuth,
  useProvideAuth,
} from '../hooks/useProvideAuth';

export interface IAuthContext {
  errors: string[];
  isLoading: boolean;
  isLoggedIn: boolean;
  auth: IAuth | null;
  setAuth: Dispatch<SetStateAction<IAuth>>;
  login: (authPayload: ILogin) => Promise<void>;
  logout: () => Promise<void>;
  register: (registerPayload: IRegister) => Promise<void>;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const authContextData = useProvideAuth();
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
