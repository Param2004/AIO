import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../layout/loader/loader';

const ProtectedRoute = ({ isAdmin,element: Element }) => {
  const { loading , isAuthenticated,user } = useSelector((state) => state.user);

  if (loading) {
    // You can handle loading state as needed
    return <Loader />;
  }
 
  if (user && isAdmin === true && user.role !== "admin")
    return  <Navigate to="/login" />

  return (
    isAuthenticated ? <Element /> : <Navigate to="/login" />
  );
};

export default ProtectedRoute;