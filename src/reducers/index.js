import { combineReducers } from '@reduxjs/toolkit';
import isLoading from './loading';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default combineReducers({
  isLoading,
  authedUser,
  users,
  questions,
});
