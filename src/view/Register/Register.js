import React from 'react';
import ImageAside from 'components/ImageAside/ImageAside';
import RegisterBox from 'components/RegisterBox/RegisterBox';
import styled from 'styled-components';
import girlWithDog from 'assets/images/girl-with-dog.svg';

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
        <ImageAside photo={girlWithDog} />
        <RegisterBox />
      </Main>
    </>
  );
}

export default Login;
