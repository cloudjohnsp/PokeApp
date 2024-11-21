import { jwtDecode } from 'jwt-decode';

export interface TDecodedToken {
  exp: number;
  [key: string]: unknown;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<TDecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch {
    return true;
  }
};
