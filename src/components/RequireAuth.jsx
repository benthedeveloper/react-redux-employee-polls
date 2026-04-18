import { Navigate, Outlet, useLocation } from 'react-router';

function RequireAuth({ authedUser }) {
  const location = useLocation();

  if (!authedUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
