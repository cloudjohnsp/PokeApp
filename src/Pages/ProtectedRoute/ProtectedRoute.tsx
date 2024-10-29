import { ReactNode, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import { baseUrl } from '../../Helpers/Router';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { userId } = useParams();
  const { userData } = useContext(AuthContext);

  if (!userData || userData.id !== userId) {
    return <Navigate to={`${baseUrl}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
