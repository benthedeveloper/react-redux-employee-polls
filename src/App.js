import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import './App.css';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import CreatePoll from './components/CreatePoll';
import { handleGetUsers } from './actions/users';
import { Routes, Route } from 'react-router';

function App({ dispatch, authedUser }) {
  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch, authedUser]);

  return (
    <div>
      <Fragment>
        {/* TODO loading? */}
        <div className="container">
          {/* TODO check if this is the correct logic for routing based on login status */}
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<RequireAuth authedUser={authedUser} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<CreatePoll />} />
            </Route>

            <Route
              path="*"
              element={<Navigate to={authedUser ? '/' : '/login'} replace />}
            />
          </Routes>
        </div>
      </Fragment>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
