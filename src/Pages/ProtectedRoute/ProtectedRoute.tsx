import { ReactNode, useContext, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import { baseUrl } from '../../Helpers/Router';
import { jwtDecode } from 'jwt-decode';
import { TDecodedToken } from '../../types/types';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { userId } = useParams();
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionCookie = document.cookie;
    if (!sessionCookie) {
      navigate(`${baseUrl}`);
    } else {
      const currentTime = Date.now() / 1000;
      const decodedToken = jwtDecode<TDecodedToken>(sessionCookie);

      if (decodedToken) {
        if (decodedToken.exp < currentTime) {
          navigate(`${baseUrl}`);
        }
      }
    }
  });

  if (!userData || userData.id !== userId) {
    return <Navigate to={`${baseUrl}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
