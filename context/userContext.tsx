import { createContext } from 'react';
import { IUser } from '../components/Header';

export const UserContext = createContext<{
  user: IUser;
  setUser: Function;
} | null>(null);

export default UserContext.Provider;
