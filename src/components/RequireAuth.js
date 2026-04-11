import { Navigate, Outlet } from 'react-router';

function RequireAuth({ authedUser }) {
  if (!authedUser) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default RequireAuth;