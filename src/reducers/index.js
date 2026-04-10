import { combineReducers } from '@reduxjs/toolkit';
import authedUser from './authedUser';
import users from './users';

// TODO add reducers for users, questions etc.
// TODO add a reducer for "loading"
export default combineReducers({
  authedUser,
  users
});
