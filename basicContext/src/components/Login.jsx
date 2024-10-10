import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="message">Please Enter User</div>;

  return (
    <div className="message">
      Welcome User: {user.username} with Password: {user.password}
    </div>
  );
}

export default Login;
