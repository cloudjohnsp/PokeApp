import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { TAuthContext, TContextProviderProps, TUser } from '../types/types';
import { axiosApi } from '../http/config/axios';

const UserProvider = ({ children }: TContextProviderProps) => {
  const [userData, setUserData] = useState<TUser>();

  const signIn = async (
    email: string,
    password: string
  ): Promise<string | never> => {
    const loginEndpoint: string = `auth/login`;
    const userId: string = await axiosApi
      .post(loginEndpoint, {
        email,
        password,
      })
      .then(({ data: { user, token } }) => {
        setUserData(user);
        console.log(user);
        document.cookie = token;
        return user.id;
      })
      .catch((error) => {
        console.error(error);
      });

    return userId;
  };

  const context: TAuthContext = {
    userData,
    setUserData,
    signIn,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export { UserProvider };
