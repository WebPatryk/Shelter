import React from 'react';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';

function LoginBox() {
  return (
    <div>
      <img src="" alt="" />
      <h1>Login</h1>
      <h3> To animals word’s</h3>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <Button>Login</Button>
        <p>
          Don’t have an account yet?{' '}
          <Link to="/register">
            <strong>Sign up</strong>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginBox;
