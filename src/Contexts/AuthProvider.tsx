import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { axiosApi } from '../http/config/axios';
import {
  TAuthContext,
  TContextProviderProps,
  TSignUpData,
  TUser,
} from '../types/types';
import { errorHandler } from '../http/errors';
import { toast } from 'react-toastify';

type TAuthResponse = {
  data: {
    user: TUser;
    token: string;
  };
};

const AuthProvider = ({ children }: TContextProviderProps) => {
  const [userData, setUserData] = useState<TUser>({} as TUser);

  const signUp = async (
    signUpRequest: TSignUpData
  ): Promise<boolean | undefined> => {
    const { nickName, email, password } = signUpRequest;
    try {
      const registerRequest = await axiosApi.post('auth/register', {
        nickName,
        email,
        password,
      });

      if (registerRequest.status === 201) {
        toast.success('Account created successfully');
        return true;
      }
      return false;
    } catch (err) {
      errorHandler(err);
    }
  };

  const signIn = async (
    email: string,
    password: string
  ): Promise<TUser | null | undefined> => {
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

        if (user) {
          setUserData(user);
          if (token) document.cookie = token;
          return user;
        }
      }
      return null;
    } catch (err) {
      errorHandler(err);
    }
  };

  const context: TAuthContext = {
    userData,
    setUserData,
    signUp,
    signIn,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
