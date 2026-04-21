import { getUsers } from '../utils/api';
import { hideLoading, showLoading } from '../actions/loading';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleGetUsers() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await getUsers();
      dispatch(receiveUsers(users));
      return users;
    } catch (error) {
      console.warn('Error in handleGetUsers:', error);
    } finally {
      dispatch(hideLoading());
    }
  };
}
