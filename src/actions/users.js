import { getUsers } from '../utils/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleGetUsers() {
  return async (dispatch) => {
    const users = await getUsers();
    dispatch(receiveUsers(users));
    return users;
  };
}
