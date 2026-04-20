import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleLoginUser } from '../actions/authedUser';
import { useNavigate, useLocation } from 'react-router';

const LoginForm = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  // TODO document this function
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const success = dispatch(handleLoginUser(username, password));

    if (!success) {
      setLoginError(true);
      setUsername('');
      setPassword('');
    }
  };

  // TODO document this function
  useEffect(() => {
    if (authedUser) {
      navigate(from, { replace: true });
    }
  }, [authedUser, navigate, from]);

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h2>Log in</h2>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameInputChange}
          autoComplete="on"
          required
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordInputChange}
          required
        ></input>
      </div>
      {loginError && <p role="alert">Invalid username or password. Please try again.</p>}
      <button type="submit" disabled={!username || !password}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
