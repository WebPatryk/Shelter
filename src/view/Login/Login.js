import React from 'react';
import ImageAside from 'components/ImageAside/ImageAside';
import LoginBox from 'components/LoginBox/LoginBox';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const LoginBoxComponent = styled(LoginBox)`
  @media (max-width: 800px) {
    order: -1;
  }
`;
function Login() {
  return (
    <>
      <Main>
        <ImageAside />
        <LoginBoxComponent />
      </Main>
    </>
  );
}

export default Login;
