import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
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
          <Routes>
            <Route path="/login" element={<Login />} />
            {
              authedUser && (
                <Route path="/" exact element={<Dashboard />} />
              )
            }
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
