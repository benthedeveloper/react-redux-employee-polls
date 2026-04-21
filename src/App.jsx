import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import './App.css';
import LoadingOverlay from './components/LoadingOverlay';
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
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    // Get the initial data for users and questions in parallel
    Promise.all([dispatch(handleGetUsers()), dispatch(handleGetQuestions())]);
  }, [dispatch]);

  return (
    <>
      <LoadingOverlay />
      <div className="container" inert={isLoading}>
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
    </>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
