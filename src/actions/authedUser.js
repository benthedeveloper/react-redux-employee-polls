export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';

function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

// Note: Passwords should not be sent/received/stored in plain text. This is for demo purposes only.
export function handleLoginUser(id, password) {
  return (dispatch, getState) => {
    const { authedUser, users } = getState();

    if (authedUser) {
      return true;
    }

    if (users[id]?.password === password) {
      dispatch(setAuthedUser(id));
      return true;
    }

    return false;
  };
}

export function logOutUser() {
  return {
    type: LOG_OUT_USER,
  };
}
