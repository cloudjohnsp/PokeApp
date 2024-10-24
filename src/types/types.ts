import { Dispatch, SetStateAction } from 'react';

export type TUser = {
  id: string;
  email: string;
  nickName: string;
  createdAt: Date;
  lastUpdatedAt: Date;
};

export type TAuthContext = {
  userData: TUser | undefined;
  setUserData: Dispatch<SetStateAction<TUser | undefined>>;
  signIn(email: string, password: string): Promise<string | never>;
};
