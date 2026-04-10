import { useState } from "react";

const LoginForm = () => {
  // TODO: Check if the user is already logged in. If so, redirect to "/"

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
    
    // TODO check if username and password match a user in the store.
    // If so, save authedUser in the store, otherwise pop up an alert
    // telling the user to try again.
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Log in</h2>
      <div>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" value={username} onChange={handleUsernameInputChange} required></input>
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" value={password} onChange={handlePasswordInputChange} required></input>
      </div>
      {/* TODO disable button unless both fields are valid */}
      <button type="submit" disabled={!username || !password}>Submit</button>
    </form>
  );
};

export default LoginForm;