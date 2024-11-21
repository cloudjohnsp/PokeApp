import { memo } from 'react';
import { AuthContext } from './AuthContext';
import { axiosApi } from '../http/config/axios';
import {
  ContextProviderProps,
  TAuthContext,
  TSignUpData,
  TUserInfo,
} from '../types/types';
import { errorHandler } from '../http/errors';
import { toast } from 'react-toastify';
import { getCookie } from '../Helpers/Storage';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../Helpers/Router';
import axios from 'axios';
import usePersistedState from '../Hooks/usePersistedData';
import useAuthRedirect from '../Hooks/useAuthRedirect';
import { userInitialValue } from '../Helpers/Factory';

type TAuthResponse = {
  data: {
    user: TUserInfo;
    token: string;
  };
};

const AuthProvider = memo(({ children }: ContextProviderProps) => {
  useAuthRedirect(baseUrl);
  const navigate = useNavigate();
  const { setValue } = usePersistedState<TUserInfo>(
    'user_data',
    userInitialValue
  );

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
  ): Promise<TUserInfo | null | undefined> => {
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
          setValue(user);
          if (token) document.cookie = `auth_cookie=${token}`;
          return user;
        }
      }
      return null;
    } catch (err) {
      errorHandler(err);
    }
  };

  const updateUser = async (
    id: string,
    nickName: string
  ): Promise<boolean | undefined> => {
    try {
      const token = getCookie('auth_cookie');

      const request = await axiosApi.patch(
        'user/update-nickname',
        {
          id,
          nickName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (request.status === 200) {
        const response = request.data;
        setValue(response);
        toast.success('Updated successfuly');
        return true;
      }
      return false;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        errorHandler(err);
        if (err.status === 401) navigate(baseUrl);
      }
    }
  };

  const context: TAuthContext = {
    signUp,
    signIn,
    updateUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
});

export { AuthProvider };
