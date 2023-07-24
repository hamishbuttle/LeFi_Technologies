import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  return authUser ? children : <Navigate to="/signIn" state={{ from: location }} replace />;
};

export default PrivateRoute;