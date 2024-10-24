import { useContext } from 'react';
import { UserContext } from '../../Contexts/AuthContext';

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
