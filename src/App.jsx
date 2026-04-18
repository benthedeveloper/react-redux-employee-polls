import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import './App.css';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Dashboard from './components/Dashboard';
import PollDetails from './components/PollDetails';
import Leaderboard from './components/Leaderboard';
import CreatePoll from './components/CreatePoll';
import { handleGetUsers } from './actions/users';
import { handleGetQuestions } from './actions/questions';
import { Routes, Route } from 'react-router';

function App({ dispatch, authedUser }) {
  useEffect(() => {
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
  }, [dispatch]);

  return (
    <div>
      <Fragment>
        {/* TODO loading? */}
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<RequireAuth authedUser={authedUser} />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/questions/:question_id" element={<PollDetails />} />
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
