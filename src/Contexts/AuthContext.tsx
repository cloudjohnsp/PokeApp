import { createContext } from 'react';
import { TAuthContext } from '../types/types';

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);
