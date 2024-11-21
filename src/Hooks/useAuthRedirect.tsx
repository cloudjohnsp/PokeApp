import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../Helpers/Storage';
import { isTokenExpired } from '../Helpers/Auth';

const useAuthRedirect = (baseUrl: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('auth_cookie');

    if (!token || isTokenExpired(token)) {
      navigate(baseUrl);
    }
  }, [baseUrl, navigate]);
};

export default useAuthRedirect;
