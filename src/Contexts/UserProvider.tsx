import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';
import { TUser } from '../types/types';
import { axiosApi } from '../http/config/axios';

type ContextProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: ContextProviderProps) => {
  const [userData, setUserData] = useState<TUser>();

  const signIn = async (email: string, password: string) => {
    const loginEndpoint: string = `auth/login`;
    await axiosApi
      .post(loginEndpoint, {
        email,
        password,
      })
      .then(({ data: { user, token } }) => {
        setUserData(user);
        console.log(user);
        document.cookie = token;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const context = {
    userData,
    setUserData,
    signIn,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserProvider };
