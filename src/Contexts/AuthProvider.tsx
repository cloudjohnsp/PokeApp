import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { axiosApi } from '../http/config/axios';
import { TAuthContext, TContextProviderProps, TUser } from '../types/types';

type TAuthResponse = {
  data: {
    user: TUser;
    token: string;
  };
};

const AuthProvider = ({ children }: TContextProviderProps) => {
  const [userData, setUserData] = useState<TUser>({} as TUser);

  const signIn = async (
    email: string,
    password: string
  ): Promise<TUser | null> => {
    const loginEndpoint: string = `auth/login`;

    const loginRequest = await axiosApi.post(loginEndpoint, {
      email,
      password,
    });

    if (loginRequest.status === 200) {
      const {
        data: { user, token },
      }: TAuthResponse = loginRequest;

      if (user) {
        setUserData(user);
        if (token) document.cookie = token;
        return user;
      }
    }
    return null;
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

export { AuthProvider };
