import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
