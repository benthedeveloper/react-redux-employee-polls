import { combineReducers } from '@reduxjs/toolkit';
import authedUser from './authedUser';

// TODO add reducers for users, questions etc.
export default combineReducers({
  authedUser,
});
