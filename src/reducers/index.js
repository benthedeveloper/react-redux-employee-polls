import { combineReducers } from '@reduxjs/toolkit';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

// TODO add a reducer for "loading"
export default combineReducers({
  authedUser,
  users,
  questions,
});
