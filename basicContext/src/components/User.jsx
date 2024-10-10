import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const SubmitBtn = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="container">
      <h1>Enter User and Password</h1>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SubmitBtn}>Submit</button>
    </div>
  );
}

export default User;
