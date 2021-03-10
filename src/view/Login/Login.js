import React from 'react';
import ImageAside from 'components/ImageAside/ImageAside';
import LoginBox from 'components/LoginBox/LoginBox';
import styled from 'styled-components';
import mainDog from 'assets/images/main-dog.svg';

const Main = styled.main`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

function Login() {
  return (
    <>
      <Main>
        <ImageAside photo={mainDog} />
        <LoginBox />
      </Main>
    </>
  );
}

export default Login;
