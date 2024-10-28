import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { axiosApi } from '../http/config/axios';
import { TAuthContext, TContextProviderProps, TUser } from '../types/types';
import { AxiosError } from 'axios';

type TAuthResponse = {
  data: {
    user: TUser;
    token: string;
  };
};

const AuthProvider = ({ children }: TContextProviderProps) => {
  const [userData, setUserData] = useState<TUser>();

  const signIn = async (
    email: string,
    password: string
  ): Promise<boolean | undefined> => {
    const loginEndpoint: string = `auth/login`;
    try {
      const loginRequest = await axiosApi.post(loginEndpoint, {
        email,
        password,
      });

      if (loginRequest.status === 200) {
        const {
          data: { user, token },
        }: TAuthResponse = loginRequest;

        setUserData(user);
        document.cookie = token;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(JSON.stringify(err.response?.data));
    }
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
