import { useState } from 'react';
import { connect } from 'react-redux';
import { handleLoginUser } from '../actions/authedUser';
import { useNavigate, useLocation } from 'react-router';

const LoginForm = ({ dispatch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const loginSuccessful = dispatch(handleLoginUser(username, password));

    if (loginSuccessful) {
      navigate(from, { replace: true });
    } else {
      alert('Login failed: Invalid username or password.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form className='login-form' onSubmit={handleFormSubmit}>
      <h2>Log in</h2>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameInputChange}
          autoComplete='on'
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
      <button type="submit" disabled={!username || !password}>
        Submit
      </button>
    </form>
  );
};

export default connect()(LoginForm);
