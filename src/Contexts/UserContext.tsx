import { createContext } from 'react';
import { TUserContext } from '../types/types';

export const UserContext = createContext<TUserContext>({} as TUserContext);
