import { createContext } from 'react';
import { IUser } from '../components/Header';

const initialUserContext = {
  user: {
    name: '',
    email: '',
    image: 'https://via.placeholder.com/150/FFFF00/000000',
  },
  setUser: (user: IUser) => {},
};

export const UserContext = createContext<{
  user: IUser;
  setUser: (user: IUser) => void;
}>(initialUserContext);

export default UserContext.Provider;
