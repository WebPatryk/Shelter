import React from 'react';
import ImageAside from 'components/ImageAside/ImageAside';
import LoginBox from 'components/LoginBox/LoginBox';

function Login() {
  return (
    <>
      <main style={{ display: 'flex' }}>
        <ImageAside />
        <LoginBox />
      </main>
    </>
  );
}

export default Login;
