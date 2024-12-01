import { useContext } from 'react';
import { AuthContext } from './AuthWrapper';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user.isAuthenticated){
    return children;
  }
  return <Navigate to='/login' replace />;
};

export default ProtectedRoute;
