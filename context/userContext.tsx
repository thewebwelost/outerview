import { createContext } from 'react';

export const UserContext = createContext({
  user: {
    name: 'Jon',
    email: 'Doe',
    imageUrl: 'https://via.placeholder.com/150/FFFF00/000000',
  },
  setUser: (data) => {},
});

export default UserContext.Provider;
